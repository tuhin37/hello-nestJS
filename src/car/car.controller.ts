import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CarService } from './car.service';
import { car_dto } from './car.dto';
import { get } from 'http';

@Controller('car')
export class CarController {
    // constructor
    constructor(private carService: CarService) {}
    
    // methonds
    @Get() // no sub route added so the route is /car
    public getCars() {
        return this.carService.getCars()
    }

    @Post()
    public postCar(@Body() car: car_dto) {
        return this.carService.postCar(car);
    }

    @Get(':id')
    public async getCarByID(@Param('id') id: number) {
        const result = await this.carService.getCarByID(id);
        return result;
    }

    @Delete(':id')
    public deleteCarByID(@Param('id') id: number) {
        return this.carService.deleteCarByID(id);
    }

    @Put(':id')
    public putCarByID(@Param('id') id: number, @Query() query) {
        const propertyName = query.property_name;
        const propertyValue = query.property_value;
        return this.carService.putCarByID(id, propertyName, propertyValue);
    }
    
}
