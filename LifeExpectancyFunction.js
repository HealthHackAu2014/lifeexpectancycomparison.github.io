
function LifeExpectancyMen(p1,p2,p3,p4,p5,p6,p7)
{
var c1=1.136010363; //first fudge factor
var c2=3.99905; //second fudge factor
var c3=5.85269589; //third fudge factor

    //ABS Life tables

var mortality =[0.00877,0.0016,0.001,0.0011,0.00586,0.00837,	0.01005,0.01554,0.02163,0.02934,0.03983,0.05181,0.07117,0.11186,0.16087,0.23141,0.30705,0.41828,1];
var abs_adjustment=[1,0.83,0.83,0.83,0.89,0.89,0.89,0.89,                   0.89,0.89,0.89,0.89,0.89,0.78,0.78,0.78,0.78,0.78,1];

  
//mortality rates
var mortality_extra = [];
var lives = [];
var lifeyears = [];
var TotalLives = 0;
//assigning the first parameter to the ages 0-14    
//need to strip the ABS identification ajustment of 0.83 and add our own.
mortality_extra[0]=mortality[0]*abs_adjustment[0];
mortality_extra[1]=mortality[1]*abs_adjustment[1]/p1;
mortality_extra[2]=mortality[2]*abs_adjustment[2]/p1;
mortality_extra[3]=mortality[3]*abs_adjustment[3]/p1;
 //strip the ABS age adjustment of 0.89 for 15-59
//assigning the second parameter to the ages 15-29
 mortality_extra[4]=mortality[4]*abs_adjustment[4]/p2;
mortality_extra[5]=mortality[5]*abs_adjustment[5]/p2;
mortality_extra[6]=mortality[6]*abs_adjustment[6]/p2;
    //assigning the third parameter to the ages 30-39
mortality_extra[7]=mortality[7]*abs_adjustment[7]/p3;
mortality_extra[8]=mortality[8]*abs_adjustment[8]/p3;
    //assigning the fourth parameter to the ages 40-49
mortality_extra[9]=mortality[9]*abs_adjustment[9]/p4;
mortality_extra[10]=mortality[10]*abs_adjustment[10]/p4;
    //assigning the fifth parameter to the ages 50-59
mortality_extra[11]=mortality[11]*abs_adjustment[11]/p5;
mortality_extra[12]=mortality[12]*abs_adjustment[12]/p5;
 //strip the ABS age adjustment of 0.78 for 60+
    //assigning the sixth parameter to the ages 60-69
mortality_extra[13]=mortality[13]*abs_adjustment[13]/p6;
mortality_extra[14]=mortality[14]*abs_adjustment[14]/p6;
    //assigning the last parameter to the rest
mortality_extra[15]=mortality[15]*abs_adjustment[15]/p7;
mortality_extra[16]=mortality[16]*abs_adjustment[16]/p7;
mortality_extra[17]=mortality[17]*abs_adjustment[17]/p7;
    //no parameter added as it is the last of the cohort
mortality_extra[18]=mortality[18];

lives[0]=100000;
for (var i=1; i<=18; i++){
lives[i]=lives[i-1]*(1-mortality_extra[i-1]);
}

lifeyears[0]=lives[0]-(lives[0]-lives[1])/c1;
lifeyears[1]=c2*(lives[1]-(lives[1]-lives[2])/2);

for (i=2; i<=17;i++){
    lifeyears[i]=5*(lives[i]-(lives[i]-lives[i+1])/2);
}
lifeyears[18]=c3*lives[18];

for (i=0; i<=18;i++){
TotalLives = TotalLives + lifeyears[i];
}

return TotalLives/lives[0];
}
/*Standard ABS result*/

var result = LifeExpectancyMen(0.83,0.89,0.89,0.89,0.89,0.89,0.78,0.78);
alert(result);
