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
> .env
## create root folder
> src > app.js / index.js / constance.js
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