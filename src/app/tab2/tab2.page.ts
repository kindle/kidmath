import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, CommonModule]
})
export class Tab2Page {
  isHard = false;
  questions = [{a:0,sign:"",b:0,result:0}];

  constructor() {
    this.refresh();
  }

  refresh(){
    this.questions = [];
    for(var i=0;i<30;i++){
      
      var a = this.getRandomInt(100);
      var b = this.getRandomInt(100);
      var result = a*b;

      if(result<50||result>2000)
      {
        i--;
        continue;
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


  showAnswer = false;
  displayAnswer(){
    this.showAnswer = ! this.showAnswer;
  }


  print(){
    window.print();
  }
}