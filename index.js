// add solution here


function theBeatlesPlay (musicians, instruments) {
  var empty = [];
  for (var counter = 0; counter < musicians.length; counter++) {
    empty.push(`${musicians} plays ${instruments}`);
  }
  return empty;
}