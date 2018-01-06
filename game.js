document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize Game
    initGame();

    function initGame() {
        // Find all divs in .board - they are our clieckable fields.
		var fields = document.querySelectorAll('.board > div');

        // For each field add function that will run when we click it.
		fields.forEach(field => field.addEventListener('click', fieldClickHandler));	
	}

	function fieldClickHandler() {
        // Log Hello in console
        console.log("Hello", this);
    }
});


/* 
    Concepts introduced:
    - function 
    - events
    - event handlers
*/