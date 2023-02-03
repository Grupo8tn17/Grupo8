

module.exports = {
    index: (req, res) => {
<<<<<<< HEAD
        return res.render('index', {css: ['style.css', 'index.css'], js: 'home.js' });
    },

    order: (req, res) => {
        res.render('order', {css: ['style.css', 'order.css'], js: '' });
    }, 

    onderFinished: (req, res) => {
        res.render('order-finished', {css: ['style.css', 'order-finished.css'], js: '' })
    }, 

    privacyPolicy: (req, res) => {
        res.render('privacy-policy', {css: ['style.css', 'privacy-policy.css'], js: '' })
=======
        return res.render('index');
>>>>>>> 815320044c41239ed604b605f56f564f1938137a
    }
}