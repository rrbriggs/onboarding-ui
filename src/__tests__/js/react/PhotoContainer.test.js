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
        expect(photoContainer.find('.photoContainer')).toBeTruthy();
        expect(photoContainer.childAt(0)).toContainEqual(<img src={data.photoURL} className='image' />);
        expect(photoContainer.childAt(1)).toContainEqual(<div className='screenName'>{data.screenName}</div>);
        expect(photoContainer.childAt(2)).toContainEqual(<div className='handle'>{data.userHandle}</div>);
    });
});