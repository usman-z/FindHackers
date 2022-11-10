const button = document.getElementById("submitButton");
const choiceOne = document.getElementById("stackOne");
const choiceTwo = document.getElementById("stackTwo");


button.addEventListener("click", function() {
  if(choiceOne.checked || choiceTwo.checked){
    confirm("Hooray!!! Thank you for your Submission.");
    location.reload();
  }
  else
  alert("Input is Required!");
});