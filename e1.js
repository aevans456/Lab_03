
//Audrey Evans
// 2/15/16
// my first javascript i guess

function myFunc()
{
	var pass1 =document.getElementByName(p1).value;
	var pass2 = document.getElementByName(p2).value;
	
	alert("test");
	if(pass1 == pass2)
	{
		if(pass1 <=8)
		{
				alert("password not long enough");
		}
		else 
		{
			alert("passwords match!");
		}
				
		
	}
	else 
	{
		alert("passwords do not match");
	}
	
		
	
	//alert(p1);
}



//https://wiki.ittc.ku.edu/ittc_wiki/index.php/EECS448:Lab3
//file:///home/aevans/EECS_448/Lab_03/Lab_03/excersize1.html
