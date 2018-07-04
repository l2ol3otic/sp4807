import { FormGroup } from "@angular/forms";

export interface InewUserComponent {
    form: FormGroup;
    Url: any;
    onSubmit()
}
export interface InewUser{
    username : string
    password : string
    fullname : string
    gender : string
    condition : string

}