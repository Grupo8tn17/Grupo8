module.exports = {
    mostraCarrinho: (req, res) => {
        res.render('cart', {js: "/javascript/productsCart.js"})
    }
}