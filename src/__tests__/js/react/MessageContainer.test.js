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

    const messageContainer = shallow(< MessageContainer date={data.date} statusMessage={data.statusMessage} />);

    it('renders without crashing', () => {
        messageContainer;
    });

    it('render contains components', () => {
        expect(messageContainer.contains(<DateComponent date={data.date}></DateComponent>)).toBeTruthy();
        expect(messageContainer.contains(<MessageComponent statusMessage={data.statusMessage} />)).toBeTruthy();
    })
});