function shout(sString){
  return (sString.toUpperCase());
}

function whisper(sString){
  return (sString.toLowerCase());
}

function logShout(sString){
  return (console.log(sString.toUpperCase()));
}

function logWhisper(sString){
  return (console.log(sString.toLowerCase()));
}

function sayHiToGrandma(sString){
  if (sString === sString.toLowerCase){
    return("I can't hear you!");
  }else if (sString === "I love you, Grandma.") {
    return ("I love you, too.")
  }
  else {
    return ("YES INDEED!");
  }
}
