const bcrypt=require('bcrypt');
const jwt =require('jsonwebtoken');
let saltround=10;
let storedarr=[];
let secretkey="v@m$hi"
let arr=[1,2,3,4,5]
const  register=(req,res)=>{
    let registerdata=req.body;

    //now we will be finding wheather the user is their in the array or not
    let user=storedarr.find(item=>{
        if(item.email===registerdata.email){
            return item;
        }
    })

    //If the user email id is matching in storedarr
    if(user){
   return    res.send({msg:"User already exists"})
    }
    //Now the case comes that user is not existing in the stored addarr
    if(registerdata.email){
const hashpassword=bcrypt.hashSync(registerdata.password,saltround)
if(registerdata.password){ 
let tempobj={

        email:registerdata.email,
        password:hashpassword
    }
storedarr.push(tempobj)
return res.send(tempobj);
}
}
return res.send("Enter all the details to register")
}
const homedata3=[
    {"name":"Iphone12 mini","category":"iphone","lastprice":30000,"presentprice":27000,"img":"https://media.istockphoto.com/id/1371695315/photo/iphone-13-pro-sierra-blue.jpg?s=612x612&w=0&k=20&c=-0Mr9DdIRHFoLUozdltlHdkum0ChCNTGfLhxc-3oHmI=" },
    {"name":"Iphone12","category":"iphone","lastprice":40000,"presentprice":37000,"img":"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-mini-product-red-witb-2021_FMT_WHH?wid=560&hei=744&fmt=png-alpha&.v=1638579082000"},
    {"name":"Iphone12 Pro","category":"iphone","lastprice":50000,"presentprice":48000,"img":"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-mini-blue-witb-2021_FMT_WHH?wid=560&hei=744&fmt=jpeg&qlt=90&.v=1638579083000"},
    {"name":"Iphone12 Pro max","category":"iphone","lastprice":44000,"presentprice":37000,"img":"https://www.91-img.com/gallery_images_uploads/2/2/22e44756a816d86a6864fc78a8d434a6e5bf5e5f.jpg?tr=h-630,c-at_max,q-80"},
    {"name":"Iphone13","category":"iphone","lastprice":33000,"presentprice":27000,"img":"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204"},
    {"name":"Iphone13 Pro","category":"iphone","lastprice":35000,"presentprice":29000,"img":"https://www.designinfo.in/wp-content/uploads/2023/01/Apple-iPhone-14-Pro-Mobile-Phone-493177786-i-1-1200Wx1200H-485x485-optimized.jpeg"},
    {"name":"Iphone13 Pro Max","category":"iphone","lastprice":30000,"presentprice":27000,"img":"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-mini-product-red-witb-2021_FMT_WHH?wid=560&hei=744&fmt=png-alpha&.v=1638579082000"},
    {"name":"IphoneSE","category":"iphone","lastprice":30000,"presentprice":27000,"img":"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-finish-select-202207-6-1inch-pink?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1657641867367"},
    {"name":"Iphone14","category":"iphone","lastprice":30000,"presentprice":27000,"img":"https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_UF894,1000_QL80_.jpg"},
    {"name":"Iphone14Plus","category":"iphone","lastprice":30000,"presentprice":27000,"img":"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-finish-select-202207-6-1inch-pink?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1657641867367"},

    {"name":"Ipadmini 2","category":"ipad","lastprice":17000,"presentprice":15000,"img":"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-finish-unselect-gallery-1-202207_GEO_EMEA_FMT_WHH?wid=1280&hei=720&fmt=p-jpg&qlt=95&.v=1654902551914"},
    {"name":"Ipadmini 3","category":"ipad","lastprice":18000,"presentprice":15000,"img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBV7CB-RQZaMigVUtdhCDTBHaG0Sd_uHRLr28y5GtF&s"},
    {"name":"Ipadmini 4","category":"ipad","lastprice":30000,"presentprice":27000,"img":"https://www.apple.com/v/ipad-air/t/images/overview/design/colors_ipad_5__ceq7dhqtzfua_large.jpg"},
    {"name":"Ipadmini 5","category":"ipad","lastprice":15000,"presentprice":12000,"img":"https://www.apple.com/newsroom/images/product/ipad/standard/apple_ipados14_widgets_062220_big.jpg.large.jpg"},
    {"name":"Ipadmini 6","category":"ipad","lastprice":30000,"presentprice":27000,"img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwLVnKAPsOhn6YGDav_drXOh5c5XAJrw7oxq652yjv&s"},
    {"name":"Ipadmini 7","category":"ipad","lastprice":16000,"presentprice":12000,"img":"https://fdn2.gsmarena.com/vv/pics/apple/apple-ipad-air-1.jpg"},

    {"name":"Macbook Iris Graphics","category":"macbook","lastprice":47000,"presentprice":45000,"img":"https://media.istockphoto.com/id/1202959798/photo/macbook-pro-16-inch-with-touchbar-front-view.jpg?s=612x612&w=0&k=20&c=Uj7nnv5j_STbkW03MaXNKQtdUxiN5AQD9JF0Dw1i0WQ="},
    {"name":"Macbook Pro Intel  540","category":"macbook","lastprice":43000,"presentprice":42000,"img":"https://images.unsplash.com/photo-1514826786317-59744fe2a548?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hY2Jvb2slMjBwcm98ZW58MHx8MHx8fDA%3D&w=1000&q=80"},
    {"name":"Macbook Pro Intel 630 ","category":"macbook","lastprice":40000,"presentprice":39000,"img":"https://media.gettyimages.com/id/1358386254/photo/apple-macbook-pro.jpg?s=612x612&w=gi&k=20&c=uM1zbBh7Efog_OBUnC3MU6fgZ4De3zO2Lt-HAfWHP7g="},
    {"name":"Macbook Pro Intel Iris Plus","category":"macbook","lastprice":40000,"presentprice":35000,"img":"https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?cs=srgb&dl=pexels-veeterzy-303383.jpg&fm=jpg"},
    {"name":"Xiaomi Redmi Note 12 4G","category":"macbook","lastprice":16000,"presentprice":12000,"img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH_H1suhfAlNooaK25F820vadQCz6zKk5zMBU1HowXvQ&s"},
    {"name":"Xiaomi Redmi K50i","category":"macbook","lastprice":30000,"presentprice":27000,"img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPvJZDjbwmUiGJ-9zVgOlsqvAM2WFkx-367dF6BET2-icUqMHBFBlCp_yrtSjfZvojaA&usqp=CAU"},
    {"name":"Xiaomi Redmi 11 Prime 5G","category":"macbook","lastprice":17000,"presentprice":15000,"img":"https://rukminim2.flixcart.com/image/850/1000/kruyw7k0/computer/v/x/v/na-thin-and-light-laptop-apple-original-imag5jt7u9fzenqb.jpeg?q=90"},
    {"name":"Xiaomi Redmi 11 Prime 5G","category":"macbook","lastprice":18000,"presentprice":13500,"img":"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-gold-select-201810?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1664472289059"},
    {"name":"Xiaomi Redmi 12 5G 8GB RAM","category":"macbook","lastprice":15000,"presentprice":14000,"img":"https://idestiny.in/wp-content/uploads/2021/10/MacBook_Pro_16-in_Silver_PDP_Image_Position-1__en-IN-600x600.jpg"},
    {"name":"Xiaomi Redmi Note 12 Pro ","category":"macbook","lastprice":15000,"presentprice":12000,"img":"https://upload.wikimedia.org/wikipedia/commons/7/76/MacBook-Pro-13inch.jpg"}
    
    
]

const login=(req,res)=>{
    //we use req.body to get details from client
const logindata=req.body
const {email,password}=logindata;
console.log(password);
const user=storedarr.find(item=>{
    if(item.email===email){
    return item
}
})
//if user exists 
if(user){
    const validate=bcrypt.compareSync(logindata.password,user.password)
    const token=jwt.sign({user:user.email},secretkey,{expiresIn:4500})
    if(validate){
        const userinfo={
            email:user.email,
            password:user.password,
            token:token
        }
        return res.send(userinfo);
    }
    //if password is not matching
    else{
        return res.send("Invalid password")
    }
}
//if user doesnot exits
else{
    return res.send('User is not registered')
}

}
const home=(req,res)=>{
    res.send(homedata3);
}



const logout=(req,res)=>{
    res.status(200).send("User loggged out")
}

module.exports={register,login,logout,home}