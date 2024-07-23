// 1.Select all paragraphs in an HTML document and change their text color to blue.

$('p').css('color','blue');


// 2.Write a jQuery function to hide a div with the id "content" when a button with the id "hideButton" is clicked.

$('#hideButton').click(function(){
    $('#content').hide()
});


// 3.Using jQuery, add the class "highlight" to all list items (<li>) when a button with the id "highlightButton" is clicked.

$('#highlightButton').click(function(){
    $('li').addClass('highlight')
});



// 4.Write a jQuery function to toggle the visibility of an element with the id "menu" when a button with the id "toggleButton" is clicked.

$('#toggleButton').click(function(){
    $('#menu').toggle();
});



// 5.Create a jQuery function to fade out an image with the class "fadeImage" over 2 seconds when it is clicked.

$('.fadeImage').click(function(){
    $(this).fadeOut(2000);
});



// 6.Using jQuery, append a new <li> element with the text "New Item" to an unordered list with the id "myList".


    $('#addButton').click(function(){
        $('#myList').append('<li>New Item</li>');
});



// 7.Write a jQuery function to perform an AJAX GET request to "https://jsonplaceholder.typicode.com/posts" and log the response to the console.

$('#ajaxButton').click(function(){
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts",
        type: 'GET',
        success: function(response){
            console.log(response);
        },
        error: function(xhr, status, error){
            console.log(error);
        }
    });
});



// 8.Using jQuery, change the background color of an input field to yellow when it gains focus and revert it to white when it loses focus.


$('input').focus(function(){
    $(this).css('background-color','yellow');

}).blur(function(){
    $(this).css('background-color','white');
});

// 9.Create a jQuery function to animate a div with the id "box" to move 100 pixels to the right and 50 pixels down over 1 second when a button with the id "animateButton" is clicked.

$('#animateButton').click(function(){
    $('#box').animate({
        left: '100px', 
        top:'50px'},
        1000);
});


// 10.Using jQuery, write a function to remove all elements with the class "removeMe" from the DOM when a button with the id "removeButton" is clicked.

$('#removeButton').click(function(){
    $('.removeMe').remove();
});
        