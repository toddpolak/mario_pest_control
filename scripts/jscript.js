const baddieForm = document.baddies;

baddieForm.addEventListener('submit', event => {
    event.preventDefault()
    let goombaQty = baddieForm.goombas.value;
    console.log(goombaQty);
});