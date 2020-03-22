import 'dotenv/config';
const { PORT } = process.env;
import chalk  from 'chalk';
import express from 'express';
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

try {
    app.listen(PORT, () => console.log(`
    
    I live and breathe on ${chalk.green(PORT)}
    
    `));
} catch (error) {
    logger.error(error, {}, 'Server crashed or failed to start');
    process.exit(1);
}