let katzDeliLine = [];

function takeANumber(currentLineOfPeople, newPersonsName) {
  currentLineOfPeople.push(newPersonsName);
  let theName = (currentLineOfPeople.indexOf(newPersonsName) + 1);
  return `Welcome, ${newPersonsName}. You are number ${theName} in line.`;
}

function nowServing(katzDeliLine) {
  if(katzDeliLine[0] === undefined) {
    return "There is nobody waiting to be served!"
  } else {
    let personInLine = katzDeliLine.shift();
    return `Currently serving ${personInLine}.`;
  }
}

function currentLine(currentLineOfPeople) {
  let newArr = [];
  for(let i = 0; i < currentLineOfPeople.length; i++) {
    if(currentLineOfPeople[i] === undefined){
      return "The line is currently empty.";
    } else {
      newArr.push(`${i + 1}. ${currentLineOfPeople[i]}`);
    }
  }
  return (`The line is currently: ${newArr.splice(0, 0, ',  ')}`);
}
