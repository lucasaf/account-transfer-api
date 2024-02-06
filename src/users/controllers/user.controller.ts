import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { UserService } from '../../users/services/user.service';

export class UserController {
  constructor(
    private server: FastifyInstance,
    private userService: UserService,
  ) {}

  async setupRoutes() {
    this.server.post(
      '/users',
      async (request: FastifyRequest, reply: FastifyReply) => {
        try {
          const { fullName, email, cpfCnpj, password } = request.body as any; // You should validate and cast the body
          const user = await this.userService.createUser(
            fullName,
            email,
            cpfCnpj,
            password,
          );
          reply.code(201).send(user);
        } catch (error) {
          reply.code(400).send({ message: error.message });
        }
      },
    );
  }
}

export async function userController(fastify: FastifyInstance) {
  const createUserUseCase = new CreateUserUseCase(userRepository);

  fastify.post('/users', async (request, reply) => {
    try {
      const { fullName, email, cpfCnpj, password } = request.body as any; // You should validate and cast the body
      const user = await this.userService.createUser(
        fullName,
        email,
        cpfCnpj,
        password,
      );
      reply.code(201).send(user);
    } catch (error) {
      reply.code(400).send({ message: error.message });
    }
  });
}
