const Intern = require('../lib/Intern')

describe('Intern', () => {
    describe('Intern school', () => {
        it('should return school', () => {
            const tSchool = 'cienega';
            const Andrew = new Intern('', '', '', tSchool);
            expect(Andrew.School).toEqual(tSchool)
        });
    });
    describe('Intern position', () => {
        it('should return "Intern"', () => {
            const getty = new Intern()
            expect(getty.Role).toEqual('📚 Intern')
        })
    })
});