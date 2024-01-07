import { Controller, Get } from '@nestjs/common';
import { FirebaseService } from './firebase.service';

@Controller('firebase')
export class FirebaseController {
  constructor(private readonly firebaseService: FirebaseService) {}

  @Get('example')
  async getExample(): Promise<string> {
    const result = await this.firebaseService.findAll();
    return result;
  }
}
