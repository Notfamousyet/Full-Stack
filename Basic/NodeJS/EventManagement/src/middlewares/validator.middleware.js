import {validationResult} from "express-validator" 
import { ApiErrors } from "../utils/api-errors.js"

// will give you file extract errors from it
export const validate =(req,res,next)=>{
    const errors=validationResult(req)
    if(errors.isEmpty()){
        return next();
    }
    const extractedErrors=[];
    errors.array().map((err) => extractedErrors.push({[err.path]:err.msg}))
    throw new ApiErrors(422,"Recieved data is not valid",extractedErrors);
}