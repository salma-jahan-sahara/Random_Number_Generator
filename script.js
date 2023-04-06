const number = document.querySelector(".number");
const btn = document.querySelector(".generate");

const generateNumber = () => {
  //generates number between 1 to 10
  const randomNumber = Math.floor(Math.random() * 10 + 1);
  number.innerHTML = randomNumber;
};
btn.addEventListener("click" , generateNumber);
generateNumber();

// const rand = Math.random();
// console.log(rand);
