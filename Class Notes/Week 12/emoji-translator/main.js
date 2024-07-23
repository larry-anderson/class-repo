//this file Sets up an event listener for the submit button.
document.getElementById('submit-button').addEventListener('click', function () {
    const input = document.getElementById('translator-input').value;
    const resultElement = document.getElementById('results');
    const selectedOption = document.querySelector('input[name="translation-section"]:checked').value;


    let result;

    switch (selectedOption) {
        case 'encode':
            result = encode(input);
            break;
        case 'translate':
            result = translate(input);
            break;
        case 'madlib':
            result = madlib(input);
            break;
        case 'search':
            const searchResults = search(input);

            resultElement.innerHTML = '';
            if (searchResults.length === 0) {
                resultElement.innerText = 'No emojis found';
            } else {
                searchResults.forEach(emoji => {
                    const p = document.createElement('p');
                    p.innerText = emoji.symbol;
                    resultElement.appendChild(p);
                });
            }
            return;
        case 'random':
            // generate a random index to select a random option from the array.
            const randomIndex = Math.floor(Math.random() * 4)
            const options = ['encode', 'translate', 'madlib', 'search'];
            const randomOption = options[randomIndex];
            //get the radio buttom for the random option as checked

            document.querySelector(`input[value="${randomOption}"]`).checked = true;

            //simulate a click on the submit button to run the function for the random option
            document.getElementById("submit-button").click();
            return;
    }

    // Displays the result in the element

    resultElement.innerHTML = result;
})

