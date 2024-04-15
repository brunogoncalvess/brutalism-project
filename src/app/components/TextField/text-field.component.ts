import { Component } from "@angular/core";

@Component({
  selector: 'text-field',
  standalone: true,
  templateUrl: './text-field.component.html',
  styleUrl: './text-field.component.scss'
})

export class TextField {
  

  logField(input: any): void {
    console.log("validity:: ", input.target.validity)
    console.log("value:: ", input.target.value)
  }
}