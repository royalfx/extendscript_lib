// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.0
 * @date Jul 22 2019
 * 
 * @param {*} layer
 * @return {string} LayerType
 */
function as_layerGetType(layer) {
    if (layer instanceof TextLayer) {
        return LayerType.TEXT;
    }
    
    if (layer instanceof LightLayer) {
        return LayerType.LIGHT;
    }

    if (layer instanceof CameraLayer) {
        return LayerType.CAMERA;
    }

    if (layer instanceof ShapeLayer) {
        return LayerType.SHAPE;
    }

    if (layer.source instanceof CompItem) {
        return LayerType.PRECOMP;
    }

    if (layer.source instanceof FootageItem) {
        if (layer.source.mainSource instanceof SolidSource) {
            return LayerType.SOLID;
        }
        if (!layer.hasVideo) {
            return LayerType.AUDIO;
        }
        return LayerType.FOOTAGE;
    }

    return null;
}