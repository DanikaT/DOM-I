const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//NAV BAR

const navItems = document.getElementsByTagName("a");
console.log(navItems);

const navItemsArray = Array.from(navItems);
console.log(navItemsArray);

navItemsArray[0].textContent = siteContent.nav["nav-item-1"];
navItemsArray[1].textContent = siteContent.nav["nav-item-2"];
navItemsArray[2].textContent = siteContent.nav["nav-item-3"];
navItemsArray[3].textContent = siteContent.nav["nav-item-4"];
navItemsArray[4].textContent = siteContent.nav["nav-item-5"];

//Header Text

const headerText = document.querySelector("h1");
console.log(headerText);

headerText.textContent = siteContent.cta.h1;

//Code snippet img

const codeSnippet = document.getElementById("cta-img");
console.log(codeSnippet);

codeSnippet.src = siteContent.cta["img-src"];

//CTA button text

const ctaButtonText = document.querySelector("button");
console.log(ctaButtonText);

ctaButtonText.textContent = siteContent.cta.button;

//Middle image

const middleImg = document.getElementById("middle-img");
console.log(middleImg);

middleImg.src = siteContent["main-content"]["middle-img-src"];

//Main content
const mainContent = document.querySelector(".main-content");
console.log(mainContent);

//Top content
const topContent = document.querySelector(".top-content");
console.log(topContent);

//Text content
const textContent = document.querySelectorAll(".text-content");
console.log(textContent);

const textContentArray = Array.from(textContent);
console.log(textContentArray);

//Text content h4
const textContentH4 = document.querySelectorAll("h4");
console.log(textContentH4);

const h4Array = Array.from(textContentH4);
console.log(h4Array);

textContentH4[0].textContent = siteContent["main-content"]["features-h4"];
textContentH4[1].textContent = siteContent["main-content"]["about-h4"];
textContentH4[2].textContent = siteContent["main-content"]["services-h4"];
textContentH4[3].textContent = siteContent["main-content"]["product-h4"];
textContentH4[4].textContent = siteContent["main-content"]["vision-h4"];

//Text content p
const textContentP = document.querySelectorAll("p");
console.log(textContentP);

const pArray = Array.from(textContentP);
console.log(pArray);

textContentP[0].textContent = siteContent["main-content"]["features-content"];
textContentP[1].textContent = siteContent["main-content"]["about-content"];
textContentP[2].textContent = siteContent["main-content"]["services-content"];
textContentP[3].textContent = siteContent["main-content"]["product-content"];
textContentP[4].textContent = siteContent["main-content"]["vision-content"];
















