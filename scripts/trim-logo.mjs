import sharp from 'sharp';
import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');

async function trimImage(filename) {
  const filePath = path.join(publicDir, filename);
  const tmpPath = filePath + '.tmp';
  await sharp(filePath).trim({ threshold: 10 }).toFile(tmpPath);
  await sharp(tmpPath).toFile(filePath);
  fs.unlinkSync(tmpPath);
  console.log(`${filename} trimmed and saved.`);
}

await trimImage('logo.png');
await trimImage('favicon.png');
