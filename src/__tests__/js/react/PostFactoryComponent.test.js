import { shallow } from 'enzyme';
import React from 'react';
import PostFactoryComponent from '../../../js/react/PostFactoryComponent';
import PhotoContainer from '../../../js/react/PhotoContainer';
import MessageContainer from '../../../js/react/MessageContainer';

describe('test PostFactoryComponent', () => {

    const postFactoryComponent = shallow(< PostFactoryComponent />);

    it('render contains components', () => {
        expect(postFactoryComponent.contains(<PhotoContainer />)).toBeTruthy();
        expect(postFactoryComponent.contains(<MessageContainer />)).toBeTruthy();
    });

    it('div clicked will error due to navigating away from dom', () => {
        expect(
            postFactoryComponent
                .find('.postStyle')
                .simulate("click"))
            .toBeTruthy();
    });
});