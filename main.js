const form = document.getElementById('addForm');
const songList = document.getElementById('songs');

//Add Song
const addSong = e => {
    e.preventDefault();

    //Get input value
    let newSong = document.getElementById('song').value;

    //Create new <li> element
    let li = document.createElement('li');
    li.className = 'list-group-item';

    //Inserts a child node into <li> element which contains a text node of the input value
    li.appendChild(document.createTextNode(newSong));

    //Create "delete button" element
    let delBtn = document.createElement('button');

    //Add classes to "delete button" element
    delBtn.className = 'btn btn-danger btn-sm float-right delete';

    //Appends text node to "delete button" element
    delBtn.appendChild(document.createTextNode('X'));

    //Appends delete button to the <li> element
    li.appendChild(delBtn);
    
    //Adds song into song list
    songList.appendChild(li);
    

}

//Form Submit Event
form.addEventListener('submit', addSong);


