
function gohome(params) {
   window.location = "./index.html"
}


const additem = document.getElementById("#main-div")
const data = localStorage.getItem("addcartarr")
const addcartarr = JSON.parse(data)
// console.log(addcartarr);



function render() {
   for (let i = 0; i < addcartarr.length; i++) {
//  console.log(addcartarr[i]);    
   }
}

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

