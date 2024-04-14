import { Component } from "@angular/core";
import { TextField } from '../../components/TextField/text-field.component'

@Component({
  selector: 'register',
  standalone: true,
  imports: [TextField],
  templateUrl: './register.component.html'
})

export class Register {
  placeholder: string = "bora"
}