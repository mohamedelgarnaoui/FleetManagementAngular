import {EventEmitter, Injectable} from '@angular/core';
import {Driver} from '../model/driver';
import {VehicleService} from './vehicle.service';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  driverSelected = new EventEmitter<Driver>();

  drivers = [];

  constructor(private vehicleService: VehicleService) {
    const vehicles = this.vehicleService.getVehicles();

    this.drivers =  [
      new Driver(0, 'Arbi', 'Ahmed', '13456/b1',
        vehicles[0], 'assets/img/driver1.jpg'),
      new Driver(1, 'Charaf', 'Hamid', '176546/b3',
        vehicles[1], 'assets/img/driver2.jpeg'),
      new Driver(2, 'Jilali', 'Jawad', '94821/f6',
        vehicles[2], 'assets/img/driver3.png')
    ];

  }

  getDrivers(): Driver[]{
    return this.drivers;
  }

  getDriver(id: number): Driver {
    return this.drivers[id];
  }

  saveDriver(driver: Driver): void {
    this.drivers.push(driver);
  }
}
