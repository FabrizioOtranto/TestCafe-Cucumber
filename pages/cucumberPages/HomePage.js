const {Selector} = require('testcafe')

function select (selector){
    return Selector(selector).with({boundTestRun:testController})
}

exports.HomePage = {
    SubTitle: function(){
        return select("h2").withText("Welcome to our store")
    },

    ComputersNavLink: function(){
        return select("a").withText("Computers").nth(0)
    },

    DesktopNavLink: function(){
        return select("a").withText("Desktops").nth(0)
    },

    NotebookNavLink: function(){
        return select("a").withText("Noteooks").nth(0)
    },

    SoftwareNavLink: function(){
        return select("a").withText("Software").nth(0)
    },

    ElectronicsNavLink: function(){
        return select("a").withText("Electronic").nth(0)
    },

    ElectronicsNavLink: function(){
        return select("a").withText("Electronic").nth(0)
    },

    CameraAndPhotoNavLink: function(){
        return select("a").withText("Camera & photo").nth(0)
    },

    CellPhoneLink: function(){
        return select("a").withText("Cell phones").nth(0)
    },

    OthersNavLink: function(){
        return select("a").withText("Others").nth(0)
    },

    
    ApparelNavLink: function(){
        return select("a").withText("Apparel").nth(0)
    },

    
    ShoesNavLink: function(){
        return select("a").withText("Shoes").nth(0)
    },

    
    ClothingNavLink: function(){
        return select("a").withText("Clothing").nth(0)
    },

    
    AccesoriesNavLink: function(){
        return select("a").withText("Accesories").nth(0)
    },
    
    DigitalDownloadNavLink: function(){
        return select("a").withText("Digital downloads").nth(0)
    },

    BooksNavLink: function(){
        return select("a").withText("Books").nth(0)
    },
    
    JewelryNavLink: function(){
        return select("a").withText("Jewelry").nth(0)
    },

    GiftCardsNavLink: function(){
        return select("a").withText("Gift Cards").nth(0)
    },

    Logout: function(){
        return select("a").withText("Log out")
    },

    ShopingCartLink: function(){
        return select("a").withText("Shopping cart").nth(1)
    }
}