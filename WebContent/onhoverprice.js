/**
 * 
 */


function displayPrice(){
	
	var image = document.querySelector(".image");

	
	image.addEventListener("mouseover", function(){
		
		background.style.display = "block";
		price.style.display = "block";
		
	});
	
	image.addEventListener("mouseleave", function(){
		
		background.style.display = "none";
		price.style.display = "none";
		
		
	});
	
	
	
	
}


