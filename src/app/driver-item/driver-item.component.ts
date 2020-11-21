import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Driver} from '../model/driver';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {DriverService} from '../services/driver.service';

@Component({
  selector: 'app-driver-item',
  templateUrl: './driver-item.component.html',
  styleUrls: ['./driver-item.component.css']
})
export class DriverItemComponent implements OnInit {

  @Input() driver: Driver;

  constructor(private sanitizer: DomSanitizer,
              private driverService: DriverService) { }

  ngOnInit(): void {
  }

  getImgContent(img: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${img})`);
  }

  onClick(): void{
    this.driverService.driverSelected.emit(this.driver);
  }
}
