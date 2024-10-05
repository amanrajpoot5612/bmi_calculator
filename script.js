document.getElementById("btn").addEventListener("click", function() {
	var height_ = document.getElementById('height').value;
	var weight_ = document.getElementById('weight').value;
	var bmi = weight_ / (height_ / 100 * height_ / 100);
	var bmi_ = (bmi.toFixed(2));

	document.getElementById("result").innerHTML = "Your BMI is " + bmi_;
});