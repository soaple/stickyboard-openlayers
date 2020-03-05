// src/HeatMap.js

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

class HeatMap extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
        }
    }

    componentDidMount() {
        ol = require('openlayers');

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

        const layers = [ raster, labels ];

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

    componentDidUpdate(prevProps) {
        const { pointList } = this.props;

        if (prevProps.pointList.length !== pointList.length) {
            mainMap.getLayers().getArray().splice(1, 0, this.getHeatMapLayer())
            mainMap.render();
        }
    }

    getHeatMapLayer = () => {
        const { pointList, blur, radius } = this.props;

        let sourceHeatMap = new ol.source.Vector();

        pointList.forEach((point) => {
            let feature = new ol.Feature({
                geometry: new ol.geom.Point(
                    ol.proj.transform(
                        point.geometry,
                        'EPSG:4326', 'EPSG:3857'
                    )
                ),
                weight: point.weight,
                name: 'Point'
            });

            // feature.set(FEATURE_KEY_TYPE, FEATURE_TYPE_HEAT_MAP);

            sourceHeatMap.addFeature(feature);
        });

        let layerHeatMap = new ol.layer.Heatmap({
            source: sourceHeatMap,
            blur: blur || 20,
            radius: radius || 15
        });

        return layerHeatMap;
    }

    render () {
        return (
            <Root id='map'/>
        )
    }
}

export default HeatMap;
