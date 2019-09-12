import { shallow } from 'enzyme';
import React from 'react';
import PostFactoryComponent from '../../../js/react/PostFactoryComponent';
import PhotoContainer from '../../../js/react/PhotoContainer';
import MessageContainer from '../../../js/react/MessageContainer';

describe('test PostFactoryComponent', () => {
    const data = {
        key: "1",
        postID: "1234",
        date: Date.now().valueOf(),
        statusMessage: "message",
        postStyle: "postStyle",
        socialUser: {
            photoURL: "www.twitter.com",
            screenName: "screen name",
            handle: "handle"
        }
    }

    const postFactoryComponent = shallow(< PostFactoryComponent key={data.postID + 1} postID={data.postID} photoURL={data.socialUser.profileImageUrl} screenName={data.socialUser.name} userHandle={data.socialUser.twitterHandle} date={data.createdAt} statusMessage={data.message} postStyle={data.postStyle} />);

    it('renders without crashing', () => {
        postFactoryComponent;
    });

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