(function(){
	'use strict';

	angular
		.module('app.products')
		.controller('ProductController',ProductController);

	ProductController.$inject = ['$resource', 'DTOptionsBuilder', 'DTColumnDefBuilder'];
	function ProductController($resource, DTOptionsBuilder, DTColumnDefBuilder){

		var vm = this;

		activate();

		function activate(){

			vm.dtOptions = DTOptionsBuilder.newOptions().withLanguage({
		            "sEmptyTable":     "No data available in table",
		            "sInfo":           "共 _TOTAL_ 条数据",
		            "sInfoEmpty":      "Showing 0 to 0 of 0 entries",
		            "sInfoFiltered":   "(filtered from _MAX_ total entries)",
		            "sInfoPostFix":    "",
		            "sInfoThousands":  ",",
		            "sLengthMenu":     "每页显示 _MENU_ 条",
		            "sLoadingRecords": "Loading...",
		            "sProcessing":     "Processing...",
		            "sSearch":         "搜索:",
		            "sZeroRecords":    "No matching records found",
		            "oPaginate": {
		                "sFirst":    "首页",
		                "sLast":     "尾页",
		                "sNext":     "下一页",
		                "sPrevious": "上一页"
		            },
		            "oAria": {
		                "sSortAscending":  ": activate to sort column ascending",
		                "sSortDescending": ": activate to sort column descending"
		            }
		        }).withPaginationType('full_numbers');;

			$resource('server/datatable.json').query().$promise.then(function(data) {
            	vm.list = data;
          	});
		}
	}


	angular
		.module('app.products')
		.controller('ProductInfoController',ProductInfoController);
	ProductInfoController.$inject = ['$scope','$stateParams'];
	function ProductInfoController($scope,$stateParams){

		var vm = this;

		activate();

		function activate(){
			$scope.productId = $stateParams.id;
		}
	}
})();