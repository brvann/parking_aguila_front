import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Estancia } from './models/estancia';
import { EstanciasService } from './services/estancias.service';

@Component({
  selector: 'app-estancias',
  templateUrl: './estancias.component.html',
  styleUrls: ['./estancias.component.scss']
})
export class EstanciasComponent implements OnInit {

  public contentHeader: any = null;
  public form: FormGroup = new FormGroup({});
  public submitted:boolean = false;
  public selectTiposLoading:boolean = false;

  public estancias:Array<Estancia> = [];
  public loading:boolean = false;
  public data:Array<any> = [];

  constructor(
    private _homeService:EstanciasService,
    private _formBuilder:FormBuilder) {

      

     }

  ngOnInit(): void {

    this.loadEstancias();

    this.form = this._formBuilder.group({
      placa:["",Validators.required]
    });

  }

  private loadEstancias(): void {
    this._homeService.getEstancias().subscribe({
      next:(result: Array<Estancia>)=>{
        this.estancias = result;
        console.log(result);
      },
      error:(err:any)=>{
        console.log(err);
      }
    })
  }

  public onSubmit():void {
    this.submitted = true;
    console.log(this.form.controls);
    if(this.form.invalid) return;

    this.loading = true;

    this._homeService.postEstancia({
      placa: this.form.controls['placa'].value,
      hora_entrada: '',
      hora_salida: '',
      eliminado: false
    }).subscribe({
      next: (result:Estancia) => {
        console.log(result);
        this.loadEstancias();
        this.loading = false;
      },
      error: err => {
        console.log(err);
        this.loading = false;
      }
    })
  }

  get f():any{
    return this.form.controls;
  }

}
