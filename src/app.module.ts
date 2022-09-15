import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from "@nestjs/mongoose";
import { ItemsModule } from './modules/items/items.module';
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({envFilePath: '.env'}),
    MongooseModule.forRoot(process.env.MONGO_CONNNECTION_STRING),
    ItemsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
