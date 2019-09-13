import { shallow } from 'enzyme';
import React from 'react';
import PostFactoryComponent from '../../../js/react/PostFactoryComponent';
import PhotoContainer from '../../../js/react/PhotoContainer';
import MessageContainer from '../../../js/react/MessageContainer';

describe('test PostFactoryComponent', () => {

    let handle = "handle";
    let ID = "postID"

    const postFactoryComponent = shallow(< PostFactoryComponent />);

    it('render contains components', () => {
        expect(postFactoryComponent.contains(<PhotoContainer />)).toBeTruthy();
        expect(postFactoryComponent.contains(<MessageContainer />)).toBeTruthy();
    });

    it('tests OnClick, should error when attempting to nav away', () => {
        const spy = jest.spyOn(postFactoryComponent.instance(), 'handleClick');
        postFactoryComponent.instance().forceUpdate();
        postFactoryComponent.find('.postStyle').simulate('click');
        expect(spy).toBeCalled();
    });
});