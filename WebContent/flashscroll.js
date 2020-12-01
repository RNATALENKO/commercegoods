/**
 * 
 */


var first = document.querySelector(".firstimage");
var second = document.querySelector(".secondimage");
var third = document.querySelector(".thirdimage");
var fourth = document.querySelector(".fourthimage");
var allImages = document.querySelectorAll(".allimages");
var len = allImages.length; 
var allImagesArray = Array.prototype.slice.call(allImages, 0);
var counter = 0;


//set initial display
first.style.display = "block";
second.style.display = "none";
third.style.display = "none";
fourth.style.display = "none";



function switchImages(one, two, three, four){
	
		//alert("inside switch images");
	
		console.log(one.style.display);
	
	
		if(one.style.display =="block"){
			one.style.display = "none"; 
			two.style.display = "block"; 
			three.style.display ="none";
			four.style.display ="none";
		}
		else if(two.style.display == "block"){
			one.style.display = "none";
			two.style.display="none";
			three.style.display ="block";
			four.style.display = "none";
			
		}
		else if(three.style.display =="block"){
			one.style.display = "none";
			two.style.display="none";
			three.style.display ="none";
			four.style.display = "block";
		}
		else if(four.style.display =="block"){
			one.style.display = "block";
			two.style.display="none";
			three.style.display ="none";
			four.style.display = "none";
		}
		
		
	
}
 

var wrapper = function(){
	
	switchImages(first, second, third, fourth);
}

function incrementCounter(){
	
	counter++;
	
	//if counter reaches length execute switching
	if(counter == len){
		window.setInterval(wrapper, 500);
	}
}


//for each image we want to set the load method
allImagesArray.forEach(function(image){
	
	
	if(image.complete){
		incrementCounter();
	}
	else{
		image.addEventListener("load", incrementCounter ,false);
	}
});




//on load we move the shirts slightly up







//on first scroll we make the item description fade in or appear
document.addEventListener("scroll", function(){
	
	var currentY = window.scrollY; 
	var descriptionElement = document.querySelector(".description");
	var position = window.getComputedStyle(descriptionElement).getPropertyValue("left").replace("px","");
	var productContainer = document.querySelector(".productcontainer");
	var productPosition = window.getComputedStyle(productContainer).getPropertyValue("top").replace("px","");
	
	
	//if scroll between 100 and two hundred, otherwise remove listener
	console.log("y:" + currentY);
	
	
	
	//on initial scroll make the entire product window move upward
	
	if(currentY > 0 && currentY < 301){
		
		//move the entire product container up
		window.setInterval(function(){
			
			if(productPosition > 100){
				
				productPosition -= 2;
				productContainer.style.top = productPosition + "px";
			}
			
		},1);
	}
	
	
	//make item description appear if at scroll range
	if(currentY > 301 && currentY < 401){
		
		//alert("scroll moment");
		
		//move the description container until left is 0px; 
		window.setInterval(function(){
			
			if(position > 0){
				
				position -= 9; 
				descriptionElement.style.left = position + "px";
			}
		}, 1);
			
	}
	else{
		document.removeEventListener("scroll",function(){}, true);
	}	
}, false);
















































