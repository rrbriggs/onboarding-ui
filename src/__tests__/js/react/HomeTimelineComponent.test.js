import { shallow } from 'enzyme';
import React from 'react';
import HomeTimelineComponent from '../../../js/react/HomeTimelineComponent';
import {timelineReq} from '../../../js/TimelineReq';
import PostFactoryComponent from '../../../js/react/PostFactoryComponent';

jest.mock('../../../js/TimelineReq');



describe('test HomeTimelineComponent', () => {

    timelineReq.mockResolvedValue();

    const homeTimelineComponent = shallow(< HomeTimelineComponent />);

    it('checks for error case', () => {
        expect(homeTimelineComponent.instance().homeTimeline().contains('No data currently available.')).toBeTruthy();
    });

    it('getTimelineButton click executes function that calls timelineReq with parseDataJson as callback', () => {
        homeTimelineComponent
            .find('#getTimelineButton')
            .simulate("click");

        //timelineReq is already called once one mount
        expect(timelineReq).toHaveBeenCalledTimes(2);
    });

    it('getHomeTimelineButton renders data from PostFactoryComponent', () => {
        const fakeData = {
            key: "1",
            postID: "1234",
            date: Date.now().valueOf(),
            statusMessage: "message",
            postStyle: "evenPostBlock",
            socialUser: {
                photoURL: "www.twitter.com",
                screenName: "screen name",
                handle: "handle"
            }
        };

        timelineReq.mockImplementation(() => {
            homeTimelineComponent.instance()
                    .processTimeline([fakeData, fakeData, fakeData, fakeData]);
        });

        homeTimelineComponent.setState({data: fakeData});

        homeTimelineComponent
            .find('#getTimelineButton')
            .simulate("click");

        expect(homeTimelineComponent.containsMatchingElement(<PostFactoryComponent />)).toBeTruthy();
    });
});