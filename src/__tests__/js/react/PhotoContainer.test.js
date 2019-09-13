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

    it('renders components', () => {
        expect(photoContainer.find('img').prop('src')).toBe(data.photoURL);
        expect(photoContainer.containsMatchingElement(data.screenName)).toBeTruthy();
        expect(photoContainer.containsMatchingElement(data.userHandle)).toBeTruthy();
    });
});