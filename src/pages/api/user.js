// src/pages/api/usuarios.js
import path from 'path';
import fs from 'fs/promises';

export default async function handler(req, res) {
  try {
    const filePath = path.join(process.cwd(), 'src', 'data', 'user.json');
    const jsonData = await fs.readFile(filePath, 'utf-8');
    const usuarios = JSON.parse(jsonData);

    res.status(200).json(usuarios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error reading JSON file' });
  }
}

