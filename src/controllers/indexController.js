

module.exports = {
    index: (req, res) => {
        return res.render('index');
    },

    order: (req, res) => {
        res.render('order');
    }, 

    onderFinished: (req, res) => {
        res.render('order-finished')
    }, 

    privacyPolicy: (req, res) => {
        res.render('privacy-policy')
    }
}