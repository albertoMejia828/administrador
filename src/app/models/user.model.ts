export class User{
    constructor(
        public id?: number,
        public name?: string,
        public surnames?: string,
        public email?: string,
        public password?:string,
        public phone?: string,
        public role?: string,
        public status?:boolean
    ){}
}