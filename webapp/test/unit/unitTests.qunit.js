/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"erp-advanced_mathieu-dekeyser/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
