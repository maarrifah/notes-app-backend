const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 8000,
    // mengubah nilai IP nya karena menggunakan compuete VM
    // host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();


// ubah juga di package.json
// di bagian script
// "start-prod": "NODE_ENV=production node ./src/server.js",
// "start-dev": "nodemon ./src/server.js",