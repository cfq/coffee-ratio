import '../scss/main.scss';

document.addEventListener('DOMContentLoaded', setup);

const ff = new Intl.NumberFormat('en-GB', {
  style: 'decimal',
  maximumFractionDigits: 2,
  useGrouping: false
}).format;

function setup() {
  document.querySelector('#water-amount')?.addEventListener('input', calculate);
  document.querySelector('#coffee-per-litre')?.addEventListener('input', calculate);
  document.querySelector('#ground-weight')?.addEventListener('input', calculate);
}

function calculate( event ) {
  const coffeePerLitreInput = document.querySelector('#coffee-per-litre')?.value;
  const waterAmountInput = document.querySelector('#water-amount')?.value;
  const groundWeightInput = document.querySelector('#ground-weight')?.value;

  let coffeePerLitre = coffeePerLitreInput;
  let waterAmount = waterAmountInput;
  let groundWeight = groundWeightInput;

  if( event.target?.id === 'water-amount' ) {
    groundWeight = waterAmount * coffeePerLitre / 1000;
    document.querySelector('#coffee-per-litre').value = ff(coffeePerLitre);
    document.querySelector('#ground-weight').value = ff(groundWeight);
  }else if ( event.target?.id === 'coffee-per-litre' ){
    groundWeight = waterAmount * coffeePerLitre / 1000;
    document.querySelector('#water-amount').value = ff(waterAmount);
    document.querySelector('#ground-weight').value = ff(groundWeight);
  }else if ( event.target?.id === 'ground-weight' ){
    waterAmount = groundWeight * 1000 / coffeePerLitre;
    document.querySelector('#water-amount').value = ff(waterAmount);
    document.querySelector('#coffee-per-litre').value = ff(coffeePerLitre);
  }else
    return false;

  // console.log({waterAmount, coffeePerLitre, groundWeight});

  document.querySelector('#bloom-range').innerHTML = `${ff(groundWeight * 2)}gr to ${ff(groundWeight * 3)}gr`;
  document.querySelector('#sixty-percent').innerHTML = `${ff(waterAmount * .6)}gr`;
  document.querySelector('#forty-percent').innerHTML = `${ff(waterAmount * .4)}gr`;
  document.querySelector('#ice-weight').innerHTML = `${ff(waterAmount * .4)}gr`;
  document.querySelector('#ice-water-weight').innerHTML = `${ff(waterAmount * .6)}gr`;
  document.querySelector('#iced-grounds-weight').innerHTML = `${ff(groundWeight * (1 + (1/6)))}gr`;
}
