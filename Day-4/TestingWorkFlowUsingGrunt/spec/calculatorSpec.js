// Unit Testing Code For Calculator
// Start with Describe the TestSuite
describe('Calculator Testing',function(){
   // Now Define Test Case 
    it('Should Add two numbers',function(){
        var expectedResult = 30;
        var result = add(10,20);
        expect(result).toBe(expectedResult);
    });
     it('Should Add three numbers',function(){
        var expectedResult = 60;
        var result = add(10,20,30);
        expect(result).toBe(expectedResult);
    });
     it('Should Add four numbers',function(){
        var expectedResult = 100;
        var result = add(10,20,30,40);
        expect(result).toBe(expectedResult);
    });
     it('Should Add two String format numbers',function(){
        var expectedResult = 30;
        var result = add("10","20");
        expect(result).toBe(expectedResult);
    });
     it('Should Add two Strings ',function(){
        var expectedResult = 0;
        var result = add("one","two");
        expect(result).toBe(expectedResult);
    });
});