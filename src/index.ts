// ESM
import Fastify from 'fastify';
import { databaseInitializer } from './infrastructure/database/database-initializer';

const fastify = Fastify({
  logger: true,
});

fastify.get('/', async (request, reply) => {
  return { hello: 'world' };
});

/**
 * Run the server!
 */
const start = async () => {
  try {
    console.log('Starting server...');

    await databaseInitializer();

    await fastify.listen({ port: 3000, host: '0.0.0.0' });

    console.log(`Server is listening on port 3000`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
