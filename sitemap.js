function buildMap(placeForList){
    var list = document.createElement('ul');
    list.id = 'list';
    
    var home = document.createElement('li');
    var homeLink = document.createElement('a');
    home.appendChild(homeLink);
    list.appendChild(home);
    
    var listPlace = document.getElementById(placeForList);
    listPlace.appendChild(list);
}


