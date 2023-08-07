import { Component } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {
  onSubmit(form: any) {
    if (form.valid) {
      console.log('Formulario válido', form.value);
      // Aquí puedes agregar la lógica para enviar los datos a un servicio, base de datos, etc.
    } else {
      console.log('Formulario inválido');
    }
}

  onCancel() {
  console.log('Formulario cancelado');
  // Aquí puedes agregar la lógica para realizar acciones al cancelar el formulario
}
}
