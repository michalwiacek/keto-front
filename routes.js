const routes = (module.exports = require('next-routes')());

routes.add('blog/[id]', '/blog/:id');
routes.add('recipes/[id]', '/recipes/:id');
