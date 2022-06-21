import { NgForm, FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { ElementInfo } from '../models/ElementInfo';


export class ElementForm {

  public form: FormGroup;



  constructor(
    private fb?: FormBuilder,
    private data?: ElementInfo
  ) {

    this.form = this.fb.group({
      _method: new FormControl('POST'),
      observaciones: new FormControl(data.observaciones),
      id_luminaria: new FormControl(data.id_luminaria),
      punto_luz: new FormControl(data.punto_luz),
      vial: new FormControl(data.vial),
      numero: new FormControl(data.numero),
      lado_via: new FormControl(data.lado_via),
      distancia_eje: new FormControl(data.distancia_eje),
      s1: new FormControl(data.s1),
      s2: new FormControl(data.s2),
      centro_mando: new FormControl(data.centro_mando),
      circuito: new FormControl(data.circuito),
      operativa: new FormControl(data.operativa),
      altura: new FormControl(data.altura),
      tipo_soporte: new FormControl(data.tipo_soporte),
      marca_soporte: new FormControl(data.marca_soporte),
      modelo_soporte: new FormControl(data.modelo_soporte),
      estado_soporte: new FormControl(data.estado_soporte),
      situacion_soporte: new FormControl(data.situacion_soporte),
      tamano_brazo: new FormControl(data.tamano_brazo),
      longitud_brazo: new FormControl(data.longitud_brazo),
      orientacion_brazo: new FormControl(data.orientacion_brazo),
      tipo_luminaria: new FormControl(data.tipo_luminaria),
      marca_luminaria: new FormControl(data.marca_luminaria),
      modelo_luminaria: new FormControl(data.modelo_luminaria),
      estado_luminaria: new FormControl(data.estado_luminaria),
      tipo_lampara: new FormControl(data.tipo_lampara),
      marca_lampara: new FormControl(data.marca_lampara),
      modelo_lampara: new FormControl(data.modelo_lampara),
      estado_lampara: new FormControl(data.estado_lampara),
      cantidad_lamparas: new FormControl(data.cantidad_lamparas),
      potencia: new FormControl(data.potencia),
      equipo_auxiliar: new FormControl(data.equipo_auxiliar),
      situacion_equipo_auxiliar: new FormControl(data.situacion_equipo_auxiliar),
      orientacion: new FormControl(data.orientacion),
      alta: new FormControl(data.alta),
      usuario_alta: new FormControl(data.usuario_alta),
      fecha_alta: new FormControl(data.fecha_alta),
      modificado: new FormControl(data.modificado),
      usuario_modificado: new FormControl(data.usuario_modificado),
      fecha_modificado: new FormControl(data.fecha_modificado),
      herramienta: new FormControl(data.herramienta),
      numero_registro: new FormControl(data.numero_registro),
      envio: new FormControl(data.envio),
      fecha_envio: new FormControl(data.fecha_envio),
      id_centro_mando: new FormControl(data.id_centro_mando),
      id_circuito: new FormControl(data.id_circuito)

    });

  }



  get model_form_control() {
    return this.form.controls;
  }



  get is_invalid() {
    return this.form.invalid;
  }



}
