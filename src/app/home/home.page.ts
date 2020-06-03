import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  text = "Hallo, ich bin ein Text!";
  constructor() {}

  onChangeText(){
    this.text =  Math.floor(Math.random() * Math.floor(10));

  }

}
