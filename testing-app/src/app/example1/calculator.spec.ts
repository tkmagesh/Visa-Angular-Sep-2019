import { Calculator } from "./calculator";

describe('A Calculator', () => {
    it('Should add two numbers', () => {
        //Arrange
            const sut = new Calculator(),
                x = 100,
                y = 200,
                expectedResult = 300;

        //Act
            const actualResult = sut.add(x,y);

        //Assert
            expect(actualResult).toBe(expectedResult);
    })
})