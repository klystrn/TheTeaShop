// JavaScript Document


//Get elements from DOM
const menBtn = document.getElementById('menu-btn');
const navbar = document.getElementById('navbar');
const menu = document.querySelector('.menu');

//PX offset when the navbar activates
const offset = 500;

//Add click event to menu button
menBtn.addEventListener("click", () => {
	//Toggle the menu-open class
	menu.classList.toggle('menu-open');
});

//Add scroll event listener to the page
window.addEventListener("scroll", () => {
	//If the page is scrolled by 50px or more
	if (pageYOffset > offset) {
		//Activate navbar
		navbar.classList.add('navbar-active');
	}
	else {
		navbar.classList.remove('navbar-active');
	}
});