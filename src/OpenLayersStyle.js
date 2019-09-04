// src/OpenLayersStyle.js

const ol = require('openlayers');

import OpenLayersConst from './OpenLayersConst';

/**************
  Default
**************/
function getNormalStyle (feature) {
    var geometry = feature.getGeometry()
    var styles = [
        // linestring
        new ol.style.Style({
            image: new ol.style.Circle({
                fill: new ol.style.Fill({
                    color: '#4DB72F'
                }),
                stroke: new ol.style.Stroke({
                    color: '#000000',
                    width: 2
                }),
                radius: 10
            }),
            stroke: new ol.style.Stroke({
                color: '#6D6D6D',
                width: 4
            })
        })
    ]

    return styles
}

function getTouchedStyle (feature) {
    var geometry = feature.getGeometry()
    var styles = [
        // linestring
        new ol.style.Style({
            image: new ol.style.Circle({
                fill: new ol.style.Fill({
                    color: '#FFCD68'
                }),
                stroke: new ol.style.Stroke({
                    color: '#777777',
                    width: 2
                }),
                radius: 10
            }),
            stroke: new ol.style.Stroke({
                color: '#0097DD',
                width: 4
            })
        })
    ]

    return styles
}

function getClickedStyle (feature) {
    var geometry = feature.getGeometry()
    var styles = [
        // linestring
        new ol.style.Style({
            image: new ol.style.Circle({
                fill: new ol.style.Fill({
                    color: '#FFCD68'
                }),
                stroke: new ol.style.Stroke({
                    color: '#000000',
                    width: 2
                }),
                radius: 10
            }),
            stroke: new ol.style.Stroke({
                color: '#0097DD',
                width: 6
            })
        })
    ]

    return styles
}

/**************
  AccessPoint
**************/
function getAccessPointNormalStyle (feature) {
    var geometry = feature.getGeometry()
    var styles = [
        // linestring
        new ol.style.Style({
            image: new ol.style.Circle({
                fill: new ol.style.Fill({
                    color: '#4DB72F'
                }),
                stroke: new ol.style.Stroke({
                    color: '#000000',
                    width: 2
                }),
                radius: 10
            }),
            stroke: new ol.style.Stroke({
                color: '#6D6D6D',
                width: 4
            })
        })
    ]

    return styles
}

function getAccessPointTouchedStyle (feature) {
    var geometry = feature.getGeometry()
    var styles = [
        // linestring
        new ol.style.Style({
            image: new ol.style.Circle({
                fill: new ol.style.Fill({
                    color: '#FFCD68'
                }),
                stroke: new ol.style.Stroke({
                    color: '#777777',
                    width: 2
                }),
                radius: 10
            }),
            stroke: new ol.style.Stroke({
                color: '#0097DD',
                width: 4
            })
        })
    ]

    return styles
}

function getAccessPointClickedStyle (feature) {
    var geometry = feature.getGeometry()
    var styles = [
        // linestring
        new ol.style.Style({
            image: new ol.style.Circle({
                fill: new ol.style.Fill({
                    color: '#FFCD68'
                }),
                stroke: new ol.style.Stroke({
                    color: '#000000',
                    width: 2
                }),
                radius: 10
            }),
            stroke: new ol.style.Stroke({
                color: '#0097DD',
                width: 6
            })
        })
    ]

    return styles
}

