import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-findbirth',
  templateUrl: './findbirth.component.html',
  styleUrls: ['./findbirth.component.scss']
})
export class FindbirthComponent {
name!:string;
num1!:number;
num2!:number;
result:number=0;
n1:string='';
month!:number;
days!:number;

Total()
{
  this.result = this.num2 - this.num1;
  this.n1=this.name;
  this.month=this.result * 12;
  this.days=this.result * 365;
}

//  simplealert1()
//  {
//   Swal.fire({
//      title: 'Sweet!',
//      text: 'text',
//      input: 'text',
//      imageUrl: 'https://unsplash.it/400/200',
//      imageWidth: 400,
//      imageHeight: 200,
//      imageAlt: 'Custom image',
    
//    })
//  }

}

