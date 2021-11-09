import { Module, HttpModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CarController } from './car.controller';
import { CarService } from './car.service';
import { CarScheema } from './schemas/car.schema';


@Module({
    imports: 
        [MongooseModule.forFeature([
            {
                name: 'Car',
                schema: CarScheema,
            }
        ]), 
    ],
    controllers: [CarController],
    providers: [CarService]
})
export class CarModule {}
