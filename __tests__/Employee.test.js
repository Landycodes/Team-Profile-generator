//needs to run tests on each functionality of program
const Employee = require('../lib/Employee')

describe('Employee', () => {
    describe('employee get Name', () => {
        it('should return name of Employee instance', () => {
            const tName = 'Andrew';
            const newHire = new Employee(tName)
            expect(newHire.Name).toEqual(tName)
        });
    });

    describe('employee get ID', () => {
        it('should return Employee ID #', () => {
            const tID = '69'
            const newHire = new Employee('', tID)
            expect(newHire.ID).toEqual(tID)
        });
    });
    describe('employee get Email', () => {
        it('should return Employee email', () => {
            const tEmail = 'iLikeEmail@yohoo.com'
            const newHire = new Employee('', '', tEmail)
            expect(newHire.Email).toEqual(tEmail)
        });
    });
    describe('employee get Role', () => {
        it('should return Employee role', () => {
            const newHire = new Employee('Andrew', '69', '@email')
            expect(newHire.Role).toEqual('Employee')
        });
    });
});