const form = document.getElementById('addForm');
const songList = document.getElementById('songs');
const filter = document.getElementById('filter');

//Function to add a song (when event listener is triggered)
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

//Function to remove a song (when event listener is triggered)
const removeSong = e => {
    //Makes sure this function only runs when the "delete" button is clicked, not the rest of the list
    if(e.target.classList.contains('delete')){ //Focuses on the delete buttons by targeting one of its classes
        if(confirm('Are you sure you want to delete this song?')) { //A confirmation box will appear for the user to confirm action
            var li = e.target.parentElement; //This sets our li variable to the actual song being removed (the parent of the delete button is the li)
            songList.removeChild(li); //Removes the li from the ul element (songList) by passing in the variable "li" (the song being removed)
        }
    }
}

//Function to filter through songs (when event listener is triggered)
const filterSongs = e => {

}

//Form Submit Event
form.addEventListener('submit', addSong);

//Delete Event
songList.addEventListener('click', removeSong);

//Filter Event
songList.addEventListener('keyup', filterSongs);

