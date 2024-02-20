ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:31983").setExtent([196572.618815, 8266064.248910, 198635.872016, 8267415.070982]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_UrbitEtapa2_2 = new ol.format.GeoJSON();
var features_UrbitEtapa2_2 = format_UrbitEtapa2_2.readFeatures(json_UrbitEtapa2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_UrbitEtapa2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UrbitEtapa2_2.addFeatures(features_UrbitEtapa2_2);
var lyr_UrbitEtapa2_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UrbitEtapa2_2, 
                style: style_UrbitEtapa2_2,
                popuplayertitle: "Urbitá - Etapa 2",
                interactive: true,
    title: 'Urbitá - Etapa 2<br />\
    <img src="styles/legend/UrbitEtapa2_2_0.png" /> CSII 1<br />\
    <img src="styles/legend/UrbitEtapa2_2_1.png" /> CSIIR 1 NO<br />\
    <img src="styles/legend/UrbitEtapa2_2_2.png" /> CSIIR 2<br />\
    <img src="styles/legend/UrbitEtapa2_2_3.png" /> Inst<br />\
    <img src="styles/legend/UrbitEtapa2_2_4.png" /> Inst.EP<br />\
    <img src="styles/legend/UrbitEtapa2_2_5.png" /> Calçada<br />\
    <img src="styles/legend/UrbitEtapa2_2_6.png" /> Canteiro<br />\
    <img src="styles/legend/UrbitEtapa2_2_7.png" /> Via<br />\
    <img src="styles/legend/UrbitEtapa2_2_8.png" /> APP<br />\
    <img src="styles/legend/UrbitEtapa2_2_9.png" /> ELUP<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_UrbitEtapa2_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr_UrbitEtapa2_2];
lyr_UrbitEtapa2_2.set('fieldAliases', {'Uso': 'Uso', 'Etapa': 'Etapa', 'Area': 'Area', 'X1': 'X1', 'Y1': 'Y1', 'Num_Lote': 'Num_Lote', 'DUP_3': 'DUP_3', 'Num_lote2': 'Num_lote2', 'DUP_4': 'DUP_4', 'Qmed': 'Qmed', 'Area_Check': 'Area_Check', });
lyr_UrbitEtapa2_2.set('fieldImages', {'Uso': 'TextEdit', 'Etapa': 'TextEdit', 'Area': 'TextEdit', 'X1': 'TextEdit', 'Y1': 'TextEdit', 'Num_Lote': 'TextEdit', 'DUP_3': 'Range', 'Num_lote2': 'TextEdit', 'DUP_4': 'Range', 'Qmed': 'TextEdit', 'Area_Check': 'TextEdit', });
lyr_UrbitEtapa2_2.set('fieldLabels', {'Uso': 'inline label - visible with data', 'Etapa': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'X1': 'hidden field', 'Y1': 'hidden field', 'Num_Lote': 'hidden field', 'DUP_3': 'hidden field', 'Num_lote2': 'hidden field', 'DUP_4': 'hidden field', 'Qmed': 'hidden field', 'Area_Check': 'hidden field', });
lyr_UrbitEtapa2_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});