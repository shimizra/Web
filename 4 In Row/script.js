var turn = true;
var matrix = [[],[],[],[],[],[],[]];
 

function nextMove(index)
{	
	if (matrix[index-1].length == 6)
	{
		alert("מהלך לא חוקי!");
		return;
	}
	if (turn == true)
	{
		document.getElementById("header").innerHTML = "תור שחקן 2";
		document.getElementById("header").style.color="brown";
		turn = false;
		matrix[index-1].push(1);
		var div_id = "d" + String(matrix[index-1].length + String(index));
		document.getElementById(div_id).style.backgroundImage = "url('y.png')";
		win(1);
	}
	else
	{
		document.getElementById("header").innerHTML = "תור שחקן 1";
		document.getElementById("header").style.color="orange";
		turn = true;
		matrix[index-1].push(0);
		var div_id = "d" + String(matrix[index-1].length + String(index));
		document.getElementById(div_id).style.backgroundImage = "url('x.png')";
		win(0);
	}
}

function win(player)
{
	// vertical
	for(let i = 0; i < 7; i++)
	{
		vertical = 0;
		for(let j = 0; j < 6; j++)
		{
			if (matrix[i][j] == player)
			{
				vertical++;
				if(vertical == 4)
				{
					disableButtons(player);
					break;
				}
			}
			else
			{
				vertical = 0;
			}
		}
	}
	// horizontal
	for(let i = 0; i < 6; i++)
	{
		horizontal = 0;
		for(let j = 0; j < 7; j++)
		{
			if (matrix[j][i] == player)
			{
				horizontal++;
				if(horizontal == 4)
				{
					disableButtons(player);
					break;
				}
			}
			else
			{
				horizontal = 0;
			}
		}
	}		
	// diagonal right
	for(let k = 0; k < 3; k++)
	{
		for(let i = 0; i < 4; i++)
		{
			diagonalRight=0;
			for(let j = 0; j < 4; j++)
			{
				if (matrix[j + i][j + k] == player)
				{
					diagonalRight++;
					if(diagonalRight == 4)
					{
						disableButtons(player);
						break;
					}
				}
				else
				{
					diagonalRight = 0;
				}
			}
		}
	}	
	
	// diagonal left
	for(let k = 0; k < 3; k++)
	{
		for(let i = 0; i < 4; i++)
		{
			diagonalLeft=0;
			count = 0;
			for(let j = 6; j >= 3; j--)
			{
				if (matrix[j - i][count + k] == player)
				{
					diagonalLeft++;
					if(diagonalLeft == 4)
					{
						disableButtons(player);
						break;
					}
				}
				else
				{
					diagonalLeft = 0;
				}
				count ++;
			}
		}
	}	
}

function disableButtons(winner)
{
	var collection = document.getElementsByClassName("buttons_down");
	for (let i = 0; i < 7; i++) 
	{
		collection[i].style.pointerEvents = 'none';
		collection[i].style.backgroundImage = "url('noEntry.png')"
		if(winner == 0)
		{
			winner += 2;
		}
		document.getElementById("header").style.color = "red";
		document.getElementById("header").innerHTML = "<b>המנצח הוא שחקן מספר: " + winner + "</b>";
	}
}