import Sequelize, { Model } from 'sequelize';
import database from '..';

class User extends Model {
    id!: number;

    name!: string;

    email!: string;

    password!: string;

    readonly createdAt!: Date;

    readonly updatedAt!: Date;
}
User.init(
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING(255),
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING(255),
            allowNull: false,
            unique: true,
        },
        password: {
            type: Sequelize.STRING(255),
            allowNull: false,
        },
        createdAt: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        updatedAt: {
            type: Sequelize.DATE,
            allowNull: false,
        },
    },
    { sequelize: database.connection, tableName: 'user' },
);

export { User };
