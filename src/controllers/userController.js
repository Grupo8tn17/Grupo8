
module.exports = {
    login: (req, res) => {
        res.render('login', {css: ['style.css', 'login.css'], js: ['login-validation.js']})
    },
    
    userPanel: (req, res) => {
        res.render('user-panel', {css: ['style.css', 'user-panel.css'], js: ''});
    }, 

    registrate: (req, res) => {
        res.render('registration', {css: ['style.css', 'registration.css'], js: ['registration.js']});
    }
}