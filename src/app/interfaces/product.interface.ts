
export interface IProperty
{
    id:number;
    title:string;
    descriptions:string;
    slug:string;
    created_at:string;
    updated_at:string;
    image:string;
    price:number;
    brand:number;
    category:number;
    discount:number;
    total_price:number;
    color:number[];
    size:number[];
    favorite:number[];
    product_related:string[];
    is_sale_product:boolean;
    is_whole_product:boolean;
    is_popular_product:boolean;
    is_slider:Boolean;
    is_exit:boolean; 
    active:boolean;
}


export interface IProduct
{
    count:number;
    next:string;
    previous:string;
    results:IProperty[]
    

}

export interface IData
{
    all_products:IProperty[];
    page_size:number[];
    prev:string;
    next:string;
}



