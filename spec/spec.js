var degree = require('../js/app.js')

describe("Функция POW", function () {
    it("Должна возводить в степень", function () {
        // prepare
        var result;

        // act
        result = degree.pow(2, 3)

        // assert
        expect(result).toBe(7)

        expect(true).toBe(true);
    });


    it("Должна возводить в степень", function () {
        // prepare
        var result;

        // act
        result = degree.pow(5, 2)

        // assert
        expect(result).toBe(25)

        expect(true).toBe(true);
    });

    it("Должна возводить в степень", function () {
        // prepare
        var result;

        // act
        result = degree.pow(3, 3)

        // assert
        expect(result).toBe(27)

        expect(true).toBe(true);
    });

});