function buildMap(placeForList){
    var list = document.createElement('ul');
    list.id = 'list';
    makeLink('index.html', 'Home Page', list);
    makeLink('bio.html', 'Biography', list);
    makeLink('popup.html', 'Popup', list);
    makeLink('breakout.html', 'Breakout', list);
    makeLink('trail.html', 'Trail', list);
    makeLink('changingBg.html', 'Changing Background', list);
    makeLink('htmltest.html', 'HTML test', list);
    makeLink('todolist.html', 'To Do List', list);
    makeLink('chalkboard.html', 'Chalkboard', list);
    makeLink('tictactoe.html', 'Tic Tac Toe', list);
    makeLink('multiplytable.html', 'Times Table', list);
    makeLink('bettertimestable.html', 'Better Times Table', list);
    makeLink('404.html', '404 Page', list);
   
    /*var home = document.createElement('li');
    var homeLink = document.createElement('a');
    homeLink.href = 'index.html';
    var homeText = document.createTextNode('Home Page');
    homeLink.appendChild(homeText);
    home.appendChild(homeLink);
    list.appendChild(home);*/
    
    var listPlace = document.getElementById(placeForList);
    listPlace.appendChild(list);    
}

function makeLink(siteLink, siteName, list){
    var listItem = document.createElement('li');
    var link = document.createElement('a');
    link.href = siteLink;
    var text = document.createTextNode(siteName);
    link.appendChild(text);
    listItem.appendChild(link);
    list.appendChild(listItem);
}


