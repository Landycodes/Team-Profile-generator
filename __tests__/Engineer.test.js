const Engineer = require('../lib/Engineer')

describe('Engineer', () => {
    //MAYBE DELETE THIS FOR REDUNDENCY
    // describe('Engineer name', () => {
    //     it('should return engineers name', () => {
    //         const eName = 'angie'
    //         const angineer = new Engineer(eName)
    //         expect(angineer.Name).toEqual(eName)
    //     });
    // });
    // describe('Engineer ID', () => {
    //     it('should return engineers id #', () => {
    //         const eID = '420';
    //         const mike = new Engineer('', eID)
    //         expect(mike.ID).toEqual(eID)
    //     });
    // });

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
            expect(bob.Role).toEqual('Engineer')
        })
    })
});