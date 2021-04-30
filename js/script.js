var burg = document.getElementById('burger');

burg.onclick = function (){
addmenu();
};

function addmenu(){
    document.getElementById('menu').classList.toggle('show');
    
};

