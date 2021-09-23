const {Selector} = require('testcafe')

function select (selector){
    return Selector(selector).with({boundTestRun:testController})
}

exports.CameraAndPhotoPage = {

    Title: function(){
        return select("h1").withText("Camera & photo")
    }

}