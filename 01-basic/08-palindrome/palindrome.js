function isPalindrome(word) {

  let formattedStr = word.toLowerCase().replace(/[^a-z0-9]/g, '');
  let reversed = '';

  for(let i = formattedStr.length - 1; i >= 0; i--) {
    reversed += formattedStr[i];
  }

  if (reversed === word) {
    return 'Palindrome';
  }

  return 'Not Palindrome';
}

module.exports = isPalindrome;
