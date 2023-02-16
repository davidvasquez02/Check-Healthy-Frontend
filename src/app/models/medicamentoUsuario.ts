export class MedicamentoUsuario {

    constructor(
        
        public id:number,
        public idEnfermedadUsuario:number,
        public nombre: string,
        public idTipoFrecuencia:number,
        public nombreTipoFrecuencia: string,
        public idTipoDosis:number,
        public nombreTipoDosis: string,
        public dosis: string,
        public frecuencia: number,
        public fechaInicio: string, 
        public fechaFin: string, 

    ){}

}