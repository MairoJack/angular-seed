/**=========================================================
 * Module: config.js
 * App routes and resources configuration
 =========================================================*/


(function() {
    'use strict';

    angular
        .module('app.routes')
        .config(routesConfig);

    routesConfig.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider', 'RouteHelpersProvider'];
    function routesConfig($stateProvider, $locationProvider, $urlRouterProvider, helper){
        
        // Set the following to true to enable the HTML5 Mode
        // You may have to set <base> tag in index and a routing configuration in your server
        $locationProvider.html5Mode(false);

        // defaults to dashboard
        $urlRouterProvider.otherwise('/app/singleview');

        // 
        // Application Routes
        // -----------------------------------   
        $stateProvider
          .state('app', {
              url: '/app',
              abstract: true,
              templateUrl: helper.basepath('app.html'),
              resolve: helper.resolveFor('modernizr', 'icons')
          })
          .state('app.singleview', {
              url: '/singleview',
              title: 'Single View',
              templateUrl: helper.basepath('singleview.html')
          })
          .state('app.submenu', {
              url: '/submenu',
              title: 'Submenu',
              templateUrl: helper.basepath('submenu.html')
          })
          .state('app.dashboard', {
              url: '/dashboard',
              title: 'Dashboard View',
              templateUrl: helper.basepath('dashboard.html'),
              resolve: helper.resolveFor('flot-chart','flot-chart-plugins')
          })
          .state('app.products', {
              url: '/products',
              title: 'Products',
              templateUrl: helper.basepath('products.html'),
              resolve: helper.resolveFor('datatables')
          })
          .state('app.product-view', {
              url: '/product/:id',
              title: 'Product View',
              templateUrl: helper.basepath('product-view.html'),
              resolve: helper.resolveFor('angular-i18n','textAngular','angularFileUpload','filestyle')
          })
          .state('app.product-info', {
              url: '/product-info/:id',
              title: 'Product Info',
              templateUrl: helper.basepath('product-info.html'),
              controller:'ProductInfoController'
          })
          // 
          // CUSTOM RESOLVES
          //   Add your own resolves properties
          //   following this object extend
          //   method
          // ----------------------------------- 
          // .state('app.someroute', {
          //   url: '/some_url',
          //   templateUrl: 'path_to_template.html',
          //   controller: 'someController',
          //   resolve: angular.extend(
          //     helper.resolveFor(), {
          //     // YOUR RESOLVES GO HERE
          //     }
          //   )
          // })
          ;

    } // routesConfig

})();

