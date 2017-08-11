console.log('main.js loaded');


//Test AJAX request to api

let ajaxURL1 = "https://api.nasa.gov/planetary/apod?api_key=KiqMnm8KWIKLRXhNRYMoSUDh5py9c9DQSjcnzeoz&date=2017-01-01"
let ajaxURL2 = "https://api.nasa.gov/planetary/apod?api_key=KiqMnm8KWIKLRXhNRYMoSUDh5py9c9DQSjcnzeoz&date=2017-01-02"
let ajaxURL3 = "https://api.nasa.gov/planetary/apod?api_key=KiqMnm8KWIKLRXhNRYMoSUDh5py9c9DQSjcnzeoz&date=2017-01-03"
let ajaxURL4 = "https://api.nasa.gov/planetary/apod?api_key=KiqMnm8KWIKLRXhNRYMoSUDh5py9c9DQSjcnzeoz&date=2017-01-04"
let ajaxURL5 = "https://api.nasa.gov/planetary/apod?api_key=KiqMnm8KWIKLRXhNRYMoSUDh5py9c9DQSjcnzeoz&date=2017-01-05"

let urlArray = [ajaxURL1, ajaxURL2, ajaxURL3, ajaxURL4, ajaxURL5];



let getImageData = function (urlToUse){ 


	return new Promise ((resolve, reject) => {

		$.ajax({
			url: urlToUse,
			type: "GET",
			dataType: "json",
		})
		.done(function(data, textStatus, jqXHR){
			// console.log("ajax 'done' was run and sucessful");
			// console.log("AJAX data: ", data);
			// console.log("AJAX textStatus: ", textStatus);
			// console.log("jqXHR: ", jqXHR);
			resolve(data);
		})
		.fail(function (xhr, status, errorThrown){
			// console.error(".fail ran, somthing went wrong");
			// console.log("ajax error: ", errorThrown);
			// console.log("ajax status: ", status);
			// console.log("ajax full xhr: ", xhr);
			reject(console.log(errorThrown));
		});

	})
}

// getImageData(ajaxURL1).then((resolve) => console.log(resolve));

// Make array of promises for my promise.all
let promiseArray = [];
for(i = 0; i < urlArray.length; i++) {
promiseArray.push(getImageData(urlArray[i]));
};
// console.log("promiseArray", promiseArray);



Promise.all(promiseArray).then((resolve) => {
	// console.log("resolve", resolve)
	var bigData = resolve;
	// console.log("bigData", bigData)
});




