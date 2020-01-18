

$("button").click(function() {
	var searchQ = $("#searchQ")[0].value.split(" ").join("+");
	var num = $("#number")[0].value;
	


// gify API
//javascript, jQuery
// original was -->
// var myRequest = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=rlRZi86BD52T3q4elCzQC3kyLMWOLj0b&limit="5);

var myRequest = $.get("http://api.giphy.com/v1/gifs/search?q=" + searchQ + "&api_key=rlRZi86BD52T3q4elCzQC3kyLMWOLj0b&limit=" + num);

myRequest.done(
	function(data) { 
		// console.log("success got data", data);
		for(var i=0; i<data.data.length; i++) {
			var newImg = document.createElement("img");
				newImg.src = data.data[i].images.original.url;
			// leave the 'i' as 0 if not using a 4-loop
				document.body.appendChild(newImg);
					}
				}
			);		
	 })

// myRequest.done(function(){

// })

















// function bookSearch(){
// 	// console.log('this function runs!')
// 	var search = document.getElementById('search').value
// 	document.getElementById('results').innerHTML = ""
// 	console.log(search)

// 	$.ajax({
// 		url: "https://www.googleapis.com/books.v1/volumes?q=" + search,
// 		dataType: "json",
// 		success: function(data){
// 			for(i=0; i< data.items.length; i++){
// 				results.innerHTML += "<h2>" + data.items[i].volumeInfo.title + "</h2>"
				
// 			}
// 			console.log(data)
// 		},

// 			type: 'GET'

// 	});
// }

// document.getElementById('button').addEventListener('click', bookSearch, false)