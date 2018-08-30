import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {

  constructor(private httpClient: HttpClient,public snackBar: MatSnackBar) { }


  ngOnInit() {
  }
  mySwitch: boolean = false;


  OnButtonClick(event){
    if(!this.mySwitch){
      this.httpClient.get('http://127.0.0.1:5000/start').subscribe(
        () => {
              this.snackBar.open("LED On", "Ok", {
                duration: 2000,
              });
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
    }else{
      this.httpClient.get('http://127.0.0.1:5000/stop').subscribe(
        () => {
              this.snackBar.open("LED Off", "Ok", {
                duration: 2000,
              });
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
    }

  }

}
