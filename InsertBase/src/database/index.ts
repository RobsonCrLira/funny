import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

export const sequelize = new Sequelize.Sequelize({
    database: databaseConfig.database,
    username: databaseConfig.username,
    password: databaseConfig.password,
    dialect: 'mysql',
    host: databaseConfig.host,
    logging: false,
});

class Database {
    public connection!: Sequelize.Sequelize;

    constructor() {
        this.init();
    }

    init(): void {
        this.connection = new Sequelize.Sequelize({
            database: databaseConfig.database,
            username: databaseConfig.username,
            password: databaseConfig.password,
            dialect: 'postgres',
            host: databaseConfig.host,
            logging: false,
        });
    }
}

const database: Database = new Database();

export default database;
