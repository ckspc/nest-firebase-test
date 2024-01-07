import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FirebaseModule } from './firebase/firebase.module'; // Adjust the path accordingly
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ConfigModule.forRoot(), FirebaseModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
