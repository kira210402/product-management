const homeController = {
    index: (req, res) => {
        res.render("client/pages/home/index", {
            titlePage: "Homepage"
        })
    }
};

module.exports = homeController;