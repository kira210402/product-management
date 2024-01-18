const dashboardController = {
    dashboard: (req, res) => {
        res.render("admin/pages/dashboard/index", {
            pageTitle: "Trang tong quan",
            
        });
    }
}

module.exports = dashboardController;