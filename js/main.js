function draw(data) {

    var scale = d3.scale.linear()
        .domain([60,72]) // Given a value in this range
        .range([0, 200]); // Output the corresponding value from this range


    var data_rounded = Number((data[0]).toFixed(1));
    d3.select('#life_synth').text(data_rounded);

    var official_chart = d3.select("#life_expect_chart_official")
                .selectAll("div")
                .data([71])
                .attr("id", "life_expect_chart_official")
                .attr("class", "bar");
    official_chart.enter().append("div")

	official_chart.style("height", function(d) {
					return scale(d) + "px";
				});


	official_chart.exit().remove();


    var dynamic_chart = d3.select("#life_expect_chart_synth")
                .selectAll("div")
				.data([data[0]])
				.attr("y", function(d) {
                			   		return 200 - (d * 4);
                			   })
				.attr("id", "life_expect_chart_synth")
				.attr("class", "bar");

    dynamic_chart.enter().append("div");


	dynamic_chart.style("height", function(d) {
	                console.log(scale(d));
					return scale(d) + "px";

				});


	dynamic_chart.exit().remove();


};

function summer(elmt) {
    var i;
    var sum = 0;
    for( var i = 0; i < elmt.length; i++ ){
        sum += parseInt( elmt[i], 10 ); //don't forget to add the base
    }
    return sum;
}

function init() {
    d3.select('#slider1text').text(0.75);
    d3.select('#slider2text').text(0.75);
    d3.select('#slider3text').text(0.75);
    d3.select('#slider4text').text(0.75);
    d3.select('#slider5text').text(0.75);
    d3.select('#slider6text').text(0.75);
    d3.select('#slider7text').text(0.75);
    update();
    //var data = [83, 83];
    //draw(data);
}


function update() {
    var elmt = new Array();

    elmt[0] = d3.select('#slider1text').text();
    elmt[1] = d3.select('#slider2text').text();
    elmt[2] = d3.select('#slider3text').text();
    elmt[3] = d3.select('#slider4text').text();
    elmt[4] = d3.select('#slider5text').text();
    elmt[5] = d3.select('#slider6text').text();
    elmt[6] = d3.select('#slider7text').text();

    //elmt.forEach(function(slide){
    //    console.log(slide);
    //});

//              console.log("output is : " +               LifeExpectancyMen(0.83,0.89,0.89,0.89,0.89,0.89,0.78,0.78));
    var result =  LifeExpectancyMen(elmt[0],elmt[1],elmt[2],elmt[3],elmt[4],elmt[5],elmt[6]);
    console.log("output is : " + result);

    var a = [];
    a[0] = result;
    a[1] = 71;
    draw(a);
};




