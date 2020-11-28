/**
 * 
 */





var list = document.querySelector(".imagelist");
var scrollPosition = 0; 
console.log("initial scrollY: " + window.scrollY);

//function that prevents too many scroll events firing
//pass in function, 20 seconds, 
function debounce(func, wait =20, immediate = true ){
	
	var timeout;
	
	//returns a function
	return function(){
		
		//get window object, get arguments object
		var context = this, args = arguments;
		
		//later is a function that sets timeout to null
		var later = function() {
			
			//set timeout to null
			timeout= null; 
			
			//if not immediate
			if(!immediate){
				
				//applying the function to window object and arguments of object
				func.apply(context, args);
			}
		};
		
		//set callNow to true and not null 
		var callNow = immediate && !timeout;
		
		clearTimeout(timeout);
		
		//reset timeout to setTimeout, call later function 20s
		timeout = setTimeout(later, wait);
		
		//if true, apply the func again in window object with these arguments
		if(callNow){
			func.apply(context,args);
			}
		};
};



function scrollImage(e){
	var list = document.querySelector(".imagelist");
	var position = window.getComputedStyle(list).getPropertyValue("top").replace("px","");
	var change = 0; 
	
	//if scrolled past then reset position
	if(window.scrollY >= 901){
		list.style.top = "280px";
	}	
	
	
	
	if(window.scrollY > scrollPosition){

		scrollPosition = window.scrollY;
		
		//set the animation to scroll up
		window.setInterval(function(){
			
			if(change <= 80 && position >= -550){
				position -=2; 
				list.style.top = position + "px"; 
				change++;
			}
		});
	}
	else{
		
		scrollPosition = window.scrollY;
		var number = parseInt(position);
		
		//set the animation to scroll up
		window.setInterval(function(){
			if(change <= 80 && number <500){
				number +=2;  //because you're adding to a string
				list.style.top = number + "px"; 
				change++;
			}
		});
	}
	
	
	

	
	
	
	
}

window.addEventListener("scroll", debounce(scrollImage));