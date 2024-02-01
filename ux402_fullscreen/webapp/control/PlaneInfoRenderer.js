
sap.ui.define([
    "sap/ui/core/Renderer"
],

    function (Renderer) {
        "use strict";
        let PlaneInfoRenderer = Renderer.extend("student00.com.sap.training.ux402.fullscreen.ux402fullscreen.control.PlaneInfoRenderer");
        PlaneInfoRenderer.apiVersion = 2

        PlaneInfoRenderer.render = function (oRm, oControl) {
            oRm.openStart("div");
            oRm.openEnd();

            oRm.openStart("table");
            oRm.openEnd();

            oRm.openStart("tr");
            oRm.openEnd();
            oRm.openStart("td");
            oRm.openEnd();
            oRm.text("Максимальные места: " + oControl.getSeatsMax());
            oRm.close("td");
            oRm.close("tr");

            oRm.openStart("tr");
            oRm.openEnd();
            oRm.openStart("td");
            oRm.openEnd();
            oRm.text("Занятые места: " + oControl.getSeatsOcc());
            oRm.close("td");
            oRm.close("tr");


            oRm.close("table");

            oRm.close("div");
        };
        return PlaneInfoRenderer;
    }
);