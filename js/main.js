jQuery(document).ready(function($) {
	$('.side-bar__btn-open').on('click', function(event) {
		event.preventDefault();
		$('.page').toggleClass('side-bar_open');
	});
	
	$('.side-nav__btn-open').on('click', function(event) {
		event.preventDefault();
		$('.page').toggleClass('side-nav_open');
	});

	$('.modal').modal();

	$('.datepicker').pickadate({
	    selectMonths: true, // Creates a dropdown to control month
	    selectYears: 15, // Creates a dropdown of 15 years to control year,
	    today: 'Today',
	    clear: 'Clear',
	    close: 'Ok',
	    closeOnSelect: false // Close upon selecting a date,
	  });

	$('.dropdown-button').dropdown({
	      inDuration: 300,
	      outDuration: 225,
	      constrainWidth: true, // Does not change width of dropdown to that of the activator
	      hover: false, // Activate on hover
	      gutter: 10, // Spacing from edge
	      belowOrigin: false, // Displays dropdown below the button
	      alignment: 'center', // Displays dropdown with edge aligned to the left of button
	      stopPropagation: false // Stops event propagation
	    }
	  );

	$('select').material_select();

	$('.search__btn').on('click', function(event) {
		event.preventDefault();
		$('.tbl-box').fadeOut(0);
	    $('.search-box').fadeIn(300);
	});
	
	$('.search__cansel').on('click', function(event) {
		event.preventDefault();
	    $('.search-box').fadeOut(0);
		$('.tbl-box').fadeIn(300);
	});
	
	$('.mytbl__btn').on('click', function(event) {
		event.preventDefault();
	    $('.mytbl').slideToggle();
	});


});