import { shallow } from 'enzyme';
import React from 'react';
import PhotoContainer from '../../../js/react/PhotoContainer';

describe('test PhotoContainer', () => {
    const data = {
        photoURL: "www.twitter.com",
        screenName: "screen name",
        userHandle: "handle"
    }

    const photoContainer = shallow(< PhotoContainer photoURL={data.photoURL} screenName={data.screenName} userHandle={data.userHandle}/>);

    it('renders without crashing', () => {
        photoContainer;
    });

    it('renders components', () => {
        expect(photoContainer.containsMatchingElement(<img src={data.photoURL} />)).toBeTruthy();
        expect(photoContainer.containsMatchingElement(<div>{data.screenName}</div>)).toBeTruthy();
        expect(photoContainer.containsMatchingElement(<div>{data.userHandle}</div>)).toBeTruthy();
    });
});