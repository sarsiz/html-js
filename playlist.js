window.onload = init;

function init(){
	var button = document.getElementById("addButton");
	button.onclick = handleButtonClick;
	loadPlaylist();
}

function handleButtonClick(){
	var textInput = document.getElementById("songTextInput");
	var songName = textInput.value;
	
	//first create the new element li where the song name is goin to go
	var li = document.createElement("li");
	li.innerHTML = songName;

	var ul = document.getElementById("playlist");
	ul.appendChild(li);

	save(songName);

	if(songName == ""){
		alert("Please enter a song");
	} else{
		alert("Adding " + songName);
	}
	

}