import { shallow } from 'enzyme';
import React from 'react';
import UserTimelineComponent from '../../../js/react/UserTimelineComponent'
import {userTimelineReq} from '../../../js/TimelineReq';
import PostFactoryComponent from '../../../js/react/PostFactoryComponent';

jest.mock('../../../js/TimelineReq');



describe('test HomeTimelineComponent', () => {

    userTimelineReq.mockRejectedValue();

    const userTimelineComponent = shallow(< UserTimelineComponent />);

    it('checks for error case', () => {
        expect(userTimelineComponent.contains('No tweets are available, post a tweet!')).toBeTruthy();
    });

    it('getTimelineButton click executes function that calls timelineReq with parseDataJson as callback', () => {
        userTimelineComponent
            .find('#getUserTimelineButton')
            .simulate("click");

        //timelineReq is already called once one mount
        expect(userTimelineReq).toHaveBeenCalledTimes(2);
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
            userTimelineComponent.instance()
                    .parseUserTimeline(JSON.stringify([data, data, data, data]));
        });

        userTimelineComponent
            .find('#getUserTimelineButton')
            .simulate("click");

        expect(userTimelineComponent.containsMatchingElement(<PostFactoryComponent />)).toBeTruthy();
    });
});