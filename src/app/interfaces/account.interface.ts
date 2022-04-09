export interface IRegister
{
    username:string;
    email:string;
    password1:string;
    password2:string;
}

export interface IUser
{
    username:string;
    email:string;
    is_active:string;
    is_superuser:boolean;
    is_staf:boolean
    first_name:string;
    last_name:string
}

export interface ILogin
{
    usernme:string;
    email:string;
}