import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent {

  buttonText: string = 'Show Marvellous Infosystems';
  displayTextValue: string = '';

  fun(): void {
    if (this.buttonText === 'Show Marvellous Infosystems') {
      this.displayTextValue = 'Education for Better Tomorrow';
      this.buttonText = 'Show Education for Better Tomorrow';
    } else {
      this.displayTextValue = 'Marvellous Infosystems';
      this.buttonText = 'Show Marvellous Infosystems';
    }
  }
}

  



