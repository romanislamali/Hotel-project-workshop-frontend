import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/service/booking.service';
import { HotelService } from 'src/app/service/hotel.service';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  constructor(private router: Router, private hotelService: HotelService, private bookingService:BookingService) { }

  locationbtntab: boolean = false;
  hotelbtntab: boolean = false;
  roombtntab: boolean = false;
  sidebertab: boolean = true;
  hoteltabletab: boolean = false;
  booklist:boolean=false;
  bookbtntab: boolean = false;

  ngOnInit(): void {
  }

<<<<<<< HEAD
  showHotel() {
    this.hotelbtntab = true;
    this.roombtntab = false;
    this.locationbtntab = false;
    this.booklist = false;
    this.bookbtntab=false;
=======
  showHotel(){
    this.router.navigateByUrl("/allhotel");
    this.hotelbtntab =true;
    this.roombtntab=false;
    this.locationbtntab= false;
>>>>>>> 2a9a4b11c470ea47621f0202f72fc757c8254c11
  }

  hotelList?: any;
  showHotelList() {
    this.hotelList = this.hotelService.getAllHotel();
    this.hotelbtntab = false;
    this.roombtntab = false;
    this.locationbtntab = false;
    this.hoteltabletab = true;
    this.booklist = false;
    
  }

  showRoom() {
    this.roombtntab = true;
    this.hotelbtntab = false;
    this.locationbtntab = false;
    this.bookbtntab=false;
  }

  showLocation() {
    this.locationbtntab = true;
    this.roombtntab = false;
    this.hotelbtntab = false;
    this.booklist = false;
    this.bookbtntab=false;
  }

  showUser() {
    this.router.navigateByUrl("/acourse");

  }


  showBook() {
    this.bookbtntab = true;
    this.hotelbtntab = false;
    this.roombtntab = false;
    this.locationbtntab = false;
    this.hoteltabletab = false;

  }

public userId:number=1;
booklists?: any;

  showBookList() {
    this.booklist = true;
    this.booklists = this.bookingService.getBookDtlByUser(this.userId);
    
  }

}
