#pragma strict

var logo:Texture2D;
var style:GUISkin;

function Start () {

}

function Update () {

}

function OnGUI () {
	
	if(GUI.Button(Rect(220,500,100,25),"Main Menu"))
	{
		Application.LoadLevel(0);
	}

}