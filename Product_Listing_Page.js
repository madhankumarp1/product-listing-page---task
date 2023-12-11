
let image_click = document.querySelectorAll(".ima");  
let  product = document.querySelector("#product");
let  brand = document.querySelector("#brand");
let  rate = document.querySelector("#rate");
let para = document.querySelector("#para");
let img_change_contain = document.querySelector(".img-change-contain"); 

let object = [{
      
        //   Row-1


    src: "https://course-api.com/images/store/product-1.jpeg",
    Product: "High-Back-Bench",
    Brand: "Casre",
    Rate: "$66.99",
    para: "Selvage street art hammock affogato VHS.Mustache shaman literally wayfarers schlitz." +
        "Direct trade four loko narwhal VHS pop-up," +
        "chartreuse trust fund typewriter street art swag"
}, {
    src: "https://course-api.com/images/store/product-2.jpeg",
    Product: "Albany Table",
    Brand: "Casre",
    Rate: "$66.99",
    para: "Selvage street art hammock affogato VHS.Mustache shaman literally wayfarers schlitz." +
        "Direct trade four loko narwhal VHS pop-up," +
        "chartreuse trust fund typewriter street art swag"
},
{
    src: "https://course-api.com/images/store/product-3.jpeg",
    Product: "Wooden Table",
    Brand: "Mi",
    Rate: "$45.99",
    para: "Selvage street art hammock affogato VHS.Mustache shaman literally wayfarers schlitz." +
        "Direct trade four loko narwhal VHS pop-up," +
        "chartreuse trust fund typewriter street art swag"
},

             //    Row-2
{
    src: "https://course-api.com/images/store/product-4.jpeg",
    Product: "Wooden Table",
    Brand: "Realme",
    Rate: "$66.99",
    para: "Selvage street art hammock affogato VHS.Mustache shaman literally wayfarers schlitz." +
        "Direct trade four loko narwhal VHS pop-up," +
        "chartreuse trust fund typewriter street art swag"
},
{
    src: "https://course-api.com/images/store/product-5.jpeg",
    Product: " Dining Table",
    Brand: "Apple",
    Rate: "Sofa Set",
    para: "Selvage street art hammock affogato VHS.Mustache shaman literally wayfarers schlitz." +
        "Direct trade four loko narwhal VHS pop-up," +
        "chartreuse trust fund typewriter street art swag"
},
{
    src: "https://course-api.com/images/store/product-6.jpeg",
    Product: "Sofa Set",
    Brand: "Oppo",
    Rate: "$10.99",
    para: "Selvage street art hammock affogato VHS.Mustache shaman literally wayfarers schlitz." +
        "Direct trade four loko narwhal VHS pop-up," +
        "chartreuse trust fund typewriter street art swag"
},

    //   Row-3
{
    src: "https://course-api.com/images/store/product-7.jpeg",
    Product: "Modern BookShelf",
    Brand: "Dckap",
    Rate: "$4.99",
    para: "Selvage street art hammock affogato VHS.Mustache shaman literally wayfarers schlitz." +
        "Direct trade four loko narwhal VHS pop-up," +
        "chartreuse trust fund typewriter street art swag"
},
{
    src: "https://course-api.com/images/store/product-8.jpeg",
    Product: "Emperor Bed",
    Brand: "OnePluse",
    Rate: "$13.99",
    para: "Selvage street art hammock affogato VHS.Mustache shaman literally wayfarers schlitz." +
        "Direct trade four loko narwhal VHS pop-up," +
        "chartreuse trust fund typewriter street art swag"
},
{
    src: "https://course-api.com/images/store/product-9.jpeg",
    Product: "Utopia Sofa",
    Brand: "OnePluse",
    Rate: "$13.99",
    para: "Selvage street art hammock affogato VHS.Mustache shaman literally wayfarers schlitz." +
        "Direct trade four loko narwhal VHS pop-up," +
        "chartreuse trust fund typewriter street art swag"
}
];

for (let i = 0; i < image_click.length; i++) {
    image_click[i].addEventListener("click", function() {
        location.href = "Product_Listing_Page.html";
        // window.open( "Product_Listing_Page.html",'_blank')
        // show(i);
        // console.log(i);
        localStorage.setItem('index',i ); 
    });
}   
// function show(i){
//       localStorage.setItem('index',i ); 
// }

let index1 = localStorage.getItem('index');

let result = myFunction(index1);

 function myFunction(index1) {
    console.log(    product.innerHTML = object[index1].Product);

    product.innerHTML = object[index1].Product;
    brand.innerHTML = object[index1].Brand;
    rate.innerHTML = object[index1].Rate;
    para.innerHTML = object[index1].para;
    img_change_contain.src = object[index1].src;
  }
    
// if (index1) {
//     console.log(index1);
//     product.innerHTML = object[index1].Product;
//     brand.innerHTML = object[index1].Brand;
//     rate.innerHTML = object[index1].Rate;
//     para.innerHTML = object[index1].para;
//     img_change_contain.src = object[index1].src;
// }

//   Page-2 Button

let back_buttons = document.getElementById("btn");

    back_buttons.addEventListener("click", function() {
        location.href = "index.html";
    });


