import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {

  constructor(private httpClient: HttpClient,public snackBar: MatSnackBar) {

  }
  mySwitch: boolean = false;


  ngOnInit() {
    this.httpClient.get('http://127.0.0.1:5000/state').subscribe(
      (result) => {
        console.log(result["power"]);
        if(result["power"] == 'stopped'){
          this.mySwitch = false;
        }else{
          this.mySwitch = true;
        }
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
  }


  OnButtonClick(event){
    if(this.mySwitch){
      this.httpClient.post('http://127.0.0.1:5000/action',{ power: 'start' }).subscribe(
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
      this.httpClient.post('http://127.0.0.1:5000/action',{ power: 'stop' }).subscribe(
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
