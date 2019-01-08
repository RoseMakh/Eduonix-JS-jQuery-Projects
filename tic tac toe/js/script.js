//Re-wrote the code with functions to increase stability and readability, in keeping with D.R.Y. principle - Don't Repeat Yourself.

$(document).ready(function() {
	
	//assign x or o classes
	var x = 'x';
	var o = 'o';
	
	//track number of turns to determine if tie game
	var turns = 0;
	
	//array of winning spot combos
	var winArray = [
		[1,2,3],
		[4,5,6],
		[7,8,9],
		[1,4,7],
		[2,5,8],
		[6,3,9],
		[1,5,9],
		[3,5,7]
	];
	
	//builds the spot ids on-the-fly
	var currentSpot;
	
	//checks if the right number of spots match
	var spotMatch = 0;
	
	//sets number of required spot matches
	var winNum = 3;
	
	//*****************REUSABLE FUNCTIONS************
	
	//check for winning combo
	function winCheck(pSymbol) {
		
		//outer loop through winArray
		for(i=0;i<winArray.length;i++){

			 for(j=0;j<winArray[i].length;j++){

				//create the spot id to check
				currentSpot = String('#spot'+winArray[i][j]);

				if ($(currentSpot).hasClass(pSymbol)) {

						spotMatch++;
					
						if (spotMatch == winNum) {

							return true;
						}//end spotmatch 
						
				} //end if hasClass
				else {
						spotMatch = 0;
						break;
						}
				
			} //end inner for loop
			
		}//end of outer loop
		return false;
		
	} //end of winCheck
	
	function winAlert(pSymbol){
		alert(pSymbol);
		$('#board li').text('+');
		$('#board li').removeClass('disable');
		$('#board li').removeClass('o');
		$('#board li').removeClass('x');
		turns=0;
	} //end of winAlert
	
	
	//*************END REUSABLE FUNCTIONS**********
	
	
	//run this when a spot is clicked
	$('#board li').on('click', function() {
	
	//alert if spot has already been clicked
	if($(this).hasClass('disable')){
		alert('This spot is already filled');
		
	//change to O on even turns
		} else if(turns%2 == 0) {
					turns++;
					$(this).text(o);
					$(this).addClass('disable o');
	//change to X on odd turns
		} else {
				turns++;
				$(this).text(x);
				$(this).addClass('disable x');
		}
		
		//check for O's
		if(winCheck('o')){
					//alert if O is winner
					winAlert('Winner: O');
					
			
				} //end o check
		
				//if O isn't the winner, check for X's				
				else if(winCheck('x')){
					
					//alert if X is winner
					winAlert('Winner: X');
				}//end x check
				
				//alert if Tie Game
				else if(turns==9){
					winAlert('Tie Game');
					
				} //end tie check
				
	}); //end on click function
	
	//reset handler
	$('#reset').on('click',function(){
		winAlert('Game Reset');		
	});//end of reset handler
	
}); //end of code
