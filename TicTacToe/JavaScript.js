 var switch_=0 //Binary switch zreo or one.
 var countMove=0 // count usres moves.
 var ArrayBox=[]; //keep the matrix box.
 
 function init() //initialization. 
 {
	 CreatBoxes();
	 ResetArray();
 }
 
 function ResetArray()//Set defult values in arry.  
 {
	//
    for(var i=0;i<9;i++)
	 {
	    ArrayBox.push(0);
	 }
 }
 
 function CreatBoxes()//craete matrix 3x3 boxes.
 {
	 
	 for(var i=0;i<9;i++)
	 {
	    var box=new MakeBox(i);
	 }
 }
 
 
 function MakeBox(Id)//create box features and events.
 {
	 this.id=Id;
	 var IsClicked=false;
	 
	 
	 var NewDiv=document.createElement("div");
	 NewDiv.className="Box";
	 IdBoxes.appendChild(NewDiv);
	 //NewDiv.innerHTML+=this.id;
	 
	 
	 var BoxImg=document.createElement("img");
	 BoxImg.src="";//init src.
	 
	 
	 NewDiv.appendChild(BoxImg);
	 NewDiv.onclick=function()
	 {
		 if (IsClicked==false)//if not clicked.
		 {
			if (switch_==0)//if is Corona player.
			{
				BoxImg.src="Pictures/CoronaVirus.jpg";
				switch_=1;
				//
				ArrayBox[Id]="Corona";
			}
			else //Is Vaccine player.
			{
				BoxImg.src="Pictures/Vaccine.jpg";
				switch_=0;
				//
				ArrayBox[Id]="Vaccine";
			}
			
			IsClicked=true;
			countMove++
			//
			
			GameLogic();
		 }
	 }
 }
 
 function GameLogic() //The game logic.
 {
	 if((ArrayBox[0]==ArrayBox[1])&&(ArrayBox[1]==ArrayBox[2])&&(!(ArrayBox[0]==0))) //if is same row.
	 {
		 printVicrory(ArrayBox[0]);
	 }
	 else if((ArrayBox[3]==ArrayBox[4])&&(ArrayBox[4]==ArrayBox[5])&&(!(ArrayBox[3]==0)))
	 {
		 printVicrory(ArrayBox[3]);
	 }
	 else if((ArrayBox[6]==ArrayBox[7])&&(ArrayBox[7]==ArrayBox[8])&&(!(ArrayBox[8]==0)))
	 {
		 printVicrory(ArrayBox[8]);
	 }
	 else if((ArrayBox[0]==ArrayBox[3])&&(ArrayBox[3]==ArrayBox[6])&&(!(ArrayBox[6]==0)))
	 {
		 printVicrory(ArrayBox[6]);
	 }
	 else if((ArrayBox[1]==ArrayBox[4])&&(ArrayBox[4]==ArrayBox[7])&&(!(ArrayBox[7]==0)))
	 {
		 printVicrory(ArrayBox[7]);
	 }
	 else if((ArrayBox[2]==ArrayBox[5])&&(ArrayBox[5]==ArrayBox[8])&&(!(ArrayBox[8]==0)))
	 {
		 printVicrory(ArrayBox[8]);
	 }
	 else if((ArrayBox[0]==ArrayBox[4])&&(ArrayBox[4]==ArrayBox[8])&&(!(ArrayBox[8]==0)))
	 {
		 printVicrory(ArrayBox[8]);
	 }
	 else if((ArrayBox[6]==ArrayBox[4])&&(ArrayBox[4]==ArrayBox[2])&&(!(ArrayBox[6]==0)))
	 {
		 printVicrory(ArrayBox[6]);
	 }
	 else if(countMove==9) // if no winner.
	 {
	     alert("Game Over!");
		 location.reload();
	 }
 }
 
 function printVicrory(Winner)//print function.
 {
	 alert("The Winner is: " + Winner);
	 location.reload();
 }
 
 function ResetEvent()// Rest game.
 {
	 location.reload();
 }
