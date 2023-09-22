const father = document.querySelector(".father");
const bill = document.querySelector(".bill");
 let storage = localStorage.getItem("addcartarr");
 let sting = JSON.parse("storage")
 console.log(sting);


render()

 function render(params) {
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
 }


 function gohome(params) {
    window.location = "./index.html"
 }