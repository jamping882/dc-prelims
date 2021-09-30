import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'increment-num',
  templateUrl: './increment-num.component.html',
  styleUrls: ['./increment-num.component.css']
})
export class IncrementNumComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  rndNumber = 0;

  increment() {
    this.rndNumber = this.rndNumber + Number(( Math.random()*10).toFixed(0)
    )}

  decrement() {
    this.rndNumber = this.rndNumber - Number(( Math.random()*10).toFixed(0)
    )}

}
