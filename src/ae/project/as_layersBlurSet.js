// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.0
 * @date Jul 23 2019
 * 
 * @description Set layers blur
 * @param {CompItem} comp
 * @param {boolean} isOn
 */
function as_layersBlurSet(comp, isOn) {
    
    // FUNC
    function handleLayer(layer) {
        if (layer.nullLayer || (layer instanceof CameraLayer) || (layer instanceof LightLayer)) {
            return;
        }
        layer.motionBlur = isOn;
    }

    // DO
    as_loopLayers(comp, handleLayer);
}