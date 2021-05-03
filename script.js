function ver_mais(){
    if(document.getElementById('ver_mais_hidden').style.display == "none"){
        document.getElementById('ver_mais_hidden').style.display = "block"
        document.getElementById('ver+').innerHTML = "ver menos"
        document.getElementById('seta-cima').style.display = "block"
        document.getElementById('seta-baixo').style.display = "none"
        document.getElementById('options').style.height = "1460px"
        
    }else{
        document.getElementById('ver_mais_hidden').style.display = "none"
        document.getElementById('ver+').innerHTML = "Ver mais"
        document.getElementById('seta-cima').style.display = "none"
        document.getElementById('seta-baixo').style.display = "block"
        document.getElementById('options').style.height = "350px"

    }
}

function mouseoverL() {
    /*document.getElementById('left').style.background = "red"*/
    document.getElementById('left').style.overflowY = "auto"
    
}
function mouseoutL() {
    /*document.getElementById('left').style.background = "green"*/
    document.getElementById('left').style.overflowY = "hidden"
}

function mouseoverR() {
    document.getElementById('right').style.overflowY = "auto"
}
function mouseoutR() {
    document.getElementById('right').style.overflowY = "hidden"
}

function mostrar_left() {
    let left = document.getElementById('left')
    if(left.style.display == "none"){
        left.style.display = "block"
        left.style.width = "100%"
        left.style.background ="white"
        left.style.marginTop = "75px"
        document.getElementById('menuicon').style.top = "60px"
    }else{
        document.getElementById('menuicon').style.top = "44px"
        left.style.display = "none"
        left.style.width = "260px"
        left.style.marginTop = "90px"
    }

}





