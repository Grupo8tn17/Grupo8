module.exports = {
    mostraCarrinho: (req, res) => {
        res.render('cart', {css: ['style.css', 'cart.css', 'headerAlternative.css'], js: ["cart.js"]})
    }
}