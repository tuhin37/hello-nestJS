import { Injectable, HttpException, } from '@nestjs/common';


import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Icar } from './interfaces/car.interface';
import { car_dto } from './car.dto';
@Injectable()
export class CarService {
    
    constructor(@InjectModel('Car') private readonly carModel: Model<Icar>) {}

    public async getCars(): Promise<car_dto[]> {
        const cars = await this.carModel.find().exec();
        if(!cars || !cars[0]) {
            throw new HttpException('Not Found', 404);
        }
        return cars
    }

    public async postCar(newCar: car_dto) {     // create
        const car = await new this.carModel(newCar);
        return car.save(); 
    }

    public async getCarByID(id: number): Promise<car_dto>{
        const car = await this.carModel.findOne({ id }).exec();
        if(!car) {
            throw new HttpException('Not Found', 404);
        }
        return car;
    }


    public async deleteCarByID(id: number) {
        const car = await this.carModel.deleteOne({ id }).exec();
        if(car.deletedCount === 0) {
            throw new HttpException("Delete Failed", 404);
        }
        return car;
    }


    public async putCarByID(id: number, propertyName: string, propertyValue: string): Promise<car_dto> {   // update
        const car = await this.carModel.findOneAndUpdate({ id }, {[propertyName]: propertyValue}).exec();
        if(!car) {
            throw new HttpException("Update failed", 404);
        }
        return car;
    }
}
