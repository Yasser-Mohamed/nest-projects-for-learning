import { Module } from '@nestjs/common';
import { PropertyModule } from './property/property.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { pgConfig } from 'db.config';

@Module({
  imports: [PropertyModule, TypeOrmModule.forRoot(pgConfig)],
  controllers: [],
  providers: [],
})
export class AppModule {}
