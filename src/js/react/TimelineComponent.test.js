import { shallow } from 'enzyme';
import React from 'react';
import TimelineComponent from './TimelineComponent';
import TimelineRequest from '../TimelineRequest';
import PostFactoryComponent from './PostFactoryComponent';
import { exportAllDeclaration } from '@babel/types';

// todo: looks for a manual mock
jest.mock('../TimelineRequest');

describe("todo: fix this description, likely to do with state change", () => {

    // const oldXMLHttpRequest = window.oldXMLHttpRequest

    const timelineComponent = shallow(< TimelineComponent />);

    test("todo: update this, something about rendering the div and hitting TimelineRequest", () => {
        TimelineRequest.mockImplementation(() => {
            timelineComponent.instance().parseDataJson("");
        });
        console.log(timelineComponent.instance());
        expect(timelineComponent.containsMatchingElement(<div>{timelineComponent.instance()}</div>)).toBeTruthy();
        
    
    });
})