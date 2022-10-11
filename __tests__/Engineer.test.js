const Engineer = require('../lib/Engineer')

describe('Engineer', () => {
    describe('Engineers gitHub username', () => {
        it('should return gitHub username', () => {
            const eGit = 'iLikeCode';
            const sam = new Engineer('', '', '', eGit)
            expect(sam.GitHub).toEqual(eGit)
        })
    })
    describe('Engineer role', () => {
        it('should return "Engineer"', () => {
            const bob = new Engineer()
            expect(bob.Role).toEqual('👨🏽‍💻 Engineer')
        })
    })
});