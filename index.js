$(document).ready(myApp)


function myApp() {

    // carrega a página inival.
    loadpage('homb')
}

// Carrega uma página
function loadpage(page) {

// Monta os caminhos para os componenetes da página solicitada.//
const path = {
    html: `/pages/${page}/index.html`,
    css: `/pages/${page}/index.css`,
    js: `/pages/${page}/index.js`

}

$.get(path)
        .done((data) => {
            $('main').html(data)
        })
        .fail((error) => {
            loadpage('e404')
        })


}