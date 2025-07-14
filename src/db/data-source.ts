import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import dotenv from "dotenv";

dotenv.config();

// Flag para saber se estamos em produção
const isProduction = process.env.NODE_ENV === "production";

// Variáveis para configuração da conexão
let dataSourceOptions: DataSourceOptions;

if (isProduction) {
    dataSourceOptions = {
      type: "sqlite",
      database: "database.sqlite",
      synchronize: false,
      logging: false,
      entities: ["dist/models/**/*.ts"],
      migrations: ["dist/migrations/**/*.ts"],
      subscribers: [],
    };
} else {
    dataSourceOptions = {
        type: "sqlite",
        database: "database.sqlite",
        entities: ["./src/models/*.ts"],
        migrations: ["./src/migrations/*.ts"],
        synchronize: true,
        logging: true,
    };
}

const AppDataSource = new DataSource(dataSourceOptions);
export default AppDataSource;