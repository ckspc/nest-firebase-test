import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { FirebaseController } from './firebase.controller';
import { FirebaseService } from './firebase.service';

@Module({
  imports: [ConfigModule],
  controllers: [FirebaseController],
  providers: [FirebaseService, ConfigService],
  exports: [FirebaseService],
})
export class FirebaseModule {}
