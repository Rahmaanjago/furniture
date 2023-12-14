const sectionOne = document.querySelector('.section_1');
const moveLeft = document.querySelector('.move_left');
const moveRight = document.querySelector('.move_right');
const head = document.querySelector('.head');
const headText = document.querySelector('.head_text');
const navCursor = document.getElementById('nav-cursor');


function myFunction(){
    document.querySelector('.section_1').style.backgroundImage = "url('images/desktop-image-hero-2.jpg')";
    head.innerHTML = 'We are available all across the globe';
    headText.innerHTML = "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
    
};

function myFunctions(){
    sectionOne.style.backgroundImage = "url('images/desktop-image-hero-3.jpg')";
    head.innerHTML = "Manufactured with the best materials";
    headText.innerHTML = "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
};

navCursor.style.pointerEvents = "relative";
navCursor.style.top = "3.7rem"

moveLeft.addEventListener('click' , function(){
    navCursor.style.position = "relative";
    navCursor.style.top = "3.7rem"
});

moveRight.addEventListener('click' , function(){
    navCursor.style.position = "relative";
    navCursor.style.top = "2.4rem"
});

sectionOne.addEventListener('click' , function(){
    sectionOne.style.backgroundImage = "url('images/desktop-image-hero-1.jpg')";
    head.textContent = "Discover innovative ways to decorate";
    headText.textContent = "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love. "
});