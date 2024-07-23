* * Step 1: Define Possible Answers
* Goal
Create an array to hold all the possible answers the Magic 8 Ball can provide.

* * Step 2: Select HTML Elements
* Goal
Grab the elements from the HTML that we will manipulate.
* * * hint we will need this document.getElementById()
you should have the following variables:
> ballElement that Selects the HTML element with the ID ball.
> answerElement that Selects the HTML element with the ID answer.

* * Step 3: Generate a Random Answer
* Goal
Create a function to pick a random answer from the answers array.
> you should have a function called generateAnswer
that Calculates a random index within the range of the answers array length. And returns the answer at the randomly selected index.

* * Step 4: Rotate the Magic 8 Ball
* Goal
Create a function to simulate the ball rotation before showing an answer.
> you should create a arrow function called rotateBall that 
>>Starts with a random initial rotation between 90 and 270 degrees.
>>Uses setInterval to keep increasing the rotation by a random amount.
>>Once the rotation reaches or exceeds 360 degrees, it stops the interval.
>>Calls showAnswer after a short delay and resets the rotation.

* * Step 5: Display the Answer
* Goal
Create a function to display the generated answer
> create a function Called showAnswer that
>>Calls generateAnswer to get a random answer.
>>Updates the text content of answerElement with the generated answer.


* * Step 6: Add Event Listener to the Ball
* Goal
>>Set up an event listener on the Magic 8 Ball to trigger the rotation and answer generation.
>> Add a click event listener to ballElement.
When the ball is clicked:
Clears the current answer.
Calls rotateBall to start the rotation and eventually display a new answer.

