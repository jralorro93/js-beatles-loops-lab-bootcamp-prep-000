// add solution here


function theBeatlesPlay (musicians, instruments) {
  var empty = [];
  for (var counter = 0; counter < musicians.length; counter++) {
    empty.push(`${musicians[counter]} plays ${instruments[counter]}`);
  }
  return empty;
}

function johnLennonFacts (facts) {
  var empty = [];
  var i = 0;
  while (i < facts.length) {
    console.log(countdown--);
    empty.push(`${facts[i]}! ! !`);
  }
  return empty;
}