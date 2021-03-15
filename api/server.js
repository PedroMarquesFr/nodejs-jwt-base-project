const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const validateJWT = require('./auth/validateJWT');

const port = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    console.log(`- ${req.method} ${req.path}`);
    /* Termina a operação no middleware e chama o próximo middleware ou rota */
    next();
  });

const apiRoutes = express.Router();
apiRoutes.get('/api/posts',validateJWT(false), routes.posts.getPosts);
apiRoutes.post('/api/posts',validateJWT(true), routes.posts.newPost);

apiRoutes.post('/api/users', routes.createUsers);
apiRoutes.post('/api/login', routes.login);

app.use(apiRoutes);

app.listen(port);
console.log('conectado na porta ' + port);
