const {Selector} = require('testcafe')

function select (selector){
    return Selector(selector).with({boundTestRun:testController})
}

exports.ComputersPage = {
    
    DesktopsTitle: function(){
        return select("a").withText("Desktops")
    },

    NotebookTitle: function(){
        return select("a").withText("Notebooks")
    },

    NotebookTitle: function(){
        return select("a").withText("Software")
    }

}