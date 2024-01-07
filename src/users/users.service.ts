import { Injectable } from '@nestjs/common';
import { FirebaseService } from '../firebase/firebase.service'; // Adjust the path accordingly

import * as admin from 'firebase-admin';
@Injectable()
export class UsersService {
  private readonly firestore: FirebaseFirestore.Firestore;

  constructor(private readonly firebaseService: FirebaseService) {
    this.firestore = admin.firestore();
  }

  async getAllUsers(): Promise<any[]> {
    const snapshot = await this.firestore.collection('users').get();

    const data: any[] = [];
    snapshot.forEach((doc) => {
      data.push(doc.data());
    });

    return data;
  }
}
