
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "student00/com/sap/training/ux402/fullscreen/ux402fullscreen/control/HoverButton",
    "sap/m/MessageToast",
    "student00/com/sap/training/ux402/fullscreen/ux402fullscreen/control/PlaneInfo" 
   ],
    /**
    * @param {typeof sap.ui.core.mvc.Controller} Controller
    */
    function (Controller, HoverButton, MessageToast, PlaneInfo) {
    "use strict";

        return Controller.extend("student00.com.sap.training.ux402.fullscreen.ux402fullscreen.controller.Flights", {

            onInit: function () {
                let oRouter = this.getRouter();
                oRouter.getRoute("flights").attachMatched(this._onObjectMatched, this);
            },

            getRouter: function () {
                return sap.ui.core.UIComponent.getRouterFor(this);
            },


            _onObjectMatched: function (oEvent) {
                let oArgs = oEvent.getParameter("arguments");
                this._sCarrierId = oArgs.carrid;
                let oView = this.getView();

                oView.bindElement({
                    path: "/UX_C_Carrier_TP('" + this._sCarrierId + "')",
                    events: {
                        change: this._onBindingChange.bind(this),
                        dataRequested: function () {
                            oView.setBusy(true);
                        },
                        dataReceived: function () {
                            oView.setBusy(false);
                        }
                    }
                });
            },


            _onBindingChange: function () {
                var oElementBinding;

                oElementBinding = this.getView().getElementBinding();

                // No data for the binding 
                if (oElementBinding && !oElementBinding.getBoundContext()) {
                    this.getRouter().getTargets().display("notFound");
                }
            },

            onNavBack: function () {
                let oHistory, sPreviousHash;

                oHistory = sap.ui.core.routing.History.getInstance();
                sPreviousHash = oHistory.getPreviousHash();

                if (sPreviousHash !== undefined) {
                    window.history.go(-1);
                } else {
                    this.getRouter().navTo("overview", true /*no history*/);
                }
            },
            onHover: function (evt) {

                let sText = this.getOwnerComponent().getModel("i18n").getProperty("msgSeatsAv");
                MessageToast.show(evt.getSource().getHoverText() + " " + sText, { duration: 1000 });
            }

        });
    });
