(function(angular) {

'use strict';
//===========================PromoCodeDetailsController IMPLEMENTATION START======================================
function PromoCodeDetailsController($state,$uibModal, PromocodeService){
	var ctrl = this;
	ctrl.$uibModal = $uibModal;
	ctrl.$state = $state;

	ctrl.init = function(){
		//get promocode details.
		/*PromocodeService.getPromos()
		.then(function(promoCodes){
			ctrl.promocode = promoCodes.data;
		})
		.catch(function(err){
			console.log('Error getting promocode details:');
			console.log(err);
		})*/
	};

	//Add Promo Modal
	ctrl.addPromoCode = function(){
		ctrl.openPopUpPromo(null);
	};
	ctrl.deletePromoCode = function(promocode){
		//Show alert and then delete if Yes.

		PromocodeService.deletePromoCode(promocode)
		.then(function(promoCodes){
			ctrl.init();
		})
		.catch(function(err){
			console.log('Error getting promocode details:');
			console.log(err);
		});
	};

	ctrl.init();

//===========================POPUP IMPLEMENTATION START======================================

	ctrl.openPopUpPromo = function(detailsofPromo){

		var modalInstance = ctrl.$uibModal.open({
			component: 'promoModal',
			windowClass: 'app-modal-window-small',
			keyboard: false,
			resolve:{
				detailsofPromo: function(){
					return (detailsofPromo || {});
				}
			},
			backdrop: 'static'
		});

		modalInstance.result.then(function(data){
			//data passed when pop up closed.
			if(data && data.action == 'update') ctrl.init();
			
		}),function(err){
			console.log('Error in add-promo Modal');
			console.log(err);
		}
	}
//===========================POPUP IMPLEMENTATION END======================================
}
//===========================PromoCodeDetailsController IMPLEMENTATION START======================================



angular.module('promocodeDetails')
	.component('promocodeDetails',{
		templateUrl: 'admin/promocode/promocode-details/promocode-details.template.html',
		controller:['$state','$uibModal','PromocodeService', PromoCodeDetailsController]
	});

})(window.angular);