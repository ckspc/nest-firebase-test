import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class FirebaseService {
  private readonly adminConfig: any; // Adjust the type according to your configuration

  constructor(private readonly configService: ConfigService) {
    this.adminConfig = {
      projectId: this.configService.get<string>('FIREBASE_PROJECT_ID'),
      privateKey: this.configService
        .get<string>('FIREBASE_PRIVATE_KEY')
        .replace(/\\n/g, '\n'),
      clientEmail: this.configService.get<string>('FIREBASE_CLIENT_EMAIL'),
    };

    admin.initializeApp({
      credential: admin.credential.cert(this.adminConfig),
      databaseURL: this.configService.get<string>('FIREBASE_DATABASE_URL'),
    });
  }

  async findAll(): Promise<string> {
    const firestore = admin.firestore();
    const data = await firestore.collection('users').get();
    return JSON.stringify(data.docs.map((doc) => doc.data()));
  }
}
