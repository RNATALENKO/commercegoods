


imageOne = document.querySelector(".imageone"); 
imageTwo = document.querySelector(".imagetwo");
imageThree = document.querySelector(".imagethree");
imageFour = document.querySelector(".imagefour");

console.log(imageOne);
console.log(imageOne.style.display);


//get the images and get length of array, set counter
var imgcoll = document.images; //get image collection
var imgs = Array.prototype.slice.call(imgcoll, 0); //coll to array
var len = imgs.length; 
var counter = 0; 




//increases counter, executes on and off display
function incrementCounter(){
	counter++;
	
	//if counter reaches length execute switching
	if(counter == len){
		window.setInterval(setTwo, 500);
	}
}

//for each img check, if img completed loading, increase counter, lastly if each img loaded execute setinterval
imgs.forEach(function(img){
	
	//if image loaded, increment counter
	if(img.complete){
		incrementCounter();
	}
	else{
		img.addEventListener("load", incrementCounter, false);
	}
});


//switch z-indexes of two images
function switchImage(elementone, elementtwo){
	
	console.log(elementone.style.display);
	
	if(elementone.style.display =="block"){
		elementone.style.display = "none"; 
		elementtwo.style.display = "block"; 
	}
	else{
		elementone.style.display = "block"; 
		elementtwo.style.display = "none"; 
	}
}


//perform on second set
var setTwo = function(){
	switchImage(imageOne,imageTwo);
	switchImage(imageThree,imageFour);
}



