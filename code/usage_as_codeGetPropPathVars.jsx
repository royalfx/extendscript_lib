#include "as_codeGetPropPath.jsxinc";
#include "../ae/as_isEffect.jsxinc";
#include "../ae/as_isLayer.jsxinc";

var comp = app.project.activeItem;
if(comp) {

    if(comp.selectedProperties.length > 0) {

        alert(as_codeGetPropPath(comp.selectedProperties[0]));

    } else {
        alert("Select target property!");
    }

} else {
    alert("Select target property!");
}