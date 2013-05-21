#pragma strict

var logo:Texture2D;
var style:GUISkin;

function Start () {
	laserController.bosshealth = 50;
}

function Update () {

}

function OnGUI () {

	GUI.skin = style;
	//a label with an embedded image
	GUI.Label(Rect(0,0,logo.width,logo.height),logo);
	

	if (GUI.Button(Rect(550,300,100,50), "New Game"))
	{
		//Start new game by going to the name scene
		Application.LoadLevel(7);//1
	}
	
	if(GUI.Button(Rect(550,360,100,25),"Help"))
	{
		Application.LoadLevel(8); //10
	}
	
	if(GUI.Button(Rect(550,400,100,25),"Exit"))
	{
		Application.Quit();
	}
}