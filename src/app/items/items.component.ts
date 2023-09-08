import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent  {

  title = 'Angular-apis';

  
  shrey :any;
  values:any;
  data:any;
  Brandname:any;
  discountpercentage:any;
  price:any;
  rating:any;
   pro:any={

  };

  constructor(private http:HttpClient){
    // this.http.get('https://randomuser.me/api').subscribe((res: any) => {
    //   this.shrey = res.results[0];
    //   // here results is a arrray in the object
    //   console.log(this.shrey);
    // })
    this.callingapi();
    this.fetchingapi();
  }

  callingapi(){
    this.http.get('https://randomuser.me/api').subscribe((res: any) => {
      this.shrey = res.results[0];
      // here results is a arrray in the object
      console.log(this.shrey);
    })
  }


// fetchingapi(){
//   this.httpservice.getData().subscribe((data) => {  

//     // do something with the data here
//     console.log(this.data);
//   });

fetchingapi(){
  this.http.get('https://dummyjson.com/products').subscribe((data:any)=>{
    this.values=data['products'];
         console.log(this.values);
        //  console.log(this.values.title);
        //  this.Brandname=this.values.title;
        //  this.discountpercentage=this.values.discountPercentage;
        //  this.price=this.values.price;
        //  this.rating=this.values.rating;
        //  this.pro=this.values.products;
         
  }) 
}

// testing for stars
// Vue.component('star-rating', {
//   template: '#star-rating',
//   props: ['max', 'current'] as Array<keyof StarRatingProps>,
//   computed: {
//     getRating(this: Vue & { max: number; current: number }) {
//       return (this.current / this.max) * 100;
//     },
//   },
// });


// new Vue({
//   el: '#app',
//   data: {
//     value: 3,
//   },
//   methods: {
//     randomValue(this: Vue & { value: number }) {
//       this.value = Number((Math.random() * 4 + 1).toFixed(2));
//     },
//   },
// });


}
