import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    const directoryPath = path.resolve('/images'); // Change this if needed
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            return res.status(500).json({ error: 'Unable to list directory' });
        }
        res.status(200).json({ files });
    });
}
