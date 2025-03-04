import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    const directoryPath = path.join("/", 'images'); 

    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            return res.status(500).json({ error: 'Unable to list directory', details: err.message });
        }
        res.status(200).json({ files });
    });
}
