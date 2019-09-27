import { shallow } from 'enzyme';
import React from 'react';
import TimelineComponent from '../../../js/react/TimelineComponent';
import timelineReq from '../../../js/TimelineReq';
import PostFactoryComponent from '../../../js/react/PostFactoryComponent';

jest.mock('../../../js/TimelineReq');



describe('test TimelineComponent', () => {

    // timelineReq.mockImplementation(() => {
    //     return new Promise((resolve, reject) => {
    //         reject(false);
    //     })
    // });

    timelineReq.mockResolvedValue(false);

    const timelineComponent = shallow(< TimelineComponent />);

    it('checks for error case', () => {
        expect(timelineComponent.contains('No data currently available.')).toBeTruthy();
    });

    it('button click executes function that calls timelineReq with parseDataJson as callback', () => {
        timelineComponent
            .find('button')
            .simulate("click");

        //timelineReq is already called once one mount
        expect(timelineReq).toHaveBeenCalledTimes(2);
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

        timelineReq.mockImplementation(() => {
            timelineComponent.instance()
                    .parseDataJson(JSON.stringify([data, data, data, data]));
        });

        timelineComponent
            .find('button')
            .simulate("click");

        expect(timelineComponent.containsMatchingElement(<PostFactoryComponent />)).toBeTruthy();
    });
});