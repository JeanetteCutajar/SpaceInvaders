#pragma strict

var logo:Texture2D;
var style:GUISkin;

function Start () {

}

function Update () {

}

function OnGUI () {
	
	if(GUI.Button(Rect(Screen.width/2-10,450,100,25),"Main Menu"))
	{
		Application.LoadLevel(0);
	}

}