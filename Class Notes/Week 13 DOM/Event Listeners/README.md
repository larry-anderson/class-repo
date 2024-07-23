# Lesson: Understanding Event Listeners in JavaScript

**Introduction**
Event listeners are a key part of JavaScript and are essential for creating interactive web pages. They allow you to run specific code in response to user interactions, such as clicks, mouse movements, key presses, and more.

**What is an Event Listener?**
An event listener is a function that waits for a specified event to occur on a particular element. When the event occurs, the event listener executes a callback function.

**Adding Event Listeners**
You can add an event listener to an HTML element using the addEventListener method. The syntax is:
   * element.addEventListener(event, callback);

   * element: The HTML element you want to listen for events on.
   * event: The type of event you want to listen for (e.g., 'click', 'mouseover', 'keydown').
   * callback: The function to execute when the event occurs.


**Removing Event Listeners** 
You can also remove an event listener using the removeEventListener method. The syntax is similar to addEventListener:

    `element.removeEventListener(event, callback);`
    
