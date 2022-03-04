const wrapper= document.querySelector(".sliderWrapper")
const menuItems= document.querySelectorAll(".menuItem")

const products = [
    {
        id: 1,
        title:"BLAZER",
        price: 119,
        colors: [
            {
                code:"#6b705c",
                img:"./img/blazer2.png",
            },
            {
                code:"blue",
                img:"./img/blazer3.png",
            },
        ],
    },
    {
        id: 2,
        title:"HIPPIE",
        price: 149,
        colors: [
            {
                code:"red",
                img:"./img/maxx.png",
            },
            {
                code:"black",
                img:"./img/nike.png",
            },
        ],
    },
    {
        id: 3,
        title:"CRATER",
        price: 129,
        colors: [
            {
                code:"black",
                img:"./img/crater.png",
            },
            {
                code:"lightgreen",
                img:"./img/crater2.png",
            },
        ],
    },
    {
        id: 4,
        title:"AIR FORCE",
        price: 139,
        colors: [
            {
                code:"grey",
                img:"./img/good.png",
            },
            {
                code:"black",
                img:"./img/goood.png",
            },
        ],
    },
    {
        id: 5,
        title:"JORDAN",
        price: 99,
        colors: [
            {
                code:"gray",
                img:"./img/last2.png",
            },
            {
                code:"blue",
                img:"./img/last.png",
            },
        ],
    },
];

let choosenProduct = products[0]

const currentProductImg = document.querySelector('.productImg');
const currentProductTitle = document.querySelector('.productTitle');
const currentProductPrice = document.querySelector('.productPrice');
const currentProductColors = document.querySelectorAll('.color');
const currentProductSizes = document.querySelectorAll('.size');

menuItems.forEach((item,index)=>{
    item.addEventListener('click', ()=>{
        //change the current slide
        wrapper.style.transform=`translateX(${-100 * index}vw)`;

        //change the choosen product
        choosenProduct = products[index]

        //change text of current product
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

        //assign new colors
        currentProductColors.forEach((color, index)=>{
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});

currentProductColors.forEach((color, index)=>{
    color.addEventListener('click', () =>{
        currentProductImg.src = choosenProduct.colors[index].img
    });
});

currentProductSizes.forEach((size, index)=>{
    size.addEventListener('click', ()=>{
        currentProductSizes.forEach((size) =>{
            size.style.backgroundColor = "white"
            size.style.color = "black"
        }); 
        size.style.backgroundColor = "black"; 
        size.style.color = "white";
    });
});

const ProductButton = document.querySelector('.productButton');
const payment = document.querySelector('.payment');
const close = document.querySelector('.close');

ProductButton.addEventListener('click', ()=>{
    payment.style.display = "flex";
})
close.addEventListener('click', ()=>{
    payment.style.display = "none";
})












