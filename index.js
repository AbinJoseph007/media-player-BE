//import json server library in index.js key word is Require insted of import it must be in string

const jsonserver = require('json-server')

//second step is create server,  using json library

const mediaplayer = jsonserver.create() 

// create a path to db.json file 

const router = jsonserver.router('db.json')

// create middlewares to convert js to json 

const middlewares = jsonserver.defaults()

// connect/use middleware and router in server

mediaplayer.use(middlewares)
mediaplayer.use(router)

// setup port for the server (front end and backend both runs in 3000 port so the sollutionnthat to set backend to another port )

const port = 5000 || process.env.PORT //automaticaly select port      

mediaplayer.listen(port,()=>{
    console.log(`mediapalyer started at port ${port} and ready to fetch request`);
})

 

