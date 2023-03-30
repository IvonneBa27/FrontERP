import { AuthService } from "../services/auth.service"

export class GeneralUtilities{
    static _serviceauth: any;

    constructor (
        private _serviceauth: AuthService,
    ){
       
    }

   public static crearLog(message:string, event:string) {

        this._serviceauth.createLog(message,event).subscribe(()=>{

        });
    }
}