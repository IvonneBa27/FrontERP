import { AuthService } from "../services/auth.service"

export class GeneralUtilities{

    constructor (
        private _serviceauth: AuthService,
    ){
       
    }

    public  crearLog(message:string, event:string) {

        this._serviceauth.createLog(message,event).subscribe(()=>{

        });
    }
}