(function(angular){
	'use strict';
//===========================trucksController IMPLEMENTATION START======================================

	function trucksController($state,$q,$uibModal,moment,PickupTruckService){
		var ctrl = this;
		ctrl.$uibModal = $uibModal;
		ctrl.$state = $state;
		
		ctrl.init = function(){
			ctrl.initLoader = false;

			$q.all([PickupTruckService.getDriverTruck(), PickupTruckService.getAllDriverTruckHistory()])
			.then(function(response){
				ctrl.drivers = response[0].data.result.message[0];
				ctrl.trucks = response[0].data.result.message[1];
				ctrl.trkhistories = response[1].data.result.message;
				ctrl.initLoader = true;
			})
			.catch(function(err){
				console.log('Error getting driver list details:/Error getting truck details:');
	 			console.log(err);
			});
		};

		ctrl.assign = function(){
			ctrl.openPopUpAssign(null);
		};
		ctrl.history = function(){
			ctrl.openPopUpHistory(null);
		};
		ctrl.unAssign = function(history){
			ctrl.openPopUpUnAssign(history);
		};

		ctrl.init();
//===========================POPUP IMPLEMENTATION START======================================

	ctrl.openPopUpAssign = function(details){

		var modalInstance = ctrl.$uibModal.open({
			component: 'deliverytruckModal',
			windowClass: 'app-modal-window-small',
			keyboard: false,
			resolve:{
				details: function(){
					return (details || {});
				},
				drivers: function(){
					return ctrl.drivers;
				},
				trucks: function(){
					return ctrl.trucks;
				},
				trkhistories: function(){
					return ctrl.trkhistories;
				}
			},
			backdrop: 'static'
		});

		modalInstance.result.then(function(data){
			//data passed when pop up closed.
			if(data == "update") ctrl.init();
			
		}), function(err){
			console.log('Error in assign trucks & driver Modal');
			console.log(err);
		}
	}
	ctrl.openPopUpUnAssign = function(details){

		var modalInstance = ctrl.$uibModal.open({
			component: 'unAssignDriverToTruck',
			windowClass: 'app-modal-window-small',
			keyboard: false,
			resolve:{
				details: function(){
					return details;
				}
			},
			backdrop: 'static'
		});

		modalInstance.result.then(function(data){
			//data passed when pop up closed.
			if(data == "update") ctrl.init();
			
		}), function(err){
			console.log('Error in unassign trucks & driver Modal');
			console.log(err);
		}
	}
	ctrl.openPopUpHistory = function(details){

		var modalInstance = ctrl.$uibModal.open({
			component: 'historyModal',
			windowClass: 'app-modal-window-large',
			keyboard: false,
			resolve:{
				details: function(){
					return (details||{});
				}
			},
			backdrop: 'static'
		});
		modalInstance.result.then(function(data){
			//data passed when pop up closed.
			//if(data == "update") ctrl.$state.reload();
			
		}),function(err){
			console.log('Error in history of trucks details Modal');
			console.log(err);
		}

	}
//===========================POPUP IMPLEMENTATION END======================================
}
//===========================trucksController IMPLEMENTATION END======================================
	
	angular.module('deliveryTrucks')
	.component('deliveryTrucks',{
		templateUrl: 'pickup-delivery-management/delivery-trucks/delivery-trucks-details/delivery-trucks-details.template.html',
		controller:['$state','$q','$uibModal','moment','PickupTruckService', trucksController]
	});

})(window.angular);