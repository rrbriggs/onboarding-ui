import timelineRequest from '../js/TimelineRequest';

describe('testing timelineRequest', () => {
    it('returns callback', (done) => {
        let callback = (data) => {
            expect(data).toBeFalsy();
            done();
        }
        timelineRequest(callback);
    });
});