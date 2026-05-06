const getHomepage = (req, res) => {
    //process data from database
    //call model 
    res.send("I'm coming home!")
}
const getAboutPage = (req, res) => {
    res.send("This is the about page")
}
const getSamplejs = (req, res) => {
    res.render('sample.ejs')
}
module.exports = {
    getHomepage,
    getAboutPage,
    getSamplejs
}
//Mo hinh router.Method('/route', handler)
// -> file nay chinh la khai bao cac handler xu ly