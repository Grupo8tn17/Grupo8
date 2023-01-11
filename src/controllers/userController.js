
module.exports = {
    login: (req, res) => {
<<<<<<< HEAD
        return res.render('login')
=======
        return res.render('login', {css: ['style.css', 'login.css'], js: ''})
    }, 

    userPanel: (req, res) => {
        res.render('user-panel', {css: ['style.css', 'user-panel.css'], js: ''});
    }, 

    registrate: (req, res) => {
        res.render('registration', {css: ['style.css', 'registration.css'], js: ''});
>>>>>>> dev-danieli
    }
}