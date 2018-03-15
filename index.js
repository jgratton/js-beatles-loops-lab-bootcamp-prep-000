function theBeatlesPlay(musicians, instruments) {
  array = [];
  for (let i = 1; i < 4; i++) {
    array[i] = `${musicians[i]} plays ${instruments[i]}.`;
  }
  return array;
}