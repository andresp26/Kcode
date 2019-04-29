import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGitService } from '../../service/auth-git.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { GrupoService } from '../../service/grupo.service';
import { Grupo } from 'src/app/Models/Grupo.class';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-crear-grupo',
  templateUrl: './crear-grupo.component.html',
  styleUrls: ['./crear-grupo.component.css']
})
export class CrearGrupoComponent implements OnInit {

  @ViewChild('labelImport')
  labelImport: ElementRef;
  form: FormGroup;
  Grupo: Grupo;
  fileToUpload: File = null;
  constructor(public _serviceGrupo: GrupoService, private alertas: AlertService,
    private router: Router) { }

  ngOnInit() {
    this.Grupo = new Grupo();
    this.form = new FormGroup({
        'NombreGrupo': new FormControl('', [Validators.required]),
        'DescripcionGrupo': new FormControl('', [Validators.required])
    });
  }

  onFileChange(files: FileList) {
    // this.labelImport.nativeElement.innerText = Array.from(files)
    //   .map(f => f.name)
    //   .join(', ');
    // this.fileToUpload = files.item(0);
  }


  GuardarGrupo() {
    if (this.form.valid) {
      this.Grupo.Nombre = this.form.controls.NombreGrupo.value;
      this.Grupo.Descripcion = this.form.controls.DescripcionGrupo.value;
      // Verificar subida de imagen
      // this.Grupo.Imagen = this.fileToUpload.name;
      let a  = this._serviceGrupo.add(this.Grupo);
      console.log(a);
      this.alertas.success('Se creo el Grupo');
      this.form.reset();
    } else { this.alertas.danger('Formulario invalido, porfavor reviselo'); }
  }
}
