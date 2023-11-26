# Js backend development
## create empty node package application
```
npm init
```
then create a README.md file
## …or create a new repository on the command line
```
echo "# js_backend" >> README.md
  git init
  git add README.md
  git commit -m "first commit"
  git branch -M main
  git remote add origin https://github.com/samimbuian/js_backend.git
  git push -u origin main
```
## …or push an existing repository from the command line
```
git remote add origin https://github.com/samimbuian/js_backend.git
  git branch -M main
  git push -u origin main
```
## track empty folder on github
> public > temp > .gitkeeep
## Push all code on github with empty folder for testing
## create a .gitignore file
[Generate gitignore file](https://mrkandreev.name/snippets/gitignore-generator/)

paste all code .gitignore file
## create environment variables file
install dotenv
```
npm install dotenv
```
> .env
## create root folder
> src > app.js / index.js / constants.js
## modify package.json
for import syntax
>package.json
```
"type": "module"
```
## install nodemon for restart app in changes
```
npm i -D nodemon
```
## then add script
```
"scripts": {
    "dev": "nodemon src/index.js"
  },
```
## create folders
> src > controllers / db / middlewares / models / routes / utils
## install prettier
```
npm i -D prettier
```
> .prettierrc
```
{
    "singleQuote": false,
    "bracketSpacing": true,
    "tabWidth": 2,
    "trailingComma": "es5",
    "semi": true
}
```
> .prettierignore
```
./vscode
/node_modules
.dist
*.env
.env
.env*
```
## database connection
### first setup mongodb atlas
> .env
```
PORT = 4000
MONGODB_URI = mongodb+srv://samim:<password>@cluster0.zs6xuyn.mongodb.net
```
### database connection in 2 ways
1. all code are index.js file
  ```js
  import mongoose form "mongoose"

  function connectDB(){}

  connectDB()
  ```
  Best Way
  ```js
  import mongoose form "mongoose"
  //ife(imediently function excute)
  //make sure ;()()
  ( async ()=> {})()
  ```
2. separate all code in other files