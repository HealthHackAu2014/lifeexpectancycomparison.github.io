function draw(data) {

    var scale = d3.scale.linear()
        .domain([0, 50])
        .range([0, 100]);


    var bars = d3.select("#life_expectency_chart")
                .selectAll("div")
				.data(data)
				.attr("id", "life_expectency_chart")
				.attr("class", "bar");

    bars.enter().append("div");


	bars.style("height", function(d) {
					return scale(d) + "px";
				});


	bars.exit().remove();


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
    var data = [83, 83];
    draw(data);
}

function update() {
    var elmt = new Array();
    elmt[0] = d3.select('#slider1text').text();
    elmt[1] = d3.select('#slider2text').text();
    elmt[2] = d3.select('#slider3text').text();
    var sum = summer(elmt);
    var avg = sum/elmt.length

    var data = [avg, 83];
    draw(data);
};



