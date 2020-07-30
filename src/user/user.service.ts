import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectCollection } from 'nest-monk';
import { User } from './user.model';
import { ICollection } from 'monk';

@Injectable()
export class UserService implements OnModuleInit {
  constructor(
    @InjectCollection(User) private readonly userCollection: ICollection<User>,
  ) {
  }

  async list() {
    return await this.userCollection.find();
  }

  async getByEmail(email: string) {
    return await this.userCollection.findOne({ email });
  }

  async onModuleInit() {
    const users = [
      new User({ email: 'ritter@kerryritter.com', name: 'Kerry Ritter' }),
      new User({ email: 'jcena@wwe.com', name: 'John Cena' }),
    ];

    await Promise.all(users.map(user => {
      return this.userCollection.findOneAndUpdate(
        {
          email: user.email,
        },
        {
          $set: {
            name: user.name,
          },
          $setOnInsert: {
            email: user.email,
          },
        },
        {
          upsert: true,
        });
    }));
  }
}
