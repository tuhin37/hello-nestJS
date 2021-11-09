import { Injectable, HttpException, HttpService } from '@nestjs/common';
import { response } from 'express';
import { resolve } from 'path/posix';
import { CARS } from './cars.mock';
import { map } from 'rxjs';

@Injectable()
export class CarService {
    private cars = CARS;
    public async getCars() {
        return this.cars;
    }


    public getCarByID(id: number): Promise<any>{
        const carID = Number(id)
        return new Promise((resolve) => {
            const car = this.cars.find((item) => item.id === carID);
            if(!car) {
                throw new HttpException('Not found', 404);
            }
            return resolve(car)
        });
    }


    public deleteCarByID(id: number) {
        const index = this.cars.findIndex((item) => item.id === id);
        if(index === -1) {
            throw new HttpException('Not found', 404);
        }
        this.cars.splice(index, 1)
        return this.cars;
    }


    public putCarByID(id: number, propertyName: string, propertyValue: string) {   // update
        const carID = Number(id)
        const index = this.cars.findIndex((car) => car.id === carID);
        if(index === -1) {
            throw new HttpException('Not found', 404);
        }
        this.cars[index][propertyName] = propertyValue;
        return this.cars;
    }


    public postCar(car) {     // create
        this.cars.push(car)
        return this.cars;
    }
}
