import { Module, HttpModule } from '@nestjs/common';
import { CarController } from './car.controller';
import { CarService } from './car.service';

@Module({
    imports: [HttpModule],
    controllers: [CarController],
    providers: [CarService]
})
export class CarModule {}
