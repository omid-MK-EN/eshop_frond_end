export interface IEshopAboutUs
{
    id:number;
    company_name:string;
    email:string;
    tel:string;
    fax:string;
    mobile:string;
    compane_descriptions:string;
    adress:string;
    logo:string;
    is_active:Boolean

}
// company_name = models.CharField(max_length=50)
//     email = models.EmailField()
//     tel = models.CharField(max_length=30)
//     fax = models.CharField(max_length=30)
//     mobile =models.CharField(max_length=30)
//     compane_descriptions = models.TextField()
//     adress = models.TextField()
//     logo = models.ImageField(upload_to = "eshop_about_us_log/")
//     is_active = models.BooleanField(default=False)
