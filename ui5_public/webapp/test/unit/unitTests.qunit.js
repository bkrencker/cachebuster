/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/emmi/trial/cachebuster/ui5_public/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
