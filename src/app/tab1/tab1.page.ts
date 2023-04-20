import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, CommonModule],
})
export class Tab1Page {
  isHard = false;
  questions = [{a:0,sign:"",b:0,result:0}];

  constructor() {
    this.refresh();
  }

  refresh(){
    this.questions = [];
    for(var i=0;i<30;i++){
      var sign = this.getRandomInt(10)%2 == 0;
      var a = this.getRandomInt(100);
      var b = this.getRandomInt(100);
      var result = sign?a+b:a-b;

      if(result<0||result>100)
      {
        i--;
        continue;
      }

      if(this.isHard===true){
        var ga = a%10;
        var gb = b%10;
        var pass = false;
        if(sign){
          if(ga+gb<10)
          {
            pass = true;
          }
        }
        else{ 
          if(ga>=gb)
          {
            pass = true;            
          }
        }
        if(pass===true){
          i--;
          continue;
        }
      }
      
      this.questions.push({a: a, sign: sign?"+":"-", b: b, result:result});
    }
  }

  setHard(){
    this.isHard = !this.isHard;
  }

  getRandomInt(max=0) {
      return Math.floor(Math.random() * Math.floor(max));
  }


  showAnswer = false;
  displayAnswer(){
    this.showAnswer = ! this.showAnswer;
  }

}
