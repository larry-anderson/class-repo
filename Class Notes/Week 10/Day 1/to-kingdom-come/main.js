// 1. Function to append a DOM element to the Arguments <ul>
function addStrike(){
    const firstArgument = document.querySelector("#arguments li");
    if (firstArgument) {
        firstArgument.style.textDecoration = 'line-through'
    }
};
addStrike();

//  3. Create a function that accepts two strings as parameters: one representing a DOM element's `id` and the other a URL. This function should set the source of the image with the specified `id` to the provided URL.

function setImageSource(id, url) {
    const image = document.getElementById(id);
    if (image){
        image.src =url
    }
} 

// 4. Utilize this function to set the source of three images in the Image Area section with images of your choice. You'll need to make three separate calls to this function.

setImageSource('image-1', 'images/candy.jpg');
setImageSource('image-2', 'images/candyAlso.jpg')
setImageSource('image-3', 'images/cassidy tounge out.jpg' )


// 5. Another function that doesn't require any parameters: Develop a function that consistently removes the first `<li>` from the Arguments `<ul>`.

function removeFirstArgument() {
    const firstArgument = document.querySelector('#arguments li');
    if (firstArgument) {
        firstArgument.remove();
    }
}

// 6. Utilize this function to remove the first two items from the list by making two consecutive calls to it.
removeFirstArgument();
removeFirstArgument();



// 7. Create a function that takes two strings as parameters: one representing a font size and the other representing an id. This function should adjust the text size of the element with the specified id to the provided font size.

function setFontSize (fontSize, id) {
    const element = document.getElementById(id);
    if (element) {
        element.style.fontSize = fontSize;
    }
}

// 8. Experiment with this function to modify the text size of any element on the page.

setFontSize('50px','heading');

// 1. Develop a function that accepts a DOM element as a parameter and appends it to the Arguments `<ul>`.

function appendToArguments(element){
    const argumentsList = document.getElementById('arguments');
    if (argumentsList) {
        argumentsList.appendChild(element);
    }
}

// 2. Put this function into action by creating an image element in JavaScript and passing it as a parameter to your function.

    const newImage = document.createElement('img');
    newImage.src = 'images/cassidy tounge out.jpg';
    appendToArguments(newImage);

// 3. Create a function that takes an image element as a parameter and changes its height to 30 pixels.

function changeHeight (imageElement){
    if(imageElement && imageElement.tagName === 'IMG') {
     imageElement.style.height = '100px';   
    }
}

// 4. Implement this function by querying an image element and passing it as a parameter to the function.

const resizeImage = document.getElementById('image-1');
changeHeight(resizeImage);
// 5. Develop a function that accepts an element as a parameter and assigns it the class `invisible`.

function fade(element){
    if(element){
        element.classList.add('invisible');
    }
} 

// 6. Now, query an element on the page and pass it as a parameter to this function. You will observe the element disappearing. (You can check the CSS file to understand how the `invisible` class functions.)

const fadedElement = document.getElementById('heading');
fade(fadedElement);

// 1. Write a function that accepts text as a parameter and returns a new `<li>` with the provided text as its `innerText`.

function newItem(text) {
    const listItem = document.createElement('li');
    listItem.innerText = text;
    return listItem;
}
// 2. Test the function by calling it. Store the returned DOM element in a variable and then append it to the page using your function from Part Two.

const storedItem = newItem('New Text For Element ha ha ha ha!!!!');
appendToArguments(storedItem);

// 3. Create a function that accepts two strings as parameters: one representing a header size and the other some text. This function should return a new header element with the specified size (e.g., a '3' for the first parameter should result in an `<h3>`) containing the provided text.

function createHeader(size, text){
    const header = document.createElement('h' + size);
    header.innerText = text;
    return header;
}

// 4. Test the function by calling it with a header size and some text, storing the return value in a variable, and then appending it to the page using your function from Part Two.

const hv = createHeader(2, 'this way');
appendToArguments(hv);