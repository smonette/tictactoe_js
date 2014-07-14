// MIN REQUIREMENTS
// A user should be able to click on different squares to make a move.
// Every click will alternate between marking an X and O
// Upon marking of an individual cell, use javascript to add a class to each cell to display separate colors.
// A cell should not be able able to replayed once marked.
// Add a reset button that will clear the contents of the board.


window.onload = function() {
	var clicks = 1;

	var clickedBox = function(boxNum) {

		if (boxNum.innerHTML === " "){
			if (clicks % 2 === 0) {
				boxNum.innerHTML = "O";
				boxNum.style.color = "#B0B769";
				clicks++;
				display.innerHTML = "It's your turn, Player X";
			} else {
				boxNum.innerHTML = "X";
				boxNum.style.color = "#9F254C";
				clicks++;
				display.innerHTML = "It's your turn, Player O";
			}
		} else {
			display.innerHTML = "This spot has already been played. Please choose again.";
		}

	}
	var display = document.getElementById('message');
	var one = document.getElementById('one');
  	var two = document.getElementById('two');
  	var three = document.getElementById('three');
  	var four = document.getElementById('four');
  	var five = document.getElementById('five');
  	var six = document.getElementById('six');
  	var seven = document.getElementById('seven');
  	var eight = document.getElementById('eight');
  	var nine = document.getElementById('nine');
	var clear = document.getElementById('clear');

	
	one.onclick = function() {
	    clickedBox(one);
	}
	two.onclick = function() {
	    clickedBox(two);
	}
	three.onclick = function() {
	    clickedBox(three);
	}
	four.onclick = function() {
	    clickedBox(four);
	}
	five.onclick = function() {
	    clickedBox(five);
	}
	six.onclick = function() {
	    clickedBox(six);
	}
	seven.onclick = function() {
	    clickedBox(seven);
	}
	eight.onclick = function() {
	    clickedBox(eight);
	}
	nine.onclick = function() {
	    clickedBox(nine);
	}
	clear.onclick = function() {

		one.innerHTML = " ";
		two.innerHTML = " ";
		three.innerHTML = " ";
		four.innerHTML = " ";
		five.innerHTML = " ";
		six.innerHTML = " ";
		seven.innerHTML = " ";
		eight.innerHTML = " ";
		nine.innerHTML = " ";
		display.innerHTML = ("Click to play again!")

	}


} // end window onload