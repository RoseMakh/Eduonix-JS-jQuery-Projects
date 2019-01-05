$(document).ready(function() {
	var x = 'x';
	var o = 'o';
	var turns = 0;

	var spot1 = $('#spot1');
	var spot2 = $('#spot2');
	var spot3 = $('#spot3');
	var spot4 = $('#spot4');
	var spot5 = $('#spot5');
	var spot6 = $('#spot6');
	var spot7 = $('#spot7');
	var spot8 = $('#spot8');
	var spot9 = $('#spot9');
	$('#board li').on('click', function() {
	
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
		
		//check for O row
		if(spot1.hasClass('o')&&
		spot2.hasClass('o')&&
		spot3.hasClass('o') ||
			
		spot4.hasClass('o')&&
		spot5.hasClass('o')&&
			spot6.hasClass('o') ||
				
		spot7.hasClass('o')&&
		spot8.hasClass('o')&&
		spot9.hasClass('o') ||
				
		spot1.hasClass('o')&&
		spot4.hasClass('o')&&
		spot7.hasClass('o') ||
				
		spot2.hasClass('o')&&
		spot5.hasClass('o')&&
		spot8.hasClass('o') ||
				
		spot6.hasClass('o')&&
		spot9.hasClass('o')&&
		spot3.hasClass('o') ||
				
		spot1.hasClass('o')&&
		spot5.hasClass('o')&&
		spot9.hasClass('o') ||
			
		spot7.hasClass('o')&&
		spot5.hasClass('o')&&
		spot3.hasClass('o')
				){
					alert('Winner: O');
					$('#board li').text('+');
					$('#board li').removeClass('disable');
					$('#board li').removeClass('o');
					$('#board li').removeClass('x');
					turns=0;
					console.log('turns after o '+turns);
		//check for X's			
				} else if(spot1.hasClass('x')&&
			spot2.hasClass('x')&&
			spot3.hasClass('x') ||
			
			spot4.hasClass('x')&&
			spot5.hasClass('x')&&
				spot6.hasClass('x') ||
				
			spot7.hasClass('x')&&
			spot8.hasClass('x')&&
				spot9.hasClass('x') ||
				
			spot1.hasClass('x')&&
			spot4.hasClass('x')&&
				spot7.hasClass('x') ||
				
			spot2.hasClass('x')&&
			spot5.hasClass('x')&&
				spot8.hasClass('x') ||
				
			spot6.hasClass('x')&&
			spot9.hasClass('x')&&
				spot3.hasClass('x') ||
				
			spot1.hasClass('x')&&
			spot5.hasClass('x')&&
				spot9.hasClass('x') ||
				
			spot7.hasClass('x')&&
			spot5.hasClass('x')&&
				spot3.hasClass('x')
				){
					alert('Winner: X');
					$('#board li').text('+');
					$('#board li').removeClass('disable');
					$('#board li').removeClass('o');
					$('#board li').removeClass('x');
					turns=0;
					console.log('turns after x '+turns);
				} else if(turns==9){
					alert('Tie Game');
					$('#board li').text('+');
					$('#board li').removeClass('disable');
					$('#board li').removeClass('o');
					$('#board li').removeClass('x');
					turns = 0;
					console.log('turns after tie '+turns);
				} //end tie check
				
	}); //end on click function
	
	//reset handler
	$('#reset').on('click',function(){
		$('#board li').text('+');
		$('#board li').removeClass('disable');
		$('#board li').removeClass('o');
		$('#board li').removeClass('x');
		turns=0;
		
	});//end of reset handler
	
}); //end of code