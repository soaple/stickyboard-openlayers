// src/OpenLayers.js

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import OpenLayersStyle from './OpenLayersStyle';
import OpenLayersConst from './OpenLayersConst';

// if (process.env.BROWSER) {
    require('openlayers/css/ol.css');
// }

var ol
var mapLayer
var mainMap

const Root = styled.div`
    height: 100%;
`;

class OpenLayers extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
        }
    }

    componentDidMount () {
        ol = require('openlayers');

        // Set layers
        let layers = [];
        if (this.props.isHeatmapMode) {
            var vector = new ol.layer.Heatmap({
                source: new ol.source.Vector({
                    url: 'https://openlayers.org/en/v4.6.5/examples/data/kml/2012_Earthquakes_Mag5.kml',
                    format: new ol.format.KML({
                        extractStyles: false
                    })
                }),
                blur: parseInt(7, 10),
                radius: parseInt(10, 10)
            });

            vector.getSource().on('addfeature', function(event) {
                // 2012_Earthquakes_Mag5.kml stores the magnitude of each earthquake in a
                // standards-violating <magnitude> tag in each Placemark.  We extract it from
                // the Placemark's name instead.
                var name = event.feature.get('name');
                var magnitude = parseFloat(name.substr(2));
                event.feature.set('weight', magnitude - 5);
            });

            var raster = new ol.layer.Tile({
                source: new ol.source.Stamen({
                    layer: 'toner-background'
                })
            });

            var labels = new ol.layer.Tile({
                source: new ol.source.Stamen({
                    layer: 'terrain-labels'
                })
            });

            layers = [ raster, labels, vector ];
        } else {
            // mapLayer = new ol.layer.Image()
            mapLayer = new ol.layer.Tile({
                source: new ol.source.OSM()
            });

            layers = [ mapLayer ];
        }

        mainMap = new ol.Map({
            logo: false,
            layers: layers,
            target: 'map',
            controls: ol.control.defaults({
                attributionOptions: {
                    collapsible: false
                }
            }),
            view: new ol.View({
                center: ol.proj.transform(
                    [ this.props.longitude, this.props.latitude ],
                    'EPSG:4326', 'EPSG:3857'),
                zoom: this.props.zoom,
                minZoom: this.props.minZoom,
                maxZoom: this.props.maxZoom
            })
        });
    }

    render () {
        return (
            <Root id='map'/>
        )
    }
}

export default OpenLayers;
