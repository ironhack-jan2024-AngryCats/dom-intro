


/****************************/
/* Find elements in the DOM */
/* **************************/


// by Id
const myTitle = document.getElementById("main-title");
myTitle.innerHTML = "Welcome to our ecommerce site"
myTitle.style.color = "green"


// by class name
const infoCollection = document.getElementsByClassName("info");
const infoElementsArr = [...infoCollection]; // convert html collection to an array
infoElementsArr.forEach( (elm) => {
    elm.innerHTML = "new content....";
    elm.style.color = "blue"
});


// by tag name
const allParagraphsHtmlCollection = document.getElementsByTagName("p");



// by css selectors....
// 

const first = document.querySelector("header h2");
const all = document.querySelectorAll("header h2");

all.forEach( elm => elm.style.color = "orange" ); 


//
// context: document vs. element
//


const allParagraphsInDocument = document.getElementsByTagName("p");

const productsElm = document.getElementById("products");
const allParagraphsInProductsElm = productsElm.getElementsByTagName("p")

const allParagraphsInProductsElm_Alternative = document.querySelectorAll("#products p");


/**************/
/* Properties */
/**************/


//Read/Modify html contents --> elm.innerHTML
const pikachuElm = document.getElementById("pikachu");
pikachuElm.innerHTML = `
    <div>
        <p>one</p>
        <p>two
            <a href="#">click here for more info</a>
        </p>
    </div>
    `;


//Read/Modify text content --> elm.innerText
const linkElm = document.getElementById("my-link");
linkElm.innerText = "About us - we are amazing"


//Read/Modify CSS --> elm.style

myTitle.style.color = "purple"
myTitle.style.backgroundColor = "yellow";
myTitle.style.border = "5px solid green";


//Read/Modify the id --> elm.id
myTitle.id = "this-is-the-new-id"


//Read/Modify class --> elm.className
myTitle.className = "title rounded"


// elm.classList (provides methods to access class names)
// - elm.classList.remove("foo");
// - elm.classList.add("new-class")
// - elm.classList.toggle("active")
myTitle.classList.toggle("important");


/**************/
/* Attributes */
/**************/

// get: elm.getAttribute(attributeName);

const result = linkElm.getAttribute("href");


// modify or create: elm.setAttribute(name, value);
linkElm.setAttribute("href", "https://ironhack.com");
linkElm.setAttribute("target", "_blank");

// remove: elm.removeAttribute(attrName);



/*********************/
/* Create a DOM node */
/*********************/


// step1: create the element
const newImg = document.createElement("img");


// step2: add content or modify (ex. innerHTML...)
newImg.setAttribute("src", "./images/pikachu.jpg");
newImg.setAttribute("alt", "beautiful pikachu image");


//step3: append to the dom: `parentElm.appendChild()`
const parentElm = document.getElementById("pikachu");
parentElm.appendChild(newImg);



/**************/
/**************/
/*   Events   */
/**************/
/**************/

// elm.addEventListener(eventType, code);


const btn = document.getElementById("button-1");

btn.addEventListener("click", function(){
    console.log("user has clicked a button....");
});



// Demo: append a paragraph everytime the user clicks on a button
btn.addEventListener("click", (event) => {
    console.log(event.target)
    const newP = document.createElement("p");
    newP.innerText = "this p has been created dynamically";
    parentElm.appendChild(newP);
});




/*************************************/
/* Attach event to multiple elements */
/*************************************/

const allBtn = document.querySelectorAll(".btn");

allBtn.forEach( (btnElm) => {
    btnElm.addEventListener("click", () => {
        console.log("you clicked on a magic button!!!!!!!");
    })
});

