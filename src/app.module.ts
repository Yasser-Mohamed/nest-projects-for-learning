import { Module } from '@nestjs/common';
import { PropertyModule } from './property/property.module';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { pgConfig } from 'src/config/db.config';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import dbConfig from './config/db.config';
import dbConfigProd from './config/db.config.prod';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      load: [dbConfig, dbConfigProd],
    }),
    PropertyModule,
    TypeOrmModule.forRootAsync({
      useFactory: process.env.NODE_ENV === 'production' ? dbConfigProd : dbConfig,
    }),
    UserModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
