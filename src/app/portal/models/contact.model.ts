export class Contact {
    constructor(
        //obligatorio
        public name: string,
        public email: string,
        public age: number,
        //opcional
        public sex?: string,
    ){}
}