#pragma strict

var enemyLaser:Rigidbody;

function Start () {

	var delay:float;
	delay = Random.Range(1.0,3.0); //from 1 sec to 3 secs
	InvokeRepeating("shootLaser",delay,delay); //repeats laser twice (delay*2) 
}

function Update () {

}

function shootLaser(){
	//alien shoots laser in a random position 
	Instantiate(enemyLaser, transform.position, transform.rotation);
}