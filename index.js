// add solution here
var empty = [];

function theBeatlesPlay (musicians, instruments) {
  for (counter = 0; counter < 4; counter++) {
    empty.push(`${musicians}, " plays ", ${instruments});
  }
  return empty;
}