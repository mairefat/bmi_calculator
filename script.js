(function () {
  "use strict";

  let button = document.getElementById("btn");

  button.addEventListener("click", validate_user_inputs);

  function validate_user_inputs() {
    const height = parseInt(document.getElementById("height").value);
    const weight = parseInt(document.getElementById("weight").value);
    const result = document.getElementById("output");
    let height_status = false,
      weight_status = false;

    if (height === "" || isNaN(height) || height <= 0) {
        console.log(height);
      document.getElementById("height_error").innerHTML =
        "Please provide a vaild height";
    } else {
      document.getElementById("height_error").innerHTML = "";
      height_status = true;
    }
    if (weight === "" || isNaN(weight) || weight <= 0) {
        console.log(weight);
      document.getElementById("weight_error").innerHTML =
        "Please provide a vaild weight";
    } else {
      document.getElementById("weight_error").innerHTML = "";
      weight_status = true;
    }
    calculate_bmi(height, weight, height_status, weight_status, result);
    
  }

  function calculate_bmi(height, weight, height_status, weight_status,result) {
    // console.log(height);
    // console.log(weight);
    if (height_status && weight_status) {
      const bmi = (weight / ((height * height) / 10000)).toFixed(2);
      render_result(bmi, result);
    } else {
      alert("Error");
      result.innerHTML = "";
    }
  }

  function render_result(bmi, result) {
    if (bmi < 18.6) {
      return (result.innerHTML = "Under weight : " + bmi);
    } else if (bmi >= 18.6 && bmi < 24.9) {
      return (result.innerHTML = "Normal : " + bmi);
    } else {
      return (result.innerHTML = "Over weight : " + bmi);
    }
  }
})();
