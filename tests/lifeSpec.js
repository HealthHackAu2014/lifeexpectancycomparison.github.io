describe("The 'lifeexpectancyfunction'", function() {
  it("calculates male", function() {
    var result = LifeExpectancyMen(0.83,0.89,0.89,0.89,0.89,0.78,0.78);
    expect(result).toEqual(69.13563233282082);
  });
  it("calculates female", function() {
    var result = LifeExpectancyWomen(0.83,0.89,0.89,0.89,0.89,0.78,0.78);
    console.log(result);
    expect(result).toEqual(73.66027753476084);
  });
});