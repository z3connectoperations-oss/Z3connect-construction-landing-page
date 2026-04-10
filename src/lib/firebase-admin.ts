import * as admin from 'firebase-admin';
import * as fs from 'fs';
import * as path from 'path';

let db: admin.firestore.Firestore | null = null;

// Read credentials: project_id and client_email from env, private key from PEM file
const projectId = process.env.FIREBASE_PROJECT_ID;
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;

// Load the private key from the PEM file (most reliable, no escaping issues)
let privateKey: string | null = null;
try {
  const pemPath = path.join(process.cwd(), 'private-key.pem');
  privateKey = fs.readFileSync(pemPath, 'utf8');
} catch {
  // Fallback to env variable if PEM file is not available
  privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n') ?? null;
}

if (!admin.apps.length) {
  if (!projectId || !clientEmail || !privateKey) {
    console.error('Firebase Admin: Missing credentials (projectId, clientEmail, or privateKey).');
  } else {
    try {
      admin.initializeApp({
        credential: admin.credential.cert({
          projectId,
          clientEmail,
          privateKey,
        }),
      });
      db = admin.firestore();
      console.log('Firebase Admin initialized successfully.');
    } catch (error) {
      console.error('Firebase Admin initialization error:', error);
    }
  }
} else {
  db = admin.firestore();
}

export { admin, db };
