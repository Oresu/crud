import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  juego = null;
  juegoForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
    const navigation = this.router.getCurrentNavigation();
    this.juego = navigation?.extras?.state?.value;
  }

  ngOnInit(): void {
    this.initForm();

    if(typeof this.juego === 'undefined'){
      //Redireccionar
      this.router.navigate(['nuevo']);
    }else{
      this.juegoForm.patchValue(this.juego);
    }
  }

  onSave(): void {
    console.log('Guardado', this.juegoForm.value);
  }

  private initForm(): void {
    this.juegoForm = this.fb.group({
      titulo: ['', [Validators.required]],
      company: ['', [Validators.required]],
      imagen: ['', [Validators.required]]
    });
  }
}
