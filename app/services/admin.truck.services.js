(function(angular) {
	"use strict";
	
	function TruckServiceHandler($http){

		var getAllTrucks = function(lastKey, limit){
			return $http({	
			    url: '/api/admin/getTrucks?lastKey=' + lastKey + "&limit=" + limit,
			    method: "GET",
			});
		};

		var addTruck = function(truck){
			
			return $http({
						url: '/api/admin/addTruck',
			            method: "POST",
			            data: angular.toJson(truck)
			});
		}

		var searchTrucks = function(truck){
			return $http({
			    url: '/api/admin/searchRecord?truckType='+truck,
			    method: "GET",
			});
		};

		var deleteTruck = function(truckID){
			return $http({
			    url: '/api/admin/deleteTruck?truckID='+truckID,
			    method: "GET",
			});
		};

		//EXPORTED Object
		return {
			getAllTrucks,
			addTruck,
			searchTrucks,
			deleteTruck
		}
	}

	angular.module('bathwaterApp.services')
		.factory('TruckService',['$http',TruckServiceHandler]);	

})(window.angular);