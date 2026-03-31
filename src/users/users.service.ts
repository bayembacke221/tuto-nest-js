import { Injectable } from '@nestjs/common';
import { User } from '../type/usersType';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'user',
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
      role: 'admin',
    },
    {
      id: 3,
      name: 'Bob Smith',
      email: 'bob.smith@example.com',
      role: 'user',
    },
    {
      id: 4,
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      role: 'user',
    },
    {
      id: 5,
      name: 'Charlie Brown',
      email: 'charlie.brown@example.com',
      role: 'user',
    },
  ];

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User {
    return this.users.find((user) => user.id === id) as User;
  }

  create(user: User): User {
    const newUser = {
      ...user,
      id: this.users.length + 1,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, user: User): User | null {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) {
      return null;
    }
    this.users[index] = {
      ...this.users[index],
      ...user,
    };
    return this.users[index];
  }

  delete(id: number): boolean {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) {
      return false;
    }
    this.users.splice(index, 1);
    return true;
  }
}
