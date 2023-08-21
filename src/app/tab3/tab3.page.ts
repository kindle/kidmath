import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, CommonModule]
})
export class Tab3Page {
  isHard = false;
  questions = [{a:0,sign:"",b:0,result:0}];

  constructor() {
    this.refresh();
  }

  refresh(){
    this.questions = [];
    for(var i=0;i<30;i++){
      
      var a = this.getRandomIntInclusive(100,1000);
      var b = this.getRandomIntInclusive(10,99);
      var result = a*b;

      if(this.isHard==false){
        if(result>2000)
        {
          i--;
          continue;
        }
      }

      if(this.isHard===true){
        var ga = a%10;
        var gb = b%10;
        var pass = false;

        if(a<10||b<10)
        {
          pass = true;
        }
        
        if(pass===true){
          i--;
          continue;
        }
      }
      
      this.questions.push({a: a, sign: "×", b: b, result:result});
    }
  }

  setHard(){
    this.isHard = !this.isHard;
  }

  getRandomInt(max=0) {
      return Math.floor(Math.random() * Math.floor(max));
  }

  getRandomIntInclusive(min:number, max:number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
    // The maximum is inclusive and the minimum is inclusive
  }


  showAnswer = false;
  displayAnswer(){
    this.showAnswer = ! this.showAnswer;
  }

  print(){
    window.print();
  }
}
