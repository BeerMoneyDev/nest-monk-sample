import { Model } from 'nest-monk';

@Model({
  collectionOptions: o => o.createIndex('email', { unique: true }),
})
export class User {
  _id?: string;
  email: string;
  name: string;

  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
}