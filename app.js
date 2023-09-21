// const earbuds = document.querySelector(".earbuds");
// const bluetooth = [
//     {
//         img :  "./assets/earbuds1.webp",
//         para : "M47 wireless Earphone plus",
//         price : "Rs. 3,999"
//     },
//     {
//         img :  "./assets/earbuds3.webp",
//         para : "Air 31 TWS Transparent Earbuds",
//         price : "Rs.2,499",
//     },
//     {
//         img :  "./assets/earbuds4.webp",
//         para : "Samsung Galaxy2 Earbuds",
//         price : "Rs.19,499",
//     },
//     {
//         img :  "./assets/earbuds5.webp",
//         para : "QCY T13 ANC wireless earpuds",
//         price : "Rs.5,499",
//     },
//     {
//         img :  "./assets/earbuds6.webp",
//         para : "Soundpeats  05 Wireless Earbuds",
//         price : "Rs.18,899",
//     },
//     {
//         img :  "./assets/earbuds7.webp",
//         para : "Air 13 Pro TWS Bluetooth Earbuds",
//         price : "Rs.2,299",
//     },
//     {
//         img :  "./assets/earbuds5.webp",
//         para : "QCY T13 ANC Wireless Earphones",
//         price : "Rs.5,499",
//     },
//     {
//        img:"./assets/earbuds13.webp", 
//         para : "Lenove HEOFX Neckband Wireless",
//         price : "Rs.1,240",
//     },
//     {
//         img :  "./assets/earbuds10.webp",
//         para : "12 TWS Touch Sensor Airpods",
//         price : "Rs.1,099",
//     },
//     {
//         img :  "./assets/earbuds11.webp",
//         para : "Soundpeats Air4 wireless Earbuds",
//         price : "Rs.12,499",
//     },{
//         img :  "./assets/earbuds12.webp",
//         para : "Dany Airdots 102",
//         price : "Rs.4,199",
//     },
// {
//     img :  "./assets/earbuds14.webp",
//     para : "M10 TWS Wireless Earbuds",
//     price : "Rs.1,149",
// },
// ]
// for (let i = 0; i < bluetooth.length; i++) {
//     earbuds.innerHTML +=`
//     <div class="main">&nbsp;&nbsp;
//     <img class="js-img" src="${bluetooth[i].img}"alt=""><br>
//     <p>${bluetooth[i].para}</p>
//         <b><h3>${bluetooth[i].price}</b></h3>
//         <button onclick = "orderNow(${i})" class="btn">Order Now </button>
//     </div>
// </div>
// `

// }
// const bluetootharr = [];
// function orderNow(index) {
//     // console.log(phones[index]);
//     // console.log([phones]);

//     if (bluetootharr.includes(bluetooth[index]) === true) {
//         // console.log("if chal gya" ,array);
//         for (let i = 0; i < bluetootharr.length; i++) {
//             if (bluetootharr[i] === (bluetooth[index])) {
//                 // console.log("item already majood ha");
//                 Swal.fire({
//                     icon: 'info',
//                     title: 'Item Already in Cart',
//                     text: 'You have already added this item to your cart.',
//                 });
//             }
//         }

//     }    
// else {
//             bluetooth[index].quantity = 1;
//             bluetootharr.push(bluetooth[index]);
//             Swal.fire({
//                 icon: 'success',
//                 title: 'Item Added to Cart',
//                 text: 'The item has been added to your cart.',
//             });
//         }
//     }



const mobile = document.querySelector(".mobile")

const phones = [
    {
        brand: 'Samsung',
        img: "https://m.media-amazon.com/images/I/41KRhotx+PL.jpg",
        model: 'S20',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 159000,
    },
    {
        brand: 'Xiomi',
        img: "https://images.priceoye.pk/xiaomi-redmi-note-10-pakistan-priceoye-124uk.jpg",
        model: 'note10',
        ram: 4,
        rom: 64,
        camera: '10 megapixel',
        price: 31999,
    },
    {
        brand: 'Infinix',
        img: "https://rakistan.pk/wp-content/uploads/2021/11/infinix-zero-x-pro-pakistan-priceoye-im0ai-500x500-1.webp",
        model: 'z10',
        ram: 5,
        rom: 16,
        camera: '5 megapixel',
        price: 34999,
    },
    {
        brand: 'Tecno',
        img: "https://images.priceoye.pk/tecno-spark-10-pakistan-priceoye-2144l.jpg",
        model: 'spark10',
        ram: 12,
        rom: 512,
        camera: '25 megapixel',
        price: 39999,
    },
    {
        brand: 'Iphone',
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkb7zxjf33D_bOzSqpJdYZtFRS9_d9w2VVHOcAn7HTDtOyONYMoH5Iz1uQQeh2qm17DyA&usqp=CAU",
        model: '14',
        ram: 4,
        rom: 1024,
        camera: '30 megapixel',
        price: 234999,
    },
    {
        brand: 'Oppo',
        img: "https://cf.shopee.com.my/file/cfb2a159ee8d06bc3d0a0046ec34d060",
        model: 'F11',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 35999,
    },
    {
        brand: 'Vivo',
        img: "https://newglacier.pk/wp-content/uploads/2022/09/y20.jpg",
        model: 'y20',
        ram: 4,
        rom: 64,
        camera: '8 megapixel',
        price: 26999,
    },
    {
        brand: 'Huawei',
        img: "https://mobiles.dailypakistan.com.pk/wp-content/uploads/2020/08/HUAWEIP3-600x600.jpg",
        model: 'P30 Pro',
        ram: 8,
        rom: 512,
        camera: '40 megapixel',
        price: 26999,
    },

]
for (let i = 0; i < phones.length; i++) {
    // console.log(phones[i]);
    mobile.innerHTML += `<div class ="c-div main ">
    <h2 > ${phones[i].brand}</h2>
    <img class="js-img" src=" ${phones[i].img}" alt="">
   <p  class = "h4"> <b>Ram: ${phones[i].ram}</p></b>
   <p  class = "h4"><b> Rom: ${phones[i].rom}</p></b>
    <p  class = "h4"><b>Camera: ${phones[i].camera}</p></b>
    <p  class = "h4"><b>Price: ${phones[i].price}</p></b>
<button onclick = "addtocart(${i})" class="btn">ADD to cart </button>
</div>
`
}

const addcartarr = []
function addtocart(index) {
    // console.log(phones[index]);
    if (addcartarr.includes(phones[index])) {
        // addcartarr.push(phones[index])
        for (let i = 0; i < addcartarr.length; i++) {
            if (addcartarr[i] === phones[index]) {
                phones[index].quantity += 1
            }
        }
    } else {
        phones[index].quantity = 1
        addcartarr.push(phones[index])
    }
    console.log(addcartarr);

}

function gocart(params) {
    window.location = "./cart.html "
}
