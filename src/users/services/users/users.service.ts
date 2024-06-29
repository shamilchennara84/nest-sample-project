import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UsersService {
  private fakeUsers = [
    { username: 'alice.wonder', email: 'alice.wonder@example.com' },
    { username: 'bob.builder', email: 'bob.builder@example.com' },
    { username: 'charlie.chaplin', email: 'charlie.chaplin@example.com' },
    { username: 'diana.prince', email: 'diana.prince@example.com' },
    {
      username: 'edward.scissorhands',
      email: 'edward.scissorhands@example.com',
    },
    { username: 'frank.castle', email: 'frank.castle@example.com' },
    { username: 'grace.hopper', email: 'grace.hopper@example.com' },
    { username: 'harry.potter', email: 'harry.potter@example.com' },
    { username: 'isabelle.brown', email: 'isabelle.brown@example.com' },
    { username: 'jack.sparrow', email: 'jack.sparrow@example.com' },
  ];
  fetchUser() {
    return this.fakeUsers;
  }

  createUser(userDetail: CreateUserType) {
    this.fakeUsers.push(userDetail);
    return;
  }
}
