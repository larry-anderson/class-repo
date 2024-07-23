// Step 1: Define Possible Answers
const answers = ['yes','no','don\'t hold your breath','deffinately'];



// Step 2: Select HTML Elements
const ballElement = document.getElementById('ball');
const answerElement = document.getElementById('answer');



//Step 3: Generate a Random Answer
const generateAnswer = () => {
    const randomIndex = Math.floor(Math.random() * answers.length)
    return answers[randomIndex];
};


//Step 4: Rotate the Magic 8 Ball
const rotateBall = () => {
    let rotation = Math.floor(Math.random() * 180) + 90;
    const rotateInterval = setInterval( ()=>{
        rotation += Math.floor(Math.random() * 10) + 30;
    ballElement.style.transform = `rotate(${rotation}deg)`;
    if (rotation >= 360){
        clearInterval(rotateInterval);
        setTimeout(() => {
           showAnswer();
           ballElement.style.transform = `rotate(0deg)`;
        }, 1000);
    }
},10) ;
};
    
//Step 5: Display the Answer
const showAnswer = () => {
    const answer = generateAnswer();
    answerElement.textContent = answer; 
};


//Step 6: Add Event Listener to the Ball
ballElement.addEventListener('click', () => {
    answerElement.textContent = '';
    rotateBall();
});