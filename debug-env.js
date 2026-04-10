const fs = require('fs');
const path = require('path');

// Read env vars
const envContent = fs.readFileSync('.env.local', 'utf8');
const projectIdMatch = envContent.match(/FIREBASE_PROJECT_ID="?([^"\n]+)"?/);
const clientEmailMatch = envContent.match(/FIREBASE_CLIENT_EMAIL="?([^"\n]+)"?/);
const projectId = projectIdMatch ? projectIdMatch[1] : null;
const clientEmail = clientEmailMatch ? clientEmailMatch[1] : null;

// Read private key from PEM file
const privateKey = fs.readFileSync(path.join(__dirname, 'private-key.pem'), 'utf8');

console.log('projectId:', projectId);
console.log('clientEmail:', clientEmail);
console.log('Private key starts:', privateKey.substring(0, 27));
console.log('Private key length:', privateKey.length);

// Test Firebase Admin init
const admin = require(require.resolve('firebase-admin', { paths: [__dirname] }));

try {
  admin.initializeApp({
    credential: admin.credential.cert({ projectId, clientEmail, privateKey }),
  });
  console.log('\n✅ Firebase Admin INIT SUCCESS!');
} catch (e) {
  console.error('\n❌ Firebase Admin INIT ERROR:', e.message);
}
