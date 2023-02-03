
module.exports = {
    login: (req, res) => {
<<<<<<< HEAD
        return res.render('login', {css: ['style.css', 'login.css'], js: ''})
    }, 

    userPanel: (req, res) => {
        res.render('user-panel', {css: ['style.css', 'user-panel.css'], js: ''});
    }, 

    registrate: (req, res) => {
        res.render('registration', {css: ['style.css', 'registration.css'], js: ''});
=======
        return res.render('login')
>>>>>>> 815320044c41239ed604b605f56f564f1938137a
    }
}