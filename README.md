# semana-3
Created!
You have successfully created a new database. The details are below.

Username: HdWRHsIdCQ

Database name: HdWRHsIdCQ

Password: iuClyRgLZh

Server: remotemysql.com

Port: 3306

These are the username and password to log in to your database and phpMyAdmin

Make sure you keep your password secure. Ensure you keep back ups of your database in case it gets deleted.


--configuracion base de datos 

npx sequelize-cli model : generate -- name user -- attributes name : string , password : string , email : string
npx sequelize-cli model:generate --name user --attributes name:string,password:string,email:string

-- migracion de db 

npx sequelize-cli db:migrate

-- contrseña encriptada 
micontraseña
$2y$10$fR0y1XZt8mHnZoNydxN9t.Zj6DqD5EmnP1q1GFvF93t3ampODDTnS 
