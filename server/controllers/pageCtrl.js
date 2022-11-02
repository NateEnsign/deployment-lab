const path = require("path")

module.exports = {

    home: (req, res) => {
        res.sendFile(path.join(__dirname, "../../index.html"))
    },

    app.get('/style', (req, res) => {
        res.sendFile(path.join(__dirname, './public/index.html'))
      })
}