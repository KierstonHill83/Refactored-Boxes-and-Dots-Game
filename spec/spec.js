var code = require('../js/main.js');


describe('Switch Turns', function() {
  it('should switch the turns from player 1 to player 2 and back', function() {
    this.currentPlayer = 0;
    expect(switchTurns(0)).toEqual(1);
  });
});
