var dataFor = 'male';
function showMaleStats(){
    dataFor = 'male';
    resetAllValues();
    $("#maleImage").attr("src", "image/male-s.png");
    $("#femaleImage").attr("src", "image/female.png");
    $("#statTitle").text("Life Expectancy for Men");
}
function showFemaleStats(){
    dataFor = 'female';
    resetAllValues();
    $("#maleImage").attr("src", "image/male.png");
    $("#femaleImage").attr("src", "image/female-s.png");
    $("#statTitle").text("Life Expectancy for Women");
}
function resetAllValues(){
    
}