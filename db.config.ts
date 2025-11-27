import { Property } from "src/entities/property/property.entity";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions.js";


export const pgConfig: PostgresConnectionOptions = {
    type: "postgres",
    url: 'postgresql://neondb_owner:npg_UxJB7mfodl0O@ep-holy-unit-ae48m3cr-pooler.c-2.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
    // entities: [Property],
    synchronize: true,
    // logging: true,
    entities: ["dist/**/*.entity{.ts,.js}"],
    // migrations: ["dist/migration/*{.ts,.js}"],
    // subscribers: ["dist/subscriber/*{.ts,.js}"],
    port:  Number(process.env.PORT) || 3000,
};