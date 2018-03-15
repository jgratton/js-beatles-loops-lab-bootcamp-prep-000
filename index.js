function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < 4; i++) {
    array[i] = `${musicians[i]} plays ${instruments[i]}.`;
  }
  return array;
}