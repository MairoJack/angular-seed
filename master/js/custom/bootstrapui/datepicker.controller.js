/**=========================================================
 * Module: demo-datepicker.js
 * Provides a simple demo for bootstrap datepicker
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('DatepickerCtrl', DatepickerCtrl);

    function DatepickerCtrl($scope) {

        $scope.today = function() {
          $scope.startDate = new Date();
          $scope.endDate = new Date();
        };

        $scope.today();

        $scope.clear = function() {
          $scope.dt = null;
        };

       
        $scope.startOptions = {
          maxDate: new Date(2020, 12, 31),
          minDate: new Date(),
          startingDay: 1,
          showWeeks: false,
          shortcutPropagation:true
        };

        $scope.endOptions = {
          maxDate: new Date(2020, 12, 31),
          minDate: new Date(),
          startingDay: 1,
          showWeeks: false
        };


        $scope.startOpen = function() {
          $scope.startPopup.opened = true;
        };

        $scope.endOpen = function() {
          $scope.endPopup.opened = true;
        };

        $scope.startPopup = {
          opened: false
        };

        $scope.endPopup = {
          opened: false
        };

        $scope.startChange = function() {
          $scope.endOptions.minDate = $scope.startDate;
        };

        $scope.endChange = function() {
          $scope.startOptions.maxDate = $scope.endDate;
        };

      }
})();

