//Load content only after background loads
        $(function() {
            $("#onload").hide();
            $("#menu-toggle").hide();
            $('header').ready(function() {
                //alert('ready');
                $('#onload').show();
                $("#menu-toggle").show();
            });
        });

//Special Effects
jQuery(document).ready(function() {
jQuery('.post').addClass("hidden1").viewportChecker({
    classToAdd: 'visible animated shake',
    offset: 100    
   });   
});

jQuery(document).ready(function() {
jQuery('.post1').addClass("hidden1").viewportChecker({
    classToAdd: 'visible animated fadeInUp',
    offset: 100    
   });   
});

jQuery(document).ready(function() {
jQuery('.post2').addClass("hidden1").viewportChecker({
    classToAdd: 'visible animated flipInX',
    offset: 100    
   });   
});

jQuery(document).ready(function() {
jQuery('.post3').addClass("hidden1").viewportChecker({
    classToAdd: 'visible animated bounceInLeft',
    offset: 100    
   });   
});

jQuery(document).ready(function() {
jQuery('.post4').addClass("hidden1").viewportChecker({
    classToAdd: 'visible animated bounceInRight',
    offset: 100    
   });   
});

jQuery(document).ready(function() {
jQuery('.post5').addClass("hidden1").viewportChecker({
    classToAdd: 'visible animated fadeInLeft',
    offset: 100    
   });   
});

jQuery(document).ready(function() {
jQuery('.post6').addClass("hidden1").viewportChecker({
    classToAdd: 'visible animated rotateIn',
    offset: 100    
   });   
});

// Closes the sidebar menu
$("#menu-close").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});

// Opens the sidebar menu
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});

// Scrolls to the selected menu item on the page
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
    
    
//Map
d3.json("cleandata.json", function (error, data){
var numbers = data;   
var width = document.getElementById('map').offsetWidth;
var height = width / 2;

var projection,path,svg,g;
var graticule = d3.geo.graticule();
var tooltip = d3.select("#map").append("div").attr("class", "tooltip hidden");
var mapfillcolor = "#CCC";
var mapstrokecolor = "#FFF";

setup(width,height);

function setup(width,height){
    projection = d3.geo.mercator()
      .translate([0, 0])
      .scale(width / 2 / Math.PI);

    path = d3.geo.path()
        .projection(projection);

    svg = d3.select("#map").append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    g = svg.append("g");
}

function getCountryname(code) {
    for (var i = 0; i < numbers.length; i++){
      if (numbers[i].iso3_digit_code == code){
        return numbers[i].country_name;
      }

}
    return "Unknown";
}

var worldData;

d3.json("world-topo.json", function(error, world) {
worldData = world;

// Use topojson to create an array containing one object per country.
var countries = topojson.feature(world, world.objects.countries).features;
    topo = countries;
    draw(topo);
    
// Ithaca
var ithacaCoords = projection([-76, 42]);

svg.append("circle")
.attr("cx", ithacaCoords[0])
.attr("cy", ithacaCoords[1])
.attr("r", 7)
.attr("fill", "#6B9362");

svg.append("text")
.attr("x", ithacaCoords[0] + 10)
.attr("y", ithacaCoords[1])
.text("Ithaca")
.attr("fill", "#6B9362")
.style("font-size","16px")

// Beijing
var beijingCoords = projection([116, 40]);

svg.append("circle")
.attr("cx", beijingCoords[0])
.attr("cy", beijingCoords[1])
.attr("r", 5)
.attr("fill", "red");

svg.append("text")
.attr("x", beijingCoords[0] + 10)
.attr("y", beijingCoords[1])
.text("Beijing")
.attr("fill", "red");

// Singapore
var singaporeCoords = projection([104, 1.3]);

svg.append("circle")
.attr("cx", singaporeCoords[0])
.attr("cy", singaporeCoords[1])
.attr("r", 5)
.attr("fill", "red");

svg.append("text")
.attr("x", singaporeCoords[0] + 10)
.attr("y", singaporeCoords[1])
.text("Singapore")
.attr("fill", "red");
    
// St. Louis
var stlouisCoords = projection([-90, 38.6]);

svg.append("circle")
.attr("cx", stlouisCoords[0])
.attr("cy", stlouisCoords[1])
.attr("r", 5)
.attr("fill", "red");

svg.append("text")
.attr("x", stlouisCoords[0] + 10)
.attr("y", stlouisCoords[1])
.text("St. Louis")
.attr("fill", "red");
});
    
    var colorCountry = function (de, topo){

    d3.json("cleandata.json", function (error1, data1){
        var selectedCountry = g.selectAll(".country").data(topo);

        selectedCountry.style("fill", function (d) {
            if (d.id == de.id){
              return "#F3F315";
            }
            return mapfillcolor;
            });

         });
     };
    
    function draw(topo) {
    svg.append("path")
    .datum(graticule)
    .attr("class", "graticule")
    .attr("d", path);

    g.append("path")
    .datum({type: "LineString", coordinates: [[-180, 0], [-90, 0], [0, 0], [90, 0], [180, 0]]})
    .attr("class", "equator")
    .attr("d", path);


    var country = g.selectAll(".country").data(topo);

    country.enter().insert("path")
        .attr("class", "country")
        .attr("d", path)
        .style("fill", function (d) {return mapfillcolor})
        .style("stroke", mapstrokecolor);

        //ofsets plus width/height of transform, plsu 20 px of padding, plus 20 extra for tooltip offset off mouse
        var offsetL = document.getElementById('map').offsetLeft+(width/2)+40;
        var offsetT =document.getElementById('map').offsetTop+(height/2)+20;

        //tooltips
        country
          .on("mouseover", function(d,i) {
            var mouse = d3.mouse(svg.node()).map( function(d) { return parseInt(d); } );
              tooltip
                .classed("hidden", false)
                .attr("style", "left:"+(mouse[0]+offsetL)+"px;top:"+(mouse[1]+offsetT)+"px")
                .html(getCountryname(d.id))
            })
            .on("mouseout", function(d,i) {
              tooltip.classed("hidden", true)
            });
        country
            .on("click", function(d,i) {
              var mouse = d3.mouse(svg.node()).map( function(d) { return parseInt(d); } );
              colorCountry(d, topo);
            });
    }

    function redraw() {
    width = document.getElementById('map').offsetWidth-60;
    height = width / 2;
    d3.select('svg').remove();
    setup(width,height);
    draw(topo);
    }
});