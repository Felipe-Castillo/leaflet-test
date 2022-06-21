export class ElementInfo {

    constructor(
        public observaciones: string,
        public id_luminaria: string,
        public punto_luz: string,
        public vial: string,
        public numero: string,
        public lado_via: string,
        public distancia_eje: string,
        public s1: string,
        public s2: string,
        public centro_mando: string,
        public circuito: string,
        public operativa: string,
        public altura: string,
        public tipo_soporte: string,
        public marca_soporte: string,
        public modelo_soporte: string,
        public estado_soporte: string,
        public situacion_soporte: string,
        public tamano_brazo: string,
        public longitud_brazo: string,
        public orientacion_brazo: string,
        public tipo_luminaria: string,
        public marca_luminaria: string,
        public modelo_luminaria: string,
        public estado_luminaria: string,
        public tipo_lampara: string,
        public marca_lampara: string,
        public modelo_lampara: string,
        public estado_lampara: string,
        public cantidad_lamparas: string,
        public potencia: string,
        public equipo_auxiliar: string,
        public situacion_equipo_auxiliar: string,
        public orientacion: string,
        public alta: boolean,
        public usuario_alta: string,
        public fecha_alta: string,
        public modificado: boolean,
        public usuario_modificado: string,
        public fecha_modificado: string,
        public herramienta: string,
        public numero_registro: number,
        public envio: string,
        public fecha_envio: string,
        public id_centro_mando: string,
        public id_circuito: string
    ) {

    }


    /* Methods */

    static createInstance(data: any) {
        const { observaciones, id_luminaria, punto_luz, vial, numero, lado_via, distancia_eje, s1, s2, centro_mando, circuito, operativa, altura, tipo_soporte, marca_soporte, modelo_soporte, estado_soporte, situacion_soporte,
            tamano_brazo, longitud_brazo, orientacion_brazo, tipo_luminaria, marca_luminaria, modelo_luminaria, estado_luminaria, tipo_lampara, marca_lampara, modelo_lampara, estado_lampara, cantidad_lamparas,
            potencia, equipo_auxiliar, situacion_equipo_auxiliar, orientacion, alta, usuario_alta, fecha_alta, modificado, usuario_modificado, fecha_modificado, herramienta,
            numero_registro, envio, fecha_envio, id_centro_mando, id_circuito } = data;

        return new ElementInfo(observaciones, id_luminaria, punto_luz, vial, numero, lado_via, distancia_eje, s1, s2, centro_mando, circuito, operativa, altura, tipo_soporte, marca_soporte, modelo_soporte, estado_soporte, situacion_soporte,
            tamano_brazo, longitud_brazo, orientacion_brazo, tipo_luminaria, marca_luminaria, modelo_luminaria, estado_luminaria, tipo_lampara, marca_lampara, modelo_lampara, estado_lampara, cantidad_lamparas,
            potencia, equipo_auxiliar, situacion_equipo_auxiliar, orientacion, alta, usuario_alta, fecha_alta, modificado, usuario_modificado, fecha_modificado, herramienta,
            numero_registro, envio, fecha_envio, id_centro_mando, id_circuito);
    }


}
