#pragma strict
var logo:Texture2D;
var style:GUISkin;
static var username = "Please Enter Name";
var checkname:boolean=false;

function Start()
{
	username= "Please Enter Name";
}

function Update()
{
}

function OnGUI()
{

	GUI.skin = style;
	 
	
	if(checkname == true)
	{
		Application.LoadLevel(1);
		
	} else
	{
	
		GUILayout.BeginArea(Rect (Screen.width/2-100,Screen.height/2-5,200,200));
		username = GUILayout.TextField (username);
		
		if(GUILayout.Button("Start Game "))
		{
				if(username == "Please Enter Name")
				{
					checkname = false;
				}
				else
				{
					checkname = true;
				}
	
		}
		GUILayout.EndArea();
	}	
}
