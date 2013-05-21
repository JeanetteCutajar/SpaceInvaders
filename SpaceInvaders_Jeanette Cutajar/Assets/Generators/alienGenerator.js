#pragma strict

var alien:Rigidbody;
var rows:int;
var columns:int;
static var aliencount:int;

function generateAliens(rows:int, columns:int)
{
	var ypos = transform.position.y;
	
	transform.position.x = 0;//each swarm starts from 0 for every level
		
	for(var rowscounter = 0; rowscounter<rows; rowscounter++)
	{
		var tempAlien:Rigidbody;
		//repeat for COLUMNS times
		for(var counter=0; counter<columns; counter++)
		{
			//y position of swarm
			//*1.5 is the spacing between each alien
			tempAlien = Instantiate(alien,Vector3(counter*2,ypos-(rowscounter*2.5),1),Quaternion.identity);
			//place this object INSIDE the swarm
			tempAlien.transform.parent = this.transform;
			aliencount++;
		}
	}
}

function Start ()
{
	//create 1 row with 4 columns
	generateAliens(rows,columns);
}
