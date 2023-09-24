
function gohome(params) {
   window.location = "./index.html"
}


const maindiv = document.getElementById("main-div")
const div = document.getElementById("div")



let data = localStorage.getItem("addcartarr")
let retarray = JSON.parse(data)
// console.log(addcartarr);



function render() {
   for (let i = 0; i < retarray.length; i++) {
retarray[i].totalprice =+ `${retarray[i].price} * ${retarray[i].quantity} `
// console.log(addcartarr[i]);
maindiv.innerHTML += `<div class ="c-div main ">
<h2 > ${retarray[i].brand}</h2>
<img class="js-img" src=" ${retarray[i].img}" alt="">
<p  class = "h4"> <b>Ram: ${retarray[i].ram}</p></b>
<p  class = "h4"><b> Rom: ${retarray[i].rom}</p></b>
<p  class = "h4"><b>Camera: ${retarray[i].camera}</p></b>
<p  class = "h4"><b>Price: ${retarray[i]} </p></b>
<p  class = "h4"><b>Price: ${retarray[i].quantity} </p></b>
<p  class = "h4"><b>Price: ${retarray[i].TotalPrice} </p></b>
<button onclick = "addtocart(${i})" class="btn">ADD to cart </button>
</div>
`
   }
}
render()
// const div = document.querySelector("#main-div");


// function renderCart() {
//    for (let i = 0; i < addcartarr.length; i++) {
//       // console.log(phones[i]);
//       div.innerHTML += `<div class ="c-div main ">
//       <h2 > ${phones[i].brand}</h2>
//       <img class="js-img" src=" ${phones[i].img}" alt="">
//      <p  class = "h4"> <b>Ram: ${phones[i].ram}</p></b>
//      <p  class = "h4"><b> Rom: ${phones[i].rom}</p></b>
//       <p  class = "h4"><b>Camera: ${phones[i].camera}</p></b>
//       <p  class = "h4"><b>Price: ${phones[i].price}</p></b>
//   <button onclick = "addtocart(${i})" class="btn">ADD to cart </button>
//   </div>
//   `
//   }
// }
// renderCart()

