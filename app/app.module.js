'use strict';

// Define the `bathwaterApp` module
angular.module('bathwaterApp', [
	'ui.router',
	'angular-google-gapi',
	'ngMessages',
	'googleSignIn',
	'naif.base64',
	'ui.bootstrap',
	'images-resizer',
	'720kb.datepicker',
	'ngAnimate',
	'ngSanitize',
	// 'angular-loading-bar', // 
	// For Notification
	'ngToast',
	//LightBox Library used as Image Viewer.
	'bootstrapLightbox',
	//for using moment.js
	'angularMoment',
	//Infinite Scroll 
	'infinite-scroll',
	'manageAdmin',
	'index',
	'adminLayout',
	'adminPanel',
	// Common Module
	'bathwaterApp.common',
	'bathwaterApp.services',
	// Admin Panel Modules
	'adminSubPanel',
	'driverDetails',
	'truckDetails',
	'timeslotDetails',
	'zipcodeDetails',
	'promocodeDetails',
	// Pickup/Delivery Panel Modules
	'deliverySubPanel',
	'userRequest',
	'deliveryTrucks',
	//Customer Panel Modules
	'customersSubPanel',
	//Inventory Panel Module
	'inventorySubPanel',
	'inventoryIncomingDetails',
	//Warehouse Module
	'warehouseSubPanel',
	'truckItemIncomingWarehouseDetails',
	'truckItemOutgoingWarehouseDetails',
]);
