import 'dotenv/config';
import chalk  from 'chalk';
import express from 'express';
import 'reflect-metadata';

const app = express();

const { PORT } = process.env;

app.get('/', (req, res) => res.send('Hello World!'));

// Set up routes

// App Start
try {
    app.listen(PORT, () => console.log(`
    
    I live and breathe on ${chalk.green(PORT)}
    
    `));
} catch (error) {
    console.error(error, {}, 'Server crashed or failed to start');
    process.exit(1);
}