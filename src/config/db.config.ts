import { registerAs } from "@nestjs/config";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions.js";

export default registerAs("dbConfig.dev", (): PostgresConnectionOptions => ({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  synchronize: true,
  // logging: true,
  entities: [__dirname + '/../entities/**/*.entity.{ts,js}'],
  // migrations: ["dist/migration/*{.ts,.js}"],
  // subscribers: ["dist/subscriber/*{.ts,.js}"],
  port: Number(process.env.PORT) || 3000,
}));