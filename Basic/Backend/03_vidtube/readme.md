Here we will create from scrach

1) use "npm init" command fill all details you need to create 
2) add "type": "module" in package.json so you can use import 
3) use command "npm i --save-dev nodemon" 
4) create folders files using commands in src folder 
"mkdir controllers, db, middlewares, models, routes, utils"
"New-Item app.js, index.js, constants.js"
create index.js in db
create files in models using this command
""comment.models.js", "like.models.js", "playlist.models.js", "tweet.models.js", "user.models.js", "video.models.js" | ForEach-Object { New-Item -ItemType File -Name $_ }"
5) Install mongoose to communicate with database
"npm i express mongoose" 
6) "start": "node src/index.js","dev":"nodemon src/index.js"
Add these lines in scripts in package.json
To run this files use command
"npm run dev" or "npm run start"
7) To use .env objects in file install
"npm i dotenv"
8) One of the common thing is who should be able to talk to your database.That's known as course or cross origin. To install that use command 
"npm i cors"
9) In atlas add netwrok access as per cross orgin mentioned and even add new database user
10) Will create asyncHandler.js file in utils folder It eliminates the need to write repetitive try/catch blocks in every controller by catching any thrown errors and passing them straight to Express's built-in error-handling middleware
11) Write customizable ApiRespinse in utilities 
Informational responses (100 – 199): The request was received, continuing process.
Successful responses (200 – 299): The action was successfully received, understood, and accepted (e.g., 200 OK, 201 Created).
Redirection messages (300 – 399): Further action needs to be taken in order to complete the request.
Client error responses (400 – 499): The request contains bad syntax or cannot be fulfilled (e.g., 400 Bad Request, 404 Not Found).
Server error responses (500 – 599): The server failed to fulfill an apparently valid request (e.g., 500 Internal Server Error).
12) We will create models now and aso export them.
13) Install aggregate using command
"npm i mongoose-aggregate-paginate-v2"
It will be used to limit hoe much data to load 
14) Install bcrypt to encrypt password 
"npm i bcrypt"
and add method in models
15) Install "npm i jsonwebtoken" to create RefreshTokens and all