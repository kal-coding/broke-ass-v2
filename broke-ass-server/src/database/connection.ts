import 'dotenv/config';
import * as dotenv from 'dotenv';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
dotenv.config();

const environments = {
    development: `${__dirname}/../../.env.development`,
    integration: `${__dirname}/../../.env.integration`,
    production: `${__dirname}/../../.env.production`
};

dotenv.config({ path: environments[ process.env.NODE_ENV ] });

export const connectionConfig : PostgresConnectionOptions = {
    type: 'postgres',
    host: process.env.PGHOST || 'localhost',
    port: Number(process.env.PGPORT) || 5432,
    username: process.env.PGUSERNAME || 'postgres',
    password: process.env.PGPASSWORD || '',
    database: process.env.PGDATABASE || `${process.env.USER}_test`,
    entities: [__dirname + '/entities/*.ts'],
    synchronize: true,
    logging: false
}
