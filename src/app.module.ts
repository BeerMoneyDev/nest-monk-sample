import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MonkModule } from 'nest-monk';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { TodoModule } from './todo/todo.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MonkModule.forRootAsync({
      database: {
        useFactory: async () => {
          const inMemoryMongo = new MongoMemoryServer();
          await inMemoryMongo.start();
          return await inMemoryMongo.getConnectionString();
        },
      },
    }),
    TodoModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
