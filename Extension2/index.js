let maxValue = Infinity;
let store = Redux.createStore(reducer);
let counter = store.getState();
let steps = 1;

const h1 = document.querySelector("h1");
h1.innerHTML = counter;

const increment = document.querySelector(".increment");
const decrement = document.querySelector(".decrement");
const reset = document.querySelector(".reset");

const five = document.querySelector(".five");
const ten = document.querySelector(".ten");
const fifteen = document.querySelector(".fifteen");

const value1 = document.querySelector(".value1");
const value2 = document.querySelector(".value2");
const value3 = document.querySelector(".value3");

//Event Listeners
value1.addEventListener("click", () => {
  maxValue = 15;
});

value2.addEventListener("click", () => {
  maxValue = 100;
});

value3.addEventListener("click", () => {
  maxValue = 200;
});

five.addEventListener("click", () => {
  steps = 5;
});

ten.addEventListener("click", () => {
  steps = 10;
});

fifteen.addEventListener("click", () => {
  steps = 15;
});

increment.addEventListener("click", () => {
  store.dispatch({ type: "increment", step: steps, maxValue });
});

decrement.addEventListener("click", () => {
  store.dispatch({ type: "decrement", step: steps, maxValue });
});

reset.addEventListener("click", () => {
  store.dispatch({ type: "reset" });
});

store.subscribe(() => {
  counter = store.getState();
  h1.innerText = counter;
});

//Reducer function
function reducer(prevState = 0, action) {
  switch (action.type) {
    case "increment":
      return prevState + action.step <= action.maxValue
        ? prevState + action.step
        : prevState;
      break;
    case "decrement":
      return prevState - action.step;
      break;
    case "reset":
      return 0;
      break;

    default:
      return prevState;
      break;
  }
}
