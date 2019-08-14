import express from 'express';
import path from 'path';
import fs from 'fs';

const app = express();
const directoryPath = path.join(__dirname, '../app/routes/');

fs.readdir(directoryPath, (err, files) => {
    if (files && files.length > 0) {
        files.forEach(file => {
            let [routeName] = file.split('.');
            if (routeName === 'index') {
                routeName = '';
            }
            app.use(`/${routeName}`, require(`${directoryPath}${file}`));
        });
    }
});

module.exports = app;