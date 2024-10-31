import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
      MongooseModule.forRoot('mongodb://localhost:27017/auth-workshop'),
      ConfigModule.forRoot({
        isGlobal: true,
        envFilePath: '.env',
      })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
