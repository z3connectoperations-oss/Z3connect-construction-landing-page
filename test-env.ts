import { config } from 'dotenv';
import path from 'path';

config({ path: path.resolve(process.cwd(), '.env.local') });

console.log('FIREBASE_PROJECT_ID:', process.env.FIREBASE_PROJECT_ID ? 'Set' : 'Not set');
console.log('FIREBASE_CLIENT_EMAIL:', process.env.FIREBASE_CLIENT_EMAIL ? 'Set' : 'Not set');
console.log('FIREBASE_PRIVATE_KEY Length:', process.env.FIREBASE_PRIVATE_KEY?.length || 0);

const pk = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');
console.log('Formatted PK Length:', pk?.length || 0);
console.log('PK Start:', pk?.substring(0, 30));
console.log('PK End:', pk?.substring(pk.length - 30));
