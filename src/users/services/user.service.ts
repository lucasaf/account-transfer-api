import { User } from '../entities/user.entity';
import { CreateUserUseCase } from '../use-cases/create-user.use-case';

export class UserService {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async createUser(
    fullName: string,
    email: string,
    cpfCnpj: string,
    password: string,
  ): Promise<User> {
    return await this.createUserUseCase.execute(
      fullName,
      email,
      cpfCnpj,
      password,
    );
  }
}
