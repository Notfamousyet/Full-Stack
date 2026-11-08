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
6) "start": "node src/index.js"
Add this line in scripts
"npm i express mongoose" 