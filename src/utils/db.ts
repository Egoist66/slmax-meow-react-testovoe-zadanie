import mysql2 from "mysql2/promise";

const dbConfig = {
    host: "localhost", //127.0.0.1
    user: "root",
    password: "",
    database: "next-products",
}


export class DB {
    constructor() {
    }

    /**
     * Connects to the MySQL database using the provided configuration.
     *
     * @return {Promise<mysql2.Connection>} A promise that resolves to a MySQL connection.
     */
    static async connect(): Promise<mysql2.Connection> {
        const connection = await mysql2.createConnection(dbConfig)

        return connection;

    }
}

export const connect = DB.connect();

