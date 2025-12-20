import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions.js";

export default (): PostgresConnectionOptions => ({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  synchronize: false,
  // logging: true,
  entities: [__dirname + '/../entities/**/*.entity.{ts,js}'],
  // migrations: ["dist/migration/*{.ts,.js}"],
  // subscribers: ["dist/subscriber/*{.ts,.js}"],
  port: Number(process.env.PORT) || 3000,
});