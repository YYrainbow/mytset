var myVid=document.getElementById("Music");

//

function ToggleMusic(){
	if(myVid.paused){
		$("#MusicToggleButton").html('暂停');
		myVid.play();
	}else{
		$("#MusicToggleButton").html('播放');
		myVid.pause();
	}
}