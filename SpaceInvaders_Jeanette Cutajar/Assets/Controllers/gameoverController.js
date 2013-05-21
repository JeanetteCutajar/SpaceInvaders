#pragma strict

var logo:Texture2D;
var style:GUISkin;

function Start () {

}

function Update () {

}

function OnGUI()
{

	GUI.skin = style;
	
	if(GUI.Button(Rect(570,500,100,25),"Main Menu"))
	{
		Application.LoadLevel(0);
	}
}
