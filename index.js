// add solution here


function theBeatlesPlay (musicians, instruments) {
  var empty = [];
  for (var counter = 0; counter < 4; counter++) {
    empty.push(`${musicians} plays ${instruments}`);
  }
  return empty;
}