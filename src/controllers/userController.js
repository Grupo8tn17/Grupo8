
module.exports = {
    login: (req, res) => {
        return res.render('login')
    }, 

    userPanel: (req, res) => {
        res.render('user-panel');
    }, 

    registrate: (req, res) => {
        res.render('registration');
    }
}