import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {
  userForm: FormGroup;
  message: string = '';

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      cedula: ['', Validators.required],
      nombre: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      ciudad: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      // Aquí puedes manejar el envío del formulario
      console.log(this.userForm.value);
    }
  }

  onCancel() {
    // Lógica para cancelar el formulario
  }

  showMessage(msg: string) {
    this.message = msg;
    setTimeout(() => {
      this.message = '';
    }, 3000); // Mostrar el mensaje durante 3 segundos
  }
}
