describe ('FinbonacciSquence', function() {

  it('recievces the first to numbers and lenght and return the sequrence', function() {
    
    var sequence = new Sequence(0,1,5);
    sequence.populate();
    expect(sequence.array).toEqual([0,1,1,2,3])

  });

});