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
        expect(photoContainer.contains(<img src={data.photoURL} className='image' />)).toBeTruthy();
        expect(photoContainer.contains(<div className='screenName'>{data.screenName}</div>)).toBeTruthy();
        expect(photoContainer.contains(<div className='handle'>{data.userHandle}</div>)).toBeTruthy();
    });
});