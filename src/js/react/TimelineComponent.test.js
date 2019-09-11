import { shallow } from 'enzyme';
import React from 'react';
import TimelineComponent from './TimelineComponent';
import timelineRequest from '../TimelineRequest';
import PostFactoryComponent from './PostFactoryComponent';

jest.mock('../TimelineRequest');



describe("test TimelineComponent", () => {

    const timelineComponent = shallow(< TimelineComponent />);

    timelineRequest.mockImplementation(() => {
        timelineComponent.instance().parseDataJson("");
    });

    it('renders without crashing', () => {
        timelineComponent;
    });

    // todo: update this trash message
    it('timelineRequest returns callback parseDataJson', () => {
        expect(timelineComponent.instance().parseDataJson("")).toBeFalsy();
        expect(timelineRequest).toHaveBeenCalledWith(timelineComponent.instance().parseDataJson); 
    });

    it('button calls timelineRequest with parseDataJson as callback', () => {
        timelineComponent
            .find('button')
            .simulate("click");
        expect(timelineRequest).toHaveBeenCalledWith(timelineComponent.instance().parseDataJson);
    });
})