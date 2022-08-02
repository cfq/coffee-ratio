import '../scss/main.scss';

document.addEventListener('DOMContentLoaded', setup);

function setup(){
    document.querySelector('#water-amount').addEventListener('input', calculate);
    document.querySelector('#coffee-per-litre').addEventListener('input', calculate);
}

function calculate(){
    const waterAmount = document.querySelector('#water-amount').value;
    const coffeePerLitre = document.querySelector('#coffee-per-litre').value;
    const groundWeight = coffeePerLitre * waterAmount / 1000;

    document.querySelector('#ground-weight').value = groundWeight;
    document.querySelector('#bloom-range').value = `${groundWeight * 2}gr to ${groundWeight * 3}gr`;
    document.querySelector('#sixty-percent').value = waterAmount * .6;
    document.querySelector('#forty-percent').value = waterAmount * .4;
}
