// code your solution here

function saturdayFun(sat = 'roller-skate') {
    return 'This Saturday, I want to ' + sat + '!';
}

function mondayWork(mon = 'go to the office') { 
    return 'This Monday, I will ' + mon + '.'; 
}

// function wrapAdjective(emph, adjective) {
//     if(emp === '*'){
//     return '*' + adjective + '*';
//     } else {
//         return  '||' + adjective + '||';
//     }
// }

function wrapAdjective(emp = '*', msg = "You are ") {
    const innerFunction = function ( adj = "special") {
      return `${msg}${emp}${adj}${emp}!`;
    };
    return innerFunction;
  }