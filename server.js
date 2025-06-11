const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const rewriter = jsonServer.rewriter({
  "/profiles/:username": "/profiles?username=:username"
});

server.use(middlewares);
server.use(rewriter);  // Use the custom routes
server.use(router);
server.listen(3001, () => {
  console.log('JSON Server is running on port 3001');
});
