
export interface ICategoryProducts
{
    id:string;
    title:string
    price:number;
    image:string;
}

export interface ICategory
{
    id:number;
    name:string;
    slug:string
    image?:string;
    active:boolean
    is_exit : boolean
    products:ICategoryProducts[];
}

