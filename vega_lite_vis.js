var vg_1 = "map.json";
var vg_2 = "bubble.json";
var vg_3 = "donut.json";

vegaEmbed("#map", vg_1).then(function(result){}).catch(console.error);
vegaEmbed("#bubble", vg_2).then(function(result){}).catch(console.error);
vegaEmbed("#donut", vg_3).then(function(result){}).catch(console.error);