import { Module } from '@nestjs/common';
import { CarModule } from './car/car.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [CarModule, MongooseModule.forRoot('mongodb+srv://mongoroot:xqYKBH1gONWAoAT4@cluster0.hxiaw.mongodb.net/car_manager')],
})
export class AppModule {}
