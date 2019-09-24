import { shallow } from 'enzyme';
import React from 'react';
import TimelineComponent from '../../../js/react/TimelineComponent';
import timelineRequest from '../../../js/TimelineRequest';
import PostFactoryComponent from '../../../js/react/PostFactoryComponent';

jest.mock('../../../js/TimelineRequest');



describe('test TimelineComponent', () => {

    const timelineComponent = shallow(< TimelineComponent />);

    timelineRequest.mockImplementation(() => {
        timelineComponent.instance().parseDataJson("");
    });

    it('timelineRequest returns callback parseDataJson', () => {
        expect(timelineComponent.instance().parseDataJson("")).toBeFalsy(); 
    });

    it('button click executes function that calls timelineRequest with parseDataJson as callback', () => {
        timelineComponent
            .find('button')
            .simulate("click");
        expect(timelineRequest).toHaveBeenCalledWith(timelineComponent.instance().parseDataJson);
    });

    it('button renders data from PostFactoryComponent', () => {
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

        timelineRequest.mockImplementation(() => {
            timelineComponent.instance()
                    .parseDataJson(JSON.stringify([data, data, data, data]));
        });

        timelineComponent
            .find('button')
            .simulate("click");

        expect(timelineComponent.containsMatchingElement(<PostFactoryComponent />)).toBeTruthy();
    });
});