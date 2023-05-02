import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FoodService } from 'src/app/services/food.service';
import { Foods } from 'src/app/shared/model/food';

@Component({
  selector: 'app-edit-food',
  templateUrl: './edit-food.component.html',
  styleUrls: ['./edit-food.component.scss']
})
export class EditFoodComponent implements OnInit{

  public foodFormGroup!: FormGroup;
  private id!: number;
  private food!: Foods;
  
  constructor(private fb: FormBuilder,
    private foodService: FoodService){}

  ngOnInit(): void {
    this.foodService.getFoodById(this.id).subscribe({
      next: f => {
        this.food = f;
        this.fb.group({
          id: [f.id],
          name: [f.name, Validators.required],
          price: [f.price, Validators.required],
          favorite: [f.favorite],
          star: [f.star, Validators.required],
          tags: [f.tags, Validators.required],
          imageUrl: [f.imageUrl, Validators.required],
          cookTime: [f.cookTime, Validators.required],
          origins: [f.origins, Validators.required]
        })
      }
    })
  }

}
