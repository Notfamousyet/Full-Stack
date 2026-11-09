class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        errors=[],
        stack=""
    ){
        super(message) // passes the error message up to JavaScript's parent Error class so it knows what the core error is.
        this.statusCode=statusCode
        this.data=null
        this.message=message
        this.success= false
        this.errors=this.errors
        if(stack){
            this.stack=stack
        }else{
            Error.captureStackTrace(this,this.constructor)
        }
    } 
}

export {ApiError}