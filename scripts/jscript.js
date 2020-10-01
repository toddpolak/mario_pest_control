const baddieForm = document.baddies;

baddieForm.addEventListener('submit', event => {
    event.preventDefault()

    let goombaQty = baddieForm.goombas.value;
    let bobombQty = baddieForm.bobombs.value;
    let cheepQty = baddieForm.cheeps.value;
    let lblTotal = document.getElementById('totalCost');
    let total = Number(goombaQty * 5) + Number(bobombQty * 7) + Number(cheepQty * 11);

    lblTotal.innerHTML = `Total Cost: ${total} Coins`;
});