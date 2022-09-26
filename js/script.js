
// check if there is local storage color option
let mainColor = localStorage.getItem("color-option");

if(mainColor !== null){
 
    document.documentElement.style.setProperty('--main-color',localStorage.getItem("color-option"));

    //remove active class from all colors list item
    document.querySelectorAll(".colors-list li").forEach(element => {
        element.classList.remove("active");
            //add active class on element with data-color === local storage item
           
            if(element.dataset.color === mainColor){
                //add active class
                element.classList.add("active");
            }


    });
    
}

// random background option

let backgroundOption = true;

//variabe to the control background interval
let backgroundInterval;

// check if there is  local storage random background item
let backgroundLocalItem =localStorage.getItem("background-option");

//check if random background local storage is not empty
if(backgroundLocalItem !== null){

    if(backgroundLocalItem === 'true'){
       
        backgroundOption = true;
    }else{
        backgroundOption = false ;
    }



// remove active class from all span
document.querySelectorAll(".random-background span").forEach(element=>{
    element.classList.remove("active");
});

if(backgroundLocalItem === 'true'){
    document.querySelector(".random-background .yes").classList.add("active");
}else{
    document.querySelector(".random-background .no").classList.add("active");

}

};

// toggle spin class on icon
document.querySelector(".toggle-settings .fa-gear").onclick = function (){

    //toggle class for rotation on self
    this.classList.toggle('fa-rotate');

    //toggle class open on main settings box
    document.querySelector(".settings-box").classList.toggle('open');


}

//switch colors

let colorsLi = document.querySelectorAll('.colors-list li');

// console.log(colorsLi);

    //loop on list items

colorsLi.forEach(li => {

    

    // click on every list item
    li.addEventListener('click',(e) => {
      
        console.log(e.target.dataset.color);

    //   set color on root
     document.documentElement.style.setProperty('--main-color',e.target.dataset.color);

    // set color on local storage
    localStorage.setItem("color-option" ,e.target.dataset.color);

    //Remove active class from all childerns

    handleActive(e);
    });


});


// // another answer switch colors

// let elementlist= [];

// for(let i=0;i< colorsLi.length ; i++){

//     elementlist.push(colorsLi[i].getAttribute('data-color'));

//     colorsLi[i].addEventListener("click" , function(){
//         //remove all this old classes
//         document.body.classList.remove(...elementlist);
      
//         //add current class li
//         document.body.classList.add(this.getAttribute('data-color'));

//     },false);
// }

// // console.log(elementlist);




// switch random background color
const randomBackEl = document.querySelectorAll(".random-background span");

//loop on all span
randomBackEl.forEach(span =>{

    span.addEventListener("click" , (e) =>{


    //Remove active class from all childerns

    handleActive(e);

      if(e.target.dataset.background === 'yes'){
        
        backgroundOption = true;

        randomizeImgs();
        localStorage.setItem("bacground-option",true);
      }else{

        backgroundOption = false;
        clearInterval(backgroundInterval);
        localStorage.setItem("background-option", false);

      }

    });

});

// select landing page element

let landingPage = document.querySelector(".landing-page");

// get array of images
let imgsArray =["01.webp","02.webp","03.webp","04.webp","05.webp","06.webp","07.webp","08.webp","09.webp"];



// function to randomizeImgs
 function randomizeImgs(){
 if(backgroundOption === true){

  
backgroundInterval = setInterval(()=>{

   // get random number
   let randomNumber =Math.floor(Math.random() * imgsArray.length);
   
   
   //change background url
   landingPage.style.backgroundImage ='url("images/'+ imgsArray[randomNumber] +'")';
   
       
   },1000);

}


 };

 randomizeImgs();




//select skills selector
let ourSales = document.querySelector(".sales");

window.onscroll = function (){

    //sales offset top
    let salesOffsetTop = ourSales.offsetTop;

    // this.console.log(salesOffsetTop);

    // sales outer height
    let salesOuterHeight = ourSales.offsetHeight;

    // this.console.log(salesOuterHeight);

    //window Height
    let windowHeight = this.innerHeight;

    // this.console.log(windowHeight);

    //window scrollTop
    let windowScrollTop = this.pageYOffset;

    // this.console.log(windowScrollTop);

    // console.log(windowScrollTop  < (salesOffsetTop + salesOuterHeight - windowHeight));


    // if (windowScrollTop  < (salesOffsetTop + salesOuterHeight - windowHeight))
    if(salesOffsetTop - .5 * salesOuterHeight)
    
    {


        let allSales = document.querySelectorAll(".sales-box .product-progress span");

        console.log(allSales);
        
        allSales.forEach(sales => {
            sales.style.width = sales.dataset.progress;
        });

        // this.console.log('Sales Section Reached');
    };

};



// create popup with the image
let ourGallery =document.querySelectorAll(".gallery img");

ourGallery.forEach(img => {

    img.addEventListener("click" , (e) => {

        //create overlay element
        let overlay = document.createElement("div");

        // add class to overlay
        overlay.className="popup-overlay";

        // append overlay to the body
        document.body.appendChild(overlay);

        // create popup box
        let popupBox = document.createElement("div");
        
        // add class to popupbox
        popupBox.className="popup-box";

        
        if(img.alt !== null){

            //create heading to the img
            let imgHeading = document.createElement("h3");

            //add text to the image heading
            let imgText =document.createTextNode(img.alt);

            //append text to the heading
            imgHeading.appendChild(imgText);

            //append the heading to the popup Box
            popupBox.appendChild(imgHeading);

        }

        // create pop img
        let popupImage = document.createElement("img");

        // set  Img source
        popupImage.src = img.src;
        
        // add img to popup box
        popupBox.appendChild(popupImage);

        // append the popup box to body
        document.body.appendChild(popupBox);

        // create close button
        let closeButton = document.createElement("span");

        // add text to close button
        let closeButtonText = document.createTextNode("X");

        // append text to close button
        closeButton.appendChild(closeButtonText);

        // add class to close button
        closeButton.className="close-button";

        // append close button to popup box
        popupBox.appendChild(closeButton);

    });

});

// close popup
document.addEventListener("click",function (e){

    if(e.target.className == "close-button"){

        //remove popup box
        e.target.parentNode.remove();

        //remove overlay
        document.querySelector(".popup-overlay").remove();
        };

});


// select all bullets

const allBullets = document.querySelectorAll(".nav-bullets .bullet");

// allBullets.forEach(bullet =>{
//     bullet.addEventListener("click",(e) => {
//        document.querySelector(e.target.dataset.section).scrollIntoView({
//         behavior:'smooth'
//        });
//     });
// });

// select all links

const allLinks = document.querySelectorAll(".links a");

function scrollToSomeWhere(elements){

    elements.forEach(ele =>{
        ele.addEventListener("click",(e) => {
    
            e.preventDefault();
           document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior:'smooth'
           });
        });
    });
    
};

scrollToSomeWhere(allBullets);
scrollToSomeWhere(allLinks);


// Handle active state

function handleActive(ev){
  ev.target.parentElement.querySelectorAll(".active").forEach(element =>{
   //remove active class from all childrens
    element.classList.remove("active");
  });
  //add active class on self
    ev.target.classList.add("active");
} ;

// show or hide bullets

let bulletsSpan = document.querySelectorAll(".bullets-option span");

let navBullets =document.querySelector(".nav-bullets");

let bulletLocalItem = localStorage.getItem("bullets-option");

if(bulletLocalItem !== null){

bulletsSpan.forEach(span => {

    span.classList.remove("active");

});

if(bulletLocalItem === 'block'){
   
    navBullets.style.display = "block";
    document.querySelector(".bullets-option .yes").classList.add("active");

}else{

    navBullets.style.display = "none";
    document.querySelector(".bullets-option .no").classList.add("active");

}


};

// console.log(bulletsSpan);

bulletsSpan.forEach(span => {

    
span.addEventListener("click" ,(e) =>{

    

    if(span.dataset.display === "show"){

        navBullets.style.display = "block";
 
        localStorage.setItem("bullets-option","block");

   }else{
       navBullets.style.display = "none" ;

       localStorage.setItem("bullets-option","none");
   }

 handleActive(e);
});


});

// reset button

document.querySelector(".reset-options").onclick = function (){
 
    // localStorage.clear();
    localStorage.removeItem("color-option");
    localStorage.removeItem("background-option");
    localStorage.removeItem("bullets-option");

    //reload window
    window.location.reload();

};


// toggle menu

let toggleBtn = document.querySelector(".toggle-menu");

let tLinks = document.querySelector(".links");


toggleBtn.onclick =function(e){
    // stop propagation
    e.stopPropagation();
 
    //toggle class "menu-active" on button
    this.classList.toggle("menu-active");
 
    //toggle class "open" in links
    tLinks.classList.toggle("open");

};

//click any where outside menu and toggle button
document.addEventListener("click" , (e) =>{

    if(e.target !== toggleBtn && e.target !== tLinks){
       
        // check if menu is open
        if(tLinks.classList.contains("open")){

            // console.log("menu is open");

  //toggle class "menu-active" on button
    toggleBtn.classList.toggle("menu-active");
 
    //toggle class "open" in links
    tLinks.classList.toggle("open");

        }
      
    };

});


//stop propagation on menu
tLinks.onclick = function(e){

    e.stopPropagation();
}

