import timelineRequest from '../js/TimelineRequest';

describe('testing timelineRequest', () => {
    it('does the thing', (done) => {
        let callback = (data) => {
            expect(data).toBeFalsy();
            done();
        }
        timelineRequest(callback);
    });
});


