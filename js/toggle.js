var dataFor = 'male';
function showMaleStats(){
    dataFor = 'male';
    $("#maleImage").attr("src", "image/male-s.png");
    $("#femaleImage").attr("src", "image/female.png");
    $("#statTitle").text("Life Expectancy for Men");
    $("#lifeExpectancy").text("69.1");
    update();
}
function showFemaleStats(){
    dataFor = 'female';
    $("#maleImage").attr("src", "image/male.png");
    $("#femaleImage").attr("src", "image/female-s.png");
    $("#statTitle").text("Life Expectancy for Women");
    $("#lifeExpectancy").text("73.7");
    update();
}
