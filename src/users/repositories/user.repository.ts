import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { IUserRepository } from './interfaces/user.repository.interface';

export class UserRepository
  extends Repository<User>
  implements IUserRepository
{
  async createUser(user: User): Promise<User> {
    return await this.save(user);
  }

  async findByEmail(email: string): Promise<User> {
    return await this.findOne({ where: { email } });
  }
}