/**************
  LocationLog
**************/
function getLocationLogNormalStyle (feature) {
    var geometry = feature.getGeometry()
    var fillColor = '#ff5e5e'
    if (feature.getKeys().includes(OpenLayersConst.FEATURE_KEY_FILL_COLOR)) {
        fillColor = feature.get(OpenLayersConst.FEATURE_KEY_FILL_COLOR)
    }
    var strokeColor = '#ba4444'
    if (feature.getKeys().includes(OpenLayersConst.FEATURE_KEY_STROKE_COLOR)) {
        strokeColor = feature.get(OpenLayersConst.FEATURE_KEY_STROKE_COLOR)
    }
    var styles = [
        // linestring
        new ol.style.Style({
            image: new ol.style.Circle({
                fill: new ol.style.Fill({
                    color: fillColor
                }),
                stroke: new ol.style.Stroke({
                    color: strokeColor,
                    width: 2
                }),
                radius: 5
            }),
            stroke: new ol.style.Stroke({
                color: '#5c5c5c',
                width: 4
            })
        })
    ]

    if (typeof (geometry.forEachSegment) === 'function') {
        geometry.forEachSegment(function (start, end) {
            var dx = end[0] - start[0]
            var dy = end[1] - start[1]
            var rotation = Math.atan2(dy, dx)
            // var coordinates = [end[0] - dx / 10, end[1] - dy / 10]
            var coordinates = [start[0] + dx / 2, start[1] + dy / 2]
            // arrows
            styles.push(new ol.style.Style({
                geometry: new ol.geom.Point(coordinates),
                image: new ol.style.Icon({
                    src: '../../media/arrow.png',
                    anchor: [0.5, 0.5],
                    rotateWithView: true,
                    rotation: -rotation
                })
            }))
        })
    }

    return styles
}

function getLocationLogTouchedStyle (feature) {
    var geometry = feature.getGeometry()
    var fillColor = '#ff5e5e'
    if (feature.getKeys().includes(OpenLayersConst.FEATURE_KEY_FILL_COLOR)) {
        fillColor = feature.get(OpenLayersConst.FEATURE_KEY_FILL_COLOR)
    }
    var strokeColor = '#ba4444'
    if (feature.getKeys().includes(OpenLayersConst.FEATURE_KEY_STROKE_COLOR)) {
        strokeColor = feature.get(OpenLayersConst.FEATURE_KEY_STROKE_COLOR)
    }
    var styles = [
        // linestring
        new ol.style.Style({
            image: new ol.style.Circle({
                fill: new ol.style.Fill({
                    color: fillColor
                }),
                stroke: new ol.style.Stroke({
                    color: strokeColor,
                    width: 2
                }),
                radius: 10
            }),
            stroke: new ol.style.Stroke({
                color: '#5c5c5c',
                width: 4
            })
        })
    ]

    return styles
}

function getLocationLogClickedStyle (feature) {
    var geometry = feature.getGeometry()
    var fillColor = '#ff5e5e'
    if (feature.getKeys().includes(OpenLayersConst.FEATURE_KEY_FILL_COLOR)) {
        fillColor = feature.get(OpenLayersConst.FEATURE_KEY_FILL_COLOR)
    }
    var strokeColor = '#ba4444'
    if (feature.getKeys().includes(OpenLayersConst.FEATURE_KEY_STROKE_COLOR)) {
        strokeColor = feature.get(OpenLayersConst.FEATURE_KEY_STROKE_COLOR)
    }
    var styles = [
        // linestring
        new ol.style.Style({
            image: new ol.style.Circle({
                fill: new ol.style.Fill({
                    color: fillColor
                }),
                stroke: new ol.style.Stroke({
                    color: '#000000',
                    width: 2
                }),
                radius: 10
            }),
            stroke: new ol.style.Stroke({
                color: '#5c5c5c',
                width: 4
            })
        })
    ]

    return styles
}

/**************
  Shop
**************/
function getShopNormalStyle (feature) {
    var geometry = feature.getGeometry()
    var fillColor = '#ff5e5e'
    if (feature.getKeys().includes(OpenLayersConst.FEATURE_KEY_FILL_COLOR)) {
        fillColor = feature.get(OpenLayersConst.FEATURE_KEY_FILL_COLOR)
    }
    var strokeColor = '#ba4444'
    if (feature.getKeys().includes(OpenLayersConst.FEATURE_KEY_STROKE_COLOR)) {
        strokeColor = feature.get(OpenLayersConst.FEATURE_KEY_STROKE_COLOR)
    }
    var text = ''
    if (feature.getKeys().includes(OpenLayersConst.FEATURE_KEY_OBJECT)) {
        text = feature.get(OpenLayersConst.FEATURE_KEY_OBJECT).name
    }
    var styles = [
        // linestring
        new ol.style.Style({
            image: new ol.style.Circle({
                fill: new ol.style.Fill({
                    color: fillColor
                }),
                stroke: new ol.style.Stroke({
                    color: strokeColor,
                    width: 2
                }),
                radius: 5
            }),
            stroke: new ol.style.Stroke({
                color: '#5c5c5c',
                width: 4
            }),
            text: new ol.style.Text({
                text: text,
                textAlign: 'center'
            })
        })
    ]

    if (typeof (geometry.forEachSegment) === 'function') {
        geometry.forEachSegment(function (start, end) {
            var dx = end[0] - start[0]
            var dy = end[1] - start[1]
            var rotation = Math.atan2(dy, dx)
            // var coordinates = [end[0] - dx / 10, end[1] - dy / 10]
            var coordinates = [start[0] + dx / 2, start[1] + dy / 2]
            // arrows
            styles.push(new ol.style.Style({
                geometry: new ol.geom.Point(coordinates),
                image: new ol.style.Icon({
                    src: '../../media/arrow.png',
                    anchor: [0.5, 0.5],
                    rotateWithView: true,
                    rotation: -rotation
                })
            }))
        })
    }

    return styles
}

function getShopTouchedStyle (feature) {
    var geometry = feature.getGeometry()
    var fillColor = '#ff5e5e'
    if (feature.getKeys().includes(OpenLayersConst.FEATURE_KEY_FILL_COLOR)) {
        fillColor = feature.get(OpenLayersConst.FEATURE_KEY_FILL_COLOR)
    }
    var strokeColor = '#ba4444'
    if (feature.getKeys().includes(OpenLayersConst.FEATURE_KEY_STROKE_COLOR)) {
        strokeColor = feature.get(OpenLayersConst.FEATURE_KEY_STROKE_COLOR)
    }
    var text = ''
    if (feature.getKeys().includes(OpenLayersConst.FEATURE_KEY_OBJECT)) {
        text = feature.get(OpenLayersConst.FEATURE_KEY_OBJECT).name
    }
    var styles = [
        // linestring
        new ol.style.Style({
            image: new ol.style.Circle({
                fill: new ol.style.Fill({
                    color: fillColor
                }),
                stroke: new ol.style.Stroke({
                    color: strokeColor,
                    width: 2
                }),
                radius: 10
            }),
            stroke: new ol.style.Stroke({
                color: '#5c5c5c',
                width: 4
            }),
            text: new ol.style.Text({
                text: text,
                textAlign: 'center'
            })
        })
    ]

    return styles
}

function getShopClickedStyle (feature) {
    var geometry = feature.getGeometry()
    var fillColor = '#ff5e5e'
    if (feature.getKeys().includes(OpenLayersConst.FEATURE_KEY_FILL_COLOR)) {
        fillColor = feature.get(OpenLayersConst.FEATURE_KEY_FILL_COLOR)
    }
    var strokeColor = '#ba4444'
    if (feature.getKeys().includes(OpenLayersConst.FEATURE_KEY_STROKE_COLOR)) {
        strokeColor = feature.get(OpenLayersConst.FEATURE_KEY_STROKE_COLOR)
    }
    var text = ''
    if (feature.getKeys().includes(OpenLayersConst.FEATURE_KEY_OBJECT)) {
        text = feature.get(OpenLayersConst.FEATURE_KEY_OBJECT).name
    }
    var styles = [
        // linestring
        new ol.style.Style({
            image: new ol.style.Circle({
                fill: new ol.style.Fill({
                    color: fillColor
                }),
                stroke: new ol.style.Stroke({
                    color: '#000000',
                    width: 2
                }),
                radius: 10
            }),
            stroke: new ol.style.Stroke({
                color: '#5c5c5c',
                width: 4
            }),
            text: new ol.style.Text({
                text: text,
                textAlign: 'center'
            })
        })
    ]

    return styles
}

var OpenLayersStyle = {
    applyStyle: function (feature, styleType) {
        // TODO: make styles for each object type
        var objectType = feature.get(OpenLayersConst.FEATURE_KEY_TYPE)
        switch (objectType) {
        case OpenLayersConst.TYPE_SURVEY_LINE:
            break

        case OpenLayersConst.TYPE_ACCESS_POINT:
            switch (styleType) {
            case OpenLayersConst.STYLE_TYPE_NORMAL:
                feature.setStyle(getAccessPointNormalStyle(feature))
                break
            case OpenLayersConst.STYLE_TYPE_TOUCHED:
                feature.setStyle(getAccessPointTouchedStyle(feature))
                break
            case OpenLayersConst.STYLE_TYPE_CLICKED:
                feature.setStyle(getAccessPointClickedStyle(feature))
                break
            }
            break

        case OpenLayersConst.TYPE_WAY_POINT:
            break

        case OpenLayersConst.TYPE_WAY_LINK:
            break

        case OpenLayersConst.TYPE_POI:
            break

        case OpenLayersConst.TYPE_LOCATION_LOG:
            switch (styleType) {
            case OpenLayersConst.STYLE_TYPE_NORMAL:
                feature.setStyle(getLocationLogNormalStyle(feature))
                break
            case OpenLayersConst.STYLE_TYPE_TOUCHED:
                feature.setStyle(getLocationLogTouchedStyle(feature))
                break
            case OpenLayersConst.STYLE_TYPE_CLICKED:
                feature.setStyle(getLocationLogClickedStyle(feature))
                break
            }
            break
        }
    },

    getStyleFunction: function (objectType, styleType) {
        switch (objectType) {
        case OpenLayersConst.TYPE_SURVEY_LINE:
            break

        case OpenLayersConst.TYPE_ACCESS_POINT:
            switch (styleType) {
            case OpenLayersConst.STYLE_TYPE_NORMAL:
                return getAccessPointNormalStyle
            case OpenLayersConst.STYLE_TYPE_TOUCHED:
                return getAccessPointTouchedStyle
            case OpenLayersConst.STYLE_TYPE_CLICKED:
                return getAccessPointClickedStyle
            }
            break

        case OpenLayersConst.TYPE_WAY_POINT:
            break

        case OpenLayersConst.TYPE_WAY_LINK:
            break

        case OpenLayersConst.TYPE_POI:
            break

        case OpenLayersConst.TYPE_LOCATION_LOG:
            switch (styleType) {
            case OpenLayersConst.STYLE_TYPE_NORMAL:
                return getLocationLogNormalStyle
            case OpenLayersConst.STYLE_TYPE_TOUCHED:
                return getLocationLogTouchedStyle
            case OpenLayersConst.STYLE_TYPE_CLICKED:
                return getLocationLogClickedStyle
            }
            break
        case OpenLayersConst.TYPE_SHOP:
            switch (styleType) {
            case OpenLayersConst.STYLE_TYPE_NORMAL:
                return getShopNormalStyle
            case OpenLayersConst.STYLE_TYPE_TOUCHED:
                return getShopTouchedStyle
            case OpenLayersConst.STYLE_TYPE_CLICKED:
                return getShopClickedStyle
            }
            break

        default:
            switch (styleType) {
            case OpenLayersConst.STYLE_TYPE_NORMAL:
                return getNormalStyle
            case OpenLayersConst.STYLE_TYPE_TOUCHED:
                return getTouchedStyle
            case OpenLayersConst.STYLE_TYPE_CLICKED:
                return getClickedStyle
            }
            break
        }
    }
}

module.exports = OpenLayersStyle
