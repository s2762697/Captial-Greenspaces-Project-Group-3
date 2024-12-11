//Intitialising map
var map = L.map('map').setView([55.95151, -3.2365], 15);

//L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//}).addTo(map);

//Add satellite imagery layer
L.tileLayer('https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    attribution: '&copy; <a href="https://www.google.com/maps">Google</a>',
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    maxZoom: 20,    //max zoom in on map
    minZoom: 12     //min zoom out on map
    }).addTo(map);

//if ({{data[2]}} = "Elm") {
//    let marker = ElmMarker;}
//else ({{data[]}} = "Birch"){
//    let marker = BirchMarker;}
//

//let circleMarker = ({radius: 8,     //size of circle
//    color: 'black', //border color
//    weight: 2,      //border size
//    fillColor: 'white',     //fill color
//    fillOpacity: 1});


let Maple = L.latLng(55.961639, -3.23651);
let Elm = L.latLng(55.962639, -3.23651);
let Birch = L.latLng(55.963639, -3.23651);
let Hawthorn = L.latLng(55.964639, -3.23651);
let CommonYew = L.latLng(55.965639, -3.23651);
let Ash = L.latLng(55.966639, -3.23651);
let Willow = L.latLng(55.967639, -3.23651);
let Oak = L.latLng(55.968639, -3.23651);
let Beech = L.latLng(55.969639, -3.23651);
let Prunus = L.latLng(55.970639, -3.23651);

let MapleMarker = L.circleMarker(Maple,
    {radius: 8,     //size of circle
    color: 'black', //border color
    weight: 2,      //border size
    fillColor: 'white',     //fill color
    fillOpacity: 1}).addTo(map);

let ElmMarker = L.circleMarker(Elm,
    {radius: 8,
    color: 'black',
    weight: 2,
    fillColor: 'blue',
    fillOpacity: 1}).addTo(map);

let BirchMarker = L.circleMarker(Birch, {radius:8,
    color: 'black',
    weight: 2,
    fillColor: 'yellow',
    fillOpacity: 1}).addTo(map);

let HawthornMarker = L.circleMarker(Hawthorn, {radius:8,
    color: 'black',
    weight: 2,
    fillColor: 'red',
    fillOpacity: 1}).addTo(map);

let CommonYewMarker = L.circleMarker(CommonYew, {radius:8,
    color: 'black',
    weight: 2,
    fillColor: 'pink',
    fillOpacity: 1}).addTo(map);

let AshMarker = L.circleMarker(Ash, {radius:8,
    color: 'black',
    weight: 2,
    fillColor: 'purple',
    fillOpacity: 1}).addTo(map);

let WillowMarker = L.circleMarker(Willow, {radius:8,
    color: 'black',
    weight: 2,
    fillColor: 'orange',
    fillOpacity: 1}).addTo(map);

let OakMarker = L.circleMarker(Oak, {radius:8,
    color: 'black', 
    weight: 2,      
    fillColor: 'lightblue',     
    fillOpacity: 1}).addTo(map)

let BeechMarker = L.circleMarker(Beech, {radius:8,
    color: 'black', 
    weight: 2,     
    fillColor: 'black',
    fillOpacity: 1}).addTo(map)

let PrunusMarker = L.circleMarker(Prunus, {radius:8,
    color: 'black',
    weight: 2,
    fillColor: 'navy',
    fillOpacity: 1}).addTo(map)
