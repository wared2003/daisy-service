import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from "@nestjs/mongoose";
import { ItemsModule } from './modules/items/items.module';
import { ConfigModule } from "@nestjs/config";
import { InventoriesModule } from './modules/inventories/inventories.module';

@Module({
  imports: [
    ConfigModule.forRoot({envFilePath: '.env'}),
    MongooseModule.forRoot(process.env.MONGO_CONNNECTION_STRING),
    ItemsModule,
    InventoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
