#pragma strict

var laserSpeed:int;
static var bosshealth:int=50;
var detonator:GameObject;

function Start () 
{
}

function Update () 
{
	transform.Translate(Vector3.up * laserSpeed * Time.deltaTime);
}

function OnTriggerEnter(other:Collider)
{
	
	
	if(other.gameObject.tag=="alien")
	{
		spaceshipController.score++;
		//destroy the alien
		Destroy(other.gameObject);
		Instantiate(detonator, transform.position, Quaternion.identity);
		//destroy the laser
		Destroy(this.gameObject);
		spaceshipController.shotshit++;
		//retreives the variable from the mentioned js
		alienGenerator.aliencount--;
		print(alienGenerator.aliencount);		
		//to start animation
				
	}
	else 
	{
		if(other.gameObject.tag=="boss")
		{
			bosshealth--;
			print("Boss Health:" +bosshealth);
			spaceshipController.score = spaceshipController.score + 5;
			Destroy(this.gameObject);
			spaceshipController.shotshit++;
			/*
			if (bosshealth == 40)
			{
				Instantiate(detonator, transform.position, Quaternion.identity);
			}
			if (bosshealth == 30)
			{
				Instantiate(detonator, transform.position, Quaternion.identity);
			}
			if (bosshealth == 20)
			{
				Instantiate(detonator, transform.position, Quaternion.identity);
			}
			if (bosshealth == 10)
			{
				Instantiate(detonator, transform.position, Quaternion.identity);
			}
			if (bosshealth == 5)
			{
				Instantiate(detonator, transform.position, Quaternion.identity);
			}*/
		}
	}
}

	
function OnBecameInvisible() 
{
	Destroy(this.gameObject);
}


	