1.What is jQuery and why is it used in web development?

The purpose of jQuery is to make it much easier to use JavaScript on your website.

2.How do you include jQuery in an HTML document?

Script tag

3.What is the basic syntax of a jQuery selector?

$()

4.How do you handle events in jQuery? Provide an example of a click event.

.click(){}

5.How can you hide and show an element using jQuery?

.hide .show .toggle

6.Explain the difference between $(document).ready() and $(window).load().

$(document).ready() runs the specified function as soon as the DOM is fully loaded, regardless of whether all images and other resources have finished loading. $(window).load(), on the other hand, runs the specified function only after the entire page, including all images and resources, has finished loading.

7.How do you add or remove a class from an element using jQuery?

.add .remove

8.What is the purpose of the each function in jQuery? Provide an example.

$(document).ready(function() {
    $('li').each(function(index) {
        $(this).text('Item ' + (index + 1));
    });
});

9.How do you perform an AJAX request using jQuery? Provide a basic example.



10.What are jQuery plugins and how do you use them? Provide an example of how to include and use a jQuery plugin.