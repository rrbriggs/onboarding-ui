import { shallow } from 'enzyme';
import React from 'react';
import DateComponent from '../../../js/react/DateComponent';

describe('test DateComponent', () => {
    const data = {
        ogDate: 545319059000
    }

    let epochDate = parseInt(data.ogDate);
    let middate = new Date(epochDate);
    let postDate = middate.toLocaleString('default', {month: 'short'})
        + " " + middate.getDate();   

    const dateComponent = shallow(<DateComponent date={data.ogDate} />);

    it('render returns date component', () => {
        expect(dateComponent.contains(postDate)).toBeTruthy();
    });
});