import {body} from "express-validator";

const userRegisterValidator=()=>{
    return [
        body("email")
            .trim()
            .notEmpty()
            .withMessage("Email isrequired")
            .isEmail()
            .withMessage("Email is invalid"),
        body("username")
            .trim()
            .notEmpty()
            .withMessage("Username is required")
            .isLowercase()
            .withMessage("Username must be in lower case")
            .isLength({min:3})
            .withMessage("Username must be at least 3 char"),
        body("password")
            .trim()
            .notEmpty()
            .withMessage("Passeord is required"),
        body("fullname")
            .optional()
            .trim()
            .notEmpty()
            .withMessage("Passsword is reuqired"),

    ];
}