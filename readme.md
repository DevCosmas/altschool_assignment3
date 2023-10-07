# AltSchoolNodeJS Assignment Migrations, Seeders and Authentication



# API DOCUMENTATION AND TESTING
Click on the link below to read full documentation. And automatically test api with Postman client.

Docs link :https://documenter.getpostman.com/view/28599121/2s9YJgTfTR
# TECH STACK
Nodejs
# DATABASES
mongodb
mysql

**Context**
 Using the context from the previous assignment, Company X wants us to start creating our codebase using our ERD design to setup migrations, seeders and authentication with JWT.

## What you need to do:
  <ol> 
<li>Using a clean repo, have two branches, one for SQL implementation and another for NOSQL implementation
<li/>
<li>Using Sequelize, <li/>
    a.create the necessary migrations
    b.seed a user for the admin role and 10 or more items into your database
    c.create a route for a user to signup, login and view the list of items

<li>Using Mongoose<li/>
     a.create the necessary schemas and models. 
     b.Seed an admin user and 10 or more items into your database
     c.Create a route for a user to signup, login and view the list of items

<li>Admin users should be able to create, update and delete items<li/>
<ol/>

**Things to note**:
<li>In both implementations, the route to get the list of items must be authenticated<li/>
<li>Use JWT for authentication<li/>
<li>Ensure your JWT expires after 1 hour<li/>
<li>Add a .env.example file<li/>
<li>Ensure password is encrypted<li/>

# HOW TO RUN PROJECT 
* Clone The repo and cd into your base folder

   ```git clone https://github.com/DevCosmas/altschool_assignment3.git``` 

   
   ```cd <base folder>```
  
* Run "npm install" to install all the dependencies

   ```npm install```
  
* npm run start  on the terminal to start the application

   ```npm run start```
  

