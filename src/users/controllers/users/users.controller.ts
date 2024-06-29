import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from '../../dtos/CreateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get('')
  getUsers() {
    return this.userService.fetchUser();
  }

  @Get('posts')
  @UsePipes()
  getUserPosts() {
    return {
      name: 'John Doe',
      email: 'john.doe@example.com',
      posts: [
        {
          postId: 1,
          title: 'First Post',
          content: 'This is the content of the first post.',
        },
        {
          postId: 2,
          title: 'Second Post',
          content: 'This is the content of the second post.',
        },
      ],
    };
  }

  @Post('create')
  @UsePipes(new ValidationPipe())
  createUser(@Body() userData: CreateUserDto) {
    return this.userService.createUser(userData);
  }

  @Get(':id/:postId')
  getUserById(
    @Param('id', ParseIntPipe) id: string,
    @Param('postId', ParseIntPipe) postId: string,
  ) {
    console.log(id, postId);
    return { id, postId };
  }
}
