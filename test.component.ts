import { Component } from '@angular/core';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  test:any[]=[];
  currentIndex:any;
  nfselect:any;
  nfanswer:number=0;
  temp:any=null;
  userName: string | null = '';

  ngOnInit() {
    
    this.userName = localStorage.getItem('userName');
  }
  constructor(){
    this.test=[
      {
        question: 'What is the capital city of India?',
        options:['New Delhi','Kolkata','Chennai'],
        answer:'New Delhi'
      }  ,
      {
        question:'Which river is considered the holiest in Hinduism?',
        options:['Godavari','Brahmaputra','Ganges'],
        answer:'Godavari'
      }  ,
      {
        question:'What is the official language of India at the national level?',
        options:['tamil','english','hindi'],
        answer:'hindi'
      } ,
      {
        question:'Who is known as the "Father of the Nation" in India?',
        options:['Mahatma Gandhi','Bhagat Singh','Subhas Chandra Bose'],
        answer:'Mahatma Gandhi'
      } ,{
        question:'Which Indian festival is known as the Festival of Lights?',
        options:['diwali','pongal','holi'],
        answer:'diwali'
      }
    ];

    this.currentIndex = 0;

}

   get currentQuestion() {
    return this.test[this.currentIndex];
  }

  nextQuestion() {
    if(this.nfselect==this.currentQuestion.answer){
      this.nfanswer++;
    }

  if (this.currentIndex < this.test.length - 1) {
    this.currentIndex++;
  }
    
  }

  prevQuestion() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
  onSubmit(){
    if(this.nfselect==this.currentQuestion.answer){
      this.nfanswer++;
    }
    this.temp='full';
}
}

