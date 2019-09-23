import { shallow } from 'enzyme';
import React from 'react';
import MessageComponent from '../../../js/react/MessageComponent';

describe('test MessageComponent', () => {
    const data = {
        statusMessage: "message"
    }

    const messageComponent = shallow(<MessageComponent statusMessage={data.statusMessage} />);

    it('returns the message sent', () => {
        expect(messageComponent.contains(data.statusMessage)).toBeTruthy();
    });
});