export class ExamenUsuario {

    constructor(
        public id:number,
        public idEnfermedadUsuario:number,
        public nombre: string,
        public idTipoFrecuencia:number,
        public nombreTipoFrecuencia: string,
        public idTipoMedida:number,
        public nombreTipoMedida: string,
        public medida: string,
        public frecuencia: number,
        public fechaInicio: string, 
        public fechaFin: string, 

    ){}

}