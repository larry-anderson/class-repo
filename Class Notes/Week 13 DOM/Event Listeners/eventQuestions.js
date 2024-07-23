// Practice Questions
// Basic Click Event

// 1.Create a button. When the button is clicked, log a message to the console.
// Changing Text Content

const button1 = document.getElementById("clickBtn");

button1.addEventListener("click", () => {
    console.log("Quit pushing my buttons.")
})

// 2.Create a button and a paragraph. When the button is clicked, change the text content of the paragraph.
// Mouseover and Mouseout Events

const button2 = document.getElementById('changeTextBtn');
const paragraph = document.getElementById('myParagraph');

button2.addEventListener('click', () => {
    paragraph.textContent = 'This text has been changed.'
});




// 3.Create a div with a specific background color. When the mouse hovers over the div, change the background color. When the mouse moves out, revert the background color.
// Mouseover and Mouseout Events


const hover = document.getElementById('hoverDiv');
hover.addEventListener('mouseover', () => {
    hover.style.backgroundColor = 'magenta'
});
hover.addEventListener("mouseout", () => {
    hover.style.backgroundColor = 'lightblue';
});

// 4.Create an input field. When a key is pressed while the input field is focused, log the key pressed to the console.
// Form Submit Event

const pressed = document.getElementById('myInput');
pressed.addEventListener('keydown', (event) => {
    console.log(`key pressed: ${event.key}`);
});


// 5.Create a form with an input field and a submit button. When the form is submitted, prevent the default form submission and log the input value to the console.
// Event Delegation

const form = document.getElementById('myForm');
form.addEventListener('submit', (event) => {
    event.preventDefault();  // Prevent the default form submission
    const input5 = document.getElementById('myInput5');
    console.log(`Form submitted: ${input5.value}`);  // Log the input value
});


// 6.Create a list of items dynamically. Add a click event listener to the list container to log the text of the clicked item using event delegation.
// Click Event

const dynamically = document.getElementById('itemList')
dynamically.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        console.log(`Item clicked: ${event.target.textContent}`);
    }
});

// 7.Create a button. When the button is double-clicked, change its text to "Double-clicked!".
// Removing Event Listeners

const change = document.getElementById('dblClickBtn');
change.addEventListener('dblclick', () => {
    change.textContent = 'Double Clicked';
});


// 8.Create a button and a function that logs a message to the console. Add the click event listener to the button. Add another button that removes the click event listener from the first button when clicked.
// click event

const clickBtn = document.getElementById('clickBtn');
const removeBtn = document.getElementById('removeBtn');

const handleClick = () => {
    console.log('Button was clicked');
};

clickBtn.addEventListener('click', handleClick());
removeBtn.addEventListener('click', () => {
    clickBtn.removeEventListener('click', handleClick);
    console.log('Click event listener removed');
});


// 9.Create a button and a div. When the button is clicked, toggle a class on the div that changes its background color.
// click event
const button9 = document.getElementById('toggleBtn');
const div9 = document.getElementById('myDiv');

button9.addEventListener('click', () => {
    div9.classList.toggle('highlight');
});



// 10.Create a div. Add a click event listener that logs the coordinates of the click relative to the viewport and the div itself. -->
// click event takes event as a parameter

const clickableDiv = document.getElementById('clickDiv');

clickableDiv.addEventListener('click', (event) => {

    const viewportX = event.clientX;
    const viewportY = event.clientY;

    const divX = event.offsetX;
    const divY = event.offsetY;

    console.log(`Viewport Coordinates: (${viewportX}, ${viewportY})`);
    console.log(`Div Coordinates: (${divX}, ${divY})`);
});