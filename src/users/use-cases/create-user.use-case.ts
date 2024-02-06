import { User } from '../entities/user.entity';
import { IUserRepository } from '../repositories/interfaces/user.repository.interface';
import { hashPassword } from '../services/password.service';

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(
    fullName: string,
    email: string,
    cpfCnpj: string,
    rawPassword: string,
  ): Promise<User> {
    const existingUser = await this.userRepository.findByEmail(email);

    if (existingUser) {
      throw new Error('Usuário já existe com este e-mail.');
    }

    const hashedPassword = await hashPassword(rawPassword);
    const user = new User();
    user.fullName = fullName;
    user.email = email;
    user.cpfCnpj = cpfCnpj;
    user.password = hashedPassword;

    return await this.userRepository.createUser(user);
  }
}
