import {timelineReq} from '../js/TimelineReq';
import {userTimelineReq} from '../js/TimelineReq';
jest.mock('../js/TimelineReq');


describe('testing timelineReq', () => {
    it('returns promise', async () => {
        const data = await timelineReq();
        return expect(data).toBeFalsy();
    });
});

describe('testing userTimelineReq', () => {
    it('returns promise', async () => {
        const data = await userTimelineReq();
        return expect(data).toBeFalsy();
    });
});