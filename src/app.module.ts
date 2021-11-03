import { CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';


@Module({
  imports: [
    UsersModule,
    ProductsModule,
    MongooseModule.forRoot('mongodb://admin:Template4321!@3.23.19.131:27017', { dbName: "etsy"}),
    ConfigModule.forRoot(),
    CacheModule.register({isGlobal: true, ttl: 5}),
    ThrottlerModule.forRoot({
      ttl: 1,
      limit: 20,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
