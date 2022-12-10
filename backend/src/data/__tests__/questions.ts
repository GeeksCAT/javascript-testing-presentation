import { calcResults, calcTotalVotes } from "../questions";

describe('tests calcTotalVotes method', () => {
    it ('should return 0 if no answers are given', () => {
        const totalVotes = calcTotalVotes({});
        expect(totalVotes).toBe(0);
    });

    it ('should return 1 if one answer is given', () => {
        const totalVotes = calcTotalVotes({ '1': ['a'] });
        expect(totalVotes).toBe(1);
    });

    it('should return 4 if four answers are given', () => {
        const totalVotes = calcTotalVotes({ '1': ['a', 'b'], '2': ['c', 'd'] });
        expect(totalVotes).toBe(4);
    });
});

describe('tests calcResults method', () => {
    it('should return an empty object if no answers are given', () => {
        const results = calcResults({});
        expect(results).toEqual({});
    });

    it('should return an object with the number of votes per answer', () => {
        const results = calcResults({ '1': ['a', 'b'], '2': ['c', 'd', 'e'] });
        expect(results).toEqual({ '1': 2, '2': 3 });
    });
});
