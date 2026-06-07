function sigmoid(x) {
	return 1.0/ (1.0 + Math.exp(-x));
}

let button = document.getElementById("myButton");
const taro = document.getElementById("taro");
const head = document.getElementById("output");

button.addEventListener("click", function() {
	let inputText = document.getElementById("frame").value;
	head.innerText = inputText
	let x = parseFloat(inputText);
	let w = 7.600440;
	let b = -3.611380;
	let y = sigmoid(x*w + b);
	let aiVerd = "";
	if (Math.round(y) == 0) {
		aiVerd = "NEGATIVE";
	}else if (Math.round(y) == 1){
		aiVerd = "POSITIVE";
	}else{
		console.log("GG");
	}
	
	taro.innerText = `TARO SAING: ${aiVerd}`;
});


