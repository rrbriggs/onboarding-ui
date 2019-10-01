import { shallow } from 'enzyme';
import React from 'react';
import TimelineComponent from '../../../js/react/TimelineComponent';
import UserTimelineComponent from '../../../js/react/UserTimelineComponent';
import HomeTimelineComponent from '../../../js/react/HomeTimelineComponent';

jest.mock('../../../js/TimelineReq');

describe('test TimelineComponent', () => {
    const timelineComponent = shallow(< TimelineComponent />);

    it('TimelineComponent renders UserTimelineComp and HomeTimelineComp', () => {
        expect(timelineComponent.containsMatchingElement(<UserTimelineComponent />)).toBeTruthy();
        expect(timelineComponent.containsMatchingElement(<HomeTimelineComponent />)).toBeTruthy();

    });
});