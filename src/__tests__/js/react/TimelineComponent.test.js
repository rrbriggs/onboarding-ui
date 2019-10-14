import { shallow } from 'enzyme';
import React from 'react';
import TimelineComponent from '../../../js/react/TimelineComponent';
import HomeTimelineComponent from '../../../js/react/HomeTimelineComponent';

jest.mock('../../../js/TimelineReq');

describe('test TimelineComponent', () => {
    const timelineComponent = shallow(< TimelineComponent />);

    it('TimelineComponent renders HomeTimelineComp initially', () => {
        expect(timelineComponent.containsMatchingElement(<HomeTimelineComponent />)).toBeTruthy();

    });
});