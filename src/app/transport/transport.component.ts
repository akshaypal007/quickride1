import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.css']
})
export class TransportComponent implements OnInit {

  constructor(private obj:HttpClient) { }

  ngOnInit() {
    this.getCar();
  }

  mycar:any[] = [];

  getCar(){
    var url = "./assets/quickride.json";
    this.obj.get(url).subscribe(response=>{
      this.mycar = response as string[];
    })
  }

  buy(){
    alert(`Selected Car is available for purchase..\n Please meet the dealer`);
  }


//adding for pagination and searching
p:number=1;
keyword:string;

}
