import timelineReq from '../js/TimelineReq';
jest.mock('../js/TimelineReq');


describe('testing timelineReq', () => {
    it('returns promise', async () => {
        const data = await timelineReq();
        return expect(data).toBeFalsy();
    });
});