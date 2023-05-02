import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Foods } from 'src/app/shared/model/food';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  
  public selectedFoods: Foods[] = [];
  public totalPrice: number = 0;

  constructor(private cartService: CartService){}
  
  ngOnInit(): void {
    this.cartService.getCartFoods().subscribe({
      next: (foods) => {
        this.selectedFoods = foods;
        this.selectedFoods.forEach(f => {
          this.totalPrice += f.price;
        })
      },
      error: (err) => console.log(err)
    })
  }

  handleDeleteFood(f: Foods){
    let conf = confirm("Are you sure to delete this food ?");
    if (conf == false) return;
    this.cartService.deleteFoodById(f.id).subscribe({
      next: (data) => {
        let index = this.selectedFoods.indexOf(f);
        this.selectedFoods.splice(index, 1);
      }
    })
  }

  command(){
    
  }

}
