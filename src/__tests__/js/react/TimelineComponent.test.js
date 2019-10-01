import { shallow } from 'enzyme';
import React from 'react';
import TimelineComponent from '../../../js/react/TimelineComponent';
import {timelineReq} from '../../../js/TimelineReq';
import {userTimelineReq} from '../../../js/TimelineReq';
import PostFactoryComponent from '../../../js/react/PostFactoryComponent';

jest.mock('../../../js/TimelineReq');



describe('test TimelineComponent', () => {

    timelineReq.mockResolvedValue(false);
    userTimelineReq.mockResolvedValue(false);

    const timelineComponent = shallow(< TimelineComponent />);

    it('checks for error case', () => {
        expect(timelineComponent.contains('No data currently available.')).toBeTruthy();
    });

    it('getTimelineButton click executes function that calls timelineReq with parseDataJson as callback', () => {
        timelineComponent
            .find('#getTimelineButton')
            .simulate("click");

        //timelineReq is already called once one mount
        expect(timelineReq).toHaveBeenCalledTimes(2);
    });

    it('getUserTimelineButton click executes function that calls userTimelineReq with parseUserTimeline as callback', () => {
        timelineComponent
            .find('#getUserTimelineButton')
            .simulate("click");

        //timelineReq is already called once one mount
        expect(userTimelineReq).toHaveBeenCalledTimes(2);
    });

    it('getTimelineButton renders data from PostFactoryComponent', () => {
        const data = {
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
        }

        timelineReq.mockImplementation(() => {
            timelineComponent.instance()
                    .parseDataJson(JSON.stringify([data, data, data, data]));
        });

        timelineComponent
            .find('#getTimelineButton')
            .simulate("click");

        expect(timelineComponent.containsMatchingElement(<PostFactoryComponent />)).toBeTruthy();
    });

    it('getUserTimelineButton renders data from PostFactoryComponent', () => {
        const data = {
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
        }

        userTimelineReq.mockImplementation(() => {
            timelineComponent.instance()
                    .parseUserTimeline(JSON.stringify([data, data, data, data]));
        });

        timelineComponent
            .find('#getUserTimelineButton')
            .simulate("click");

        expect(timelineComponent.containsMatchingElement(<PostFactoryComponent />)).toBeTruthy();
    });
});