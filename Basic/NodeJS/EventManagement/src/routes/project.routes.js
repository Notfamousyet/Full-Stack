import {Router} from "express"
import { deleteMember,
    updateMemberRole,
    getProjectMembers,
    addMembersToProjects,
    deleteProjects,
    updateProjects,
    createProject,
    getProjectById,
    getProjects } from "../controllers/project.controllers.js";
import { validate } from "../middlewares/validator.middleware.js";
import { createProjectValidator,addMemberToProjectValidator, userRegisterValidator} from "../validators/index.js"
import { verifyJWT,validateProjectPermission } from "../middlewares/auth.middleware.js";
import { UserRolesEnum } from "../utils/constants.js";

const router =Router()
router.use(verifyJWT)
router
    .route("/")
    .get(getProjects)
    .post(createProjectValidator(),validate,createProject),
router
    .route("/:projectId")
    .get(validateProjectPermission([UserRolesEnum.ADMIN]))
    .put(
        validateProjectPermission([UserRolesEnum.ADMIN]),
        createProjectValidator(),
        validate,
        updateProjects
    )
    .delete(
        validateProjectPermission([UserRolesEnum.ADMIN]),
        deleteProjects
    ),
router
    .route("/:projectId/members")
    .get(getProjectMembers)
    .post(
        validateProjectPermission([UserRolesEnum.ADMIN]),
        addMemberToProjectValidator(),
        validate,
        addMembersToProjects
    ),
router
    .route("/:projectId/members/:userId")
    .put(validateProjectPermission([UserRolesEnum.ADMIN]),updateMemberRole)
    .delete(validateProjectPermission([UserRolesEnum.ADMIN]),deleteMember);

export default router