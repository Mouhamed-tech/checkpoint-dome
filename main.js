var produit = document.getElementsByClassName("box");
for (let i = 0; i < produit.length; i++) {
    let bntPlus = produit[i].children[4].children[2]
    let prixUni = produit[i].children[2].children[1]
    let totalUni = produit[i].children[3].children[1]
    let number = produit[i].children[4].children[1]
    let qty = parseInt(number.innerText)
    let prixUnitaire = parseInt(prixUni.innerText)
    let bntMoins = produit[i].children[4].children[0]
    let buttons = produit[i].children[5].children[0].children[0]
    let tyu = produit[i].children[4].children[1]

    bntPlus.addEventListener('click', function () {
        qty++;
        number.innerText = qty;
        totalUni.innerText = prixUnitaire * qty
    })
    bntMoins.addEventListener("click", function () {
        qty--;
        if (qty < 1) {
            qty = 0
        }
        number.innerText = qty;
        totalUni.innerText = prixUnitaire * qty
    })
    buttons.addEventListener("click", function () {
        if (like.style.color === "red") {
            like.style.color = "black"
        } else {
            like.style.color = "red"
        }
    }) 
    let supprr=box[i]
    console.log(supprr)
    let supr=box[i].children[5].children[1]
    if (supprr) {
         supr.addEventListener("click", function () {
                  supprr.remove();
             })
         }
}
