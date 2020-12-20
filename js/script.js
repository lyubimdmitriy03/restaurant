// navigation >768
var marker = document.querySelector('#marker');
var item = document.querySelectorAll('ul a');

function indicator(e){
	marker.style.left = e.offsetLeft+"px";
	marker.style.width = e.offsetWidth+"px";
	marker.style.height = '3px';
	marker.style.transition = '0.5s';
	marker.style.transform = 'scale(1.3, 1.3)';
}

item.forEach(link => {
	link.addEventListener('mousemove', (e)=>{
		indicator(e.target);
	})	;
	link.addEventListener('mouseout', function (){
		marker.style.height = '0';
		marker.style.transition = '0.5s';
	})

});

// navigation <768
var marker_2 = document.querySelector('#marker_2');

function indicator_2(e){
	 marker_2.style.top = e.offsetTop+"px";
	 marker_2.style.width = e.offsetWidth+"px";
	marker_2.style.height = '65px';
	marker_2.style.transition = '0.5s';
}

item.forEach(link => {
	link.addEventListener('mousemove', (e)=>{
		indicator_2(e.target);
	})	;
	link.addEventListener('mouseout', function (){
		marker_2.style.height = '0';
		marker_2.style.transition = '0.5s';
	})
});

// hamburger
var hamburger = document.querySelector('#hamburger');
var navbar = document.querySelector('#nav');
hamburger.addEventListener('click', function (){
	navbar.classList.toggle('active');
	hamburger.classList.toggle('open');
});


// close menu
var openMenu = document.querySelector('#openMenu');
var closeMenu = document.querySelector('#closeMenu');
var menuRow = document.querySelector('#menuRow');
var imgDivider = document.querySelector('#imgDivider');

openMenu.addEventListener('click', function (){
	openMenu.style.display = 'none';
	closeMenu.style.display = 'block';
	closeMenu.style.transition = '1.0s ease-out 1.0s';
	menuRow.classList.remove('close');
	menuRow.style.display = 'flex';
	imgDivider.style.display = 'none';
});

closeMenu.addEventListener('click', function (){
	closeMenu.style.display = 'none';
	openMenu.style.display = 'block';
	openMenu.style.transition = '1.0s ease-out 1.0s';
	menuRow.classList.add('close');
	imgDivider.style.display = 'block';
});


window.addEventListener('scroll', function(){
	var scrollMenu = document.getElementById('scrollMenu');
	if(window.pageYOffset || document.documentElement.scrollTop){
		scrollMenu.classList.add('color__menu');
	}
	else{
		scrollMenu.classList.remove('color__menu');
	}
});



// validation
function validationName () {
	var name = document.getElementById('name');
	var nameValue = name.value;
	
	if(nameValue != ''){
		name.style.borderColor = '#50be86'
	}
	else{
		name.style.borderColor = '#c8c6c6'
	}
}

function validationEmail () {
	var email = document.getElementById('email');
	var emailValue = email.value;
	var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
	
	if(emailValue.match(pattern)){
		email.style.borderColor = '#50be86'
	}
	else{
		email.style.borderColor = '#df3433' 
	}

	if(emailValue == ''){
		email.style.borderColor = '#c8c6c6'
	}
}

function validationDate () {
	var date = document.getElementById('date');
	var dateValue = date.value;
	
	if(dateValue != ''){
		date.style.borderColor = '#50be86'
	}
	else{
		date.style.borderColor = '#c8c6c6'
	}
}

function validationParty () {
	var party = document.getElementById('party');
	var partyValue = party.value;
	if(partyValue != ''){
			 party.style.borderColor = '#50be86ff'
		}
		else{
			 party.style.borderColor = '#c8c6c6'
		}
}

// parallax
var ingredients = document.getElementById('ingredients');
ingredients.addEventListener('mousemove', parallax);
function parallax(e){
	this.querySelectorAll('.basil').forEach(basil => {
		const speed = basil.getAttribute('data-speed')

		const x = (window.innerWidth - e.pageX*speed)
		const y = (window.innerHeight - e.pageY*speed)

		basil.style.transform = 'translateX(${x}px translateX(${y}px'
	})
}
