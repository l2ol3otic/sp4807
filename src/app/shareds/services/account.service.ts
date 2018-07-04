import {Injectable} from '@angular/core'
import { InewUser } from '../../authentication/components/user-management/new-user/new-user.interface';
@Injectable()
export class newUserService{
    onRegister(model:InewUser){
        return new Promise((resoleve,reject)=>{
            //resoleve(model);
            reject({Message:'Error !!!!!'})
        })
    }

}