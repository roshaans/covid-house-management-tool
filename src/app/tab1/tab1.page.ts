import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  maxNum = 13
  currNum = 4
  minOccupancy = 4
  selectedColor = "#abfb8e"
  trackerColors = ["#abfb8e", "#dbfb8e", "#f9fb8e", "#fbde8e", "#fba78e", "#f96e6e", "#ff0202"] 
  constructor() {}

  doRefresh(event){
    this.loadVal()
  }
  ngOnInit() {
    this.loadVal()
  }
  loadVal() {
    this.currNum = 4
    this.maxNum = 13
    this.minOccupancy = 4
  }

  setColor() {
    var percentage = Math.round((this.currNum/this.maxNum) * 10) - this.minOccupancy;
    if(this.currNum == this.minOccupancy) {
      this.selectedColor = this.trackerColors[0]
    } else if (this.currNum >= this.maxNum){ 
      this.selectedColor = this.trackerColors[this.trackerColors.length-1]

    }
    else { 
      this.selectedColor = this.trackerColors[percentage]

    }
   
  }

  addPerson() {
    this.currNum += 1
    this.setColor()

  }

  subtractPerson() {
    if(this.currNum <= this.minOccupancy) {

    } else {
      this.currNum -= 1

    }
    this.setColor()


  }
}
