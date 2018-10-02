import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tugas3',
  templateUrl: './tugas3.component.html',
  // styleUrls: ['./tugas3.component.css']

  styles:[`
  
    .warnaku{
      color: white;
    }

  `]


})
export class Tugas3Component implements OnInit {
  log = [];
  tampil = "";
  status = false;

  constructor() { }

  ngOnInit() {
  }

  tampilkan (){
    if(this.status==false){
      this.tampil = "Politeknik Negeri Malang";
      this.status=true;
    }else{
      this.tampil = "";
      this.status=false;
    }

    this.log.push(this.log.length+1);

  }
 

}
