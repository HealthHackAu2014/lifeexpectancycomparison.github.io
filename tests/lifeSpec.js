describe("The 'lifeexpectancyfunction'", function() {
  it("calculates male", function() {
    var result = LifeExpectancyMen(0.83,0.89,0.89,0.89,0.89,0.89,0.78,0.78);
    expect(result).toBe(69.78827023241948);
  });
});