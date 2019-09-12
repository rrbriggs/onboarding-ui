import { shallow } from 'enzyme';
import React from 'react';
import MessageContainer from '../../../js/react/MessageContainer';
import DateComponent from '../../../js/react/DateComponent';
import MessageComponent from '../../../js/react/MessageComponent';

describe('test MessageContainer', () => {
    const data = {
        date: Date.now().valueOf(),
        statusMessage: "message"
    }

    const messageContainer = shallow(< MessageContainer />);

    it('render contains components', () => {
        expect(messageContainer.containsMatchingElement(<DateComponent />)).toBeTruthy();
        expect(messageContainer.containsMatchingElement(<MessageComponent />)).toBeTruthy();
    })
});