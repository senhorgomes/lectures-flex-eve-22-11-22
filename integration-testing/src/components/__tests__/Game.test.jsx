import React from 'react';
import { render, fireEvent, prettyDOM } from '@testing-library/react'
import Game from '../Game';
//Integration test
describe('Testing for computer selection', () => {
    test('change cheat state when clicking on robot', () => {
        const { getByTestId, container, debug } = render(<Game />);
        console.log(prettyDOM(container))
        debug()
        const robotIcon = getByTestId('robot-icon');
    
        fireEvent.click(robotIcon);
        expect(robotIcon).toHaveClass('cheating');
    
        fireEvent.click(robotIcon)
        expect(robotIcon).not.toHaveClass('cheating');
    
    })
    test('check if the robot can cheat, and beat player', () => {
        const { getByTestId, container, debug } = render(<Game />);
        console.log(prettyDOM(container))
        debug()
        const robotIcon = getByTestId('robot-icon');
        //Activate cheat mode
        fireEvent.click(robotIcon);
        expect(robotIcon).toHaveClass('cheating');
        //Player to make a selection
        const playerSelection = getByTestId('Moai')
        fireEvent.click(playerSelection);
        //Then check header to have Too bad! Better luck next time.
        const loserMessage = getByTestId('game-result');
        expect(loserMessage.innerHTML).toBe('Too bad! Better luck next time.')
    })
});

xit('playing with mock functions', () => {
    const mock = jest.fn();
    let result = mock('foo');

    expect(result).toBeUndefined();
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith('foo');

    const mockTwo = jest.fn(() => 'cats');
    result = mockTwo('dino');

    expect(result).toBe('dogs');
})