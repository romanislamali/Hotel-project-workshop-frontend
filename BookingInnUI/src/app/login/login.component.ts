import { Component } from '@angular/core';
import { User } from '../model/user.model';
import { BookingService } from '../service/booking.service';
import { UserService } from '../service/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(private userservice : UserService,
              private bookingService : BookingService
              ){

  }

  

  registerCard: boolean = false;
  loginCard: boolean = true;

  showRegister() {
    this.loginCard = false;
    this.registerCard = true;
    
  }

  showLogin() {
    this.loginCard = true;
    this.registerCard = false;
  }


  public user : User = new User();

  public alluser!:any;
  getAllUser(){
    this.alluser = this.userservice.getAllUser();
    
  }
  ngOnInit(){
  }


  login(){
    
    
    console.log(this.bookingService.getMaxBookingId());
        // this.bookingService.updateBooking();
    // if(this.user.email==this.alluser.email){
    //   console.log("******************");
    //   alert('Login Successfull');
    // }
    // else{
    //   alert('Email or Password invaid!!');
    // }

  }

  

  formSubmit(){
  
    console.log(this.user);
    
    if(this.user.firstname == '' || this.user.email == null){
      alert('user name is required');
      return;
    } else{
     
      this.userservice.createuser(this.user).subscribe(
        (data)=>{
          console.log(data);
          alert('data submitted successfully');
          this.clear();
        }, (error)=>{
          console.log(error);
          alert('not submitted');
          
        } 

      )
    }

  }

  clear(){
    this.user.firstname='';
    this.user.lastname='';
    this.user.cell='';
    this.user.email='';
    this.user.password='';

  }





}
