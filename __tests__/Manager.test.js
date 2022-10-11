const Manager = require('../lib/Manager')

describe('Manager', () => {
    describe('office #', () => {
        it('should give office number', () => {
            const tNum = '15'
            const tina = new Manager('', '', '', tNum)
            expect(tina.OfficeNum).toEqual(tNum)
        });
    });
    describe('Manager role', () => {
        it('should return "Manager"', () => {
            const sally = new Manager()
            expect(sally.Role).toEqual('📋 Manager')
        });
    });
});