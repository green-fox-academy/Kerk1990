// Given a string, compute recursively a new string where all the 'x' chars have been removed.

function charChange(text:string) {
  if (text.indexOf('x') === -1) return text;
  
  return charChange(text.replace('x',''));
  
  }
  
  console.log(charChange('xcdsnjfvncxivxvvnisdXXX'));