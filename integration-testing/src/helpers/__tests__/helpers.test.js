import { announceResult, chooseRobotItem } from '../helpers'

describe('Test announceResult function', () => {
  let fakeState;

  beforeEach(() => {
    fakeState = {
      compSelection: null,
      playerSelection: null,
      status: 'Waiting',
      cheating: false
    };
  });
  
  test('returns "Won" if player is "Axe" and comp is "Tree"', () => {
    // let fakeState = {
    //   compSelection: null,
    //   playerSelection: null,
    //   status: 'Waiting',
    //   cheating: false
    // }
    fakeState.playerSelection = 'Axe';//Scissors
    fakeState.compSelection = 'Tree';//Paper
    //From the function announceResult, if the player wins, it should return a string 'Won'
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Won');
  });

  test('returns "Tied" if player is "Axe" and comp is "Axe"', () => {
    // let fakeState = {
    //   compSelection: null,
    //   playerSelection: null,
    //   status: 'Waiting',
    //   cheating: false
    // }
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Axe';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Tied');
  });

  test('returns "Lost" if player is "Axe" and comp is "Moai"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Moai';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Lost');
  });

  test('returns "Waiting" if nothing is passed in', () => {
    expect(announceResult()).toBe('Waiting');
  });
});
//Unit test
describe('chooseRobotItem function', ()=> {
  test('Robot is able to select make a selection', () =>{
    const cheating = false;
    const playerSelection = 'Axe';
    const result = chooseRobotItem(cheating, playerSelection);
    const choices = ['Moai', 'Tree', 'Axe' ];
    expect(choices).toContain(result);
  })
  test('given player choice and cheating is true, return winning choice', () => {
    const cheating = true;

    let playerSelection = "Axe";
    let result = chooseRobotItem(cheating, playerSelection);
    expect(result).toBe('Moai');

    playerSelection = "Moai";
    result = chooseRobotItem(cheating, playerSelection);
    expect(result).toBe('Tree');

    playerSelection = "Tree";
    result = chooseRobotItem(cheating, playerSelection);
    expect(result).toBe('Axe');

  })

  test('given player choice and cheating is false, returns a valid choice', ()=> {
    const cheating = false;
    const playerSelection = 'Axe';

    const result = chooseRobotItem(cheating, playerSelection);
    const choices = ['Moai', 'Tree', 'Axe' ];
    expect(choices).toContain(result);
  })
})
