
const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Get the selected pizza size
  const sizeInputs = document.querySelectorAll('input[name="size"]');
  let selectedSize = '';
  for (let i = 0; i < sizeInputs.length; i++) {
    if (sizeInputs[i].checked) {
      selectedSize = sizeInputs[i].value;
      break;
    }
  }
  
  // Get the selected number of toppings
  const toppingsSelect = document.querySelector('select[name="toppings"]');
  const selectedToppings = toppingsSelect.value;
  
  // Calculate the pizza price based on the selections
  let pizzaPrice = 0;
  switch (selectedSize) {
    case 'small':
      pizzaPrice += 7.00;
      break;
    case 'medium':
      pizzaPrice += 10.00;
      break;
    case 'large':
      pizzaPrice += 14.00;
      break;
    default:
      break;
  }
  
  switch (selectedToppings) {
    case 'one':
      pizzaPrice += 2.00;
      break;
    case 'two':
      pizzaPrice += 3.00;
      break;
    default:
      break;
  }
  
  // Display the calculated pizza price to the user
  const priceElement = document.createElement('p');
  priceElement.textContent = `Your pizza costs $${pizzaPrice.toFixed(2)}.`;
  form.appendChild(priceElement);
});
