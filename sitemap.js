function buildMap(placeForList){
    var list = document.createElement('ul');
    list.id = 'list';
    
    makeLink('index.html', 'Home Page', list);
    makeLink('bio.html', 'Biography', list);
    makeLink('404.html', '404 Page', list);
     
    var listItem = document.createElement('li');
    var text = document.createTextNode('Class Projects');
    listItem.appendChild(text);
    list.appendChild(listItem);
    var secondList = document.createElement('ul');
    list.appendChild(secondList);
    
    makeLink('popup.html', 'Popup', secondList);
    makeLink('breakout.html', 'Breakout', secondList);
    makeLink('trail.html', 'Trail', secondList);
    makeLink('changingBg.html', 'Changing Background', secondList);
    makeLink('htmltest.html', 'HTML test', secondList);
    makeLink('todolist.html', 'To Do List', secondList);
    makeLink('chalkboard.html', 'Chalkboard', secondList);
    makeLink('tictactoe.html', 'Tic Tac Toe', secondList);
    makeLink('multiplytable.html', 'Times Table', secondList);
    makeLink('bettertimestable.html', 'Better Times Table', secondList);
   
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


