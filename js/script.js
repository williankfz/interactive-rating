const numbers = document.querySelectorAll(".rating-number span");
const submitButton = document.querySelector(".button");
const rating = document.querySelector(".rating");
const finalResult = document.querySelector(".final-result");
const textResult = document.querySelector(".final-result span");

function getNumber(e){
  e.preventDefault();
  numbers.forEach((active) =>{
    active.classList.remove("active");
  });
  this.classList.add("active");
  const numberSelected = this.innerHTML;
  textResult.innerHTML = `You selected ${numberSelected} out of 5`;
}

function submit(e){
  e.preventDefault();
  rating.style.display="none";
  finalResult.style.display="block"; 
}

numbers.forEach((item) =>{
  item.addEventListener("click", getNumber);
});

submitButton.addEventListener("click", submit);