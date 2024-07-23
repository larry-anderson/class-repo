document.getElementById('btn').addEventListener('click', function() {
  const inputText = document.getElementById('input-text').value;
  const result = checkPalindrome(inputText);
  document.getElementById('result').innerText = result 
    ? `"${inputText}" is a palindrome.` 
    : `"${inputText}" is not a palindrome.`;
});

function checkPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  
  // Reverse the cleaned string
  const reversedStr = cleanedStr.split('').reverse().join('');
  
  // Check if the cleaned string is equal to the reversed string
  return cleanedStr === reversedStr;
}