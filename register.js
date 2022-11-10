const button = document.getElementById("submitButton");
const fName = document.getElementById("fName");
const lName = document.getElementById("lName");
const grade = document.getElementById("grade");
const college = document.getElementById("college");
const email = document.getElementById("email");

button.addEventListener("click", function() {
  if(fName.value != false && lName.value != false && college.value != false && grade.value != false && email.value != false){
    confirm("Hooray!!! Thank you for your Submission.");
    location.reload();
  }
  else
  alert("Input is Required!");
});