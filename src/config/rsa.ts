import fs from 'fs';
import path from 'path';

const publicKey = fs.readFileSync(path.join(__dirname, 'keys/public.pem'), 'utf-8');
const privateKey = fs.readFileSync(path.join(__dirname, 'keys/private.pem'), 'utf-8');

export { publicKey, privateKey };