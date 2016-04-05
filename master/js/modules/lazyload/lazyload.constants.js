(function() {
    'use strict';

    angular
        .module('app.lazyload')
        .constant('APP_REQUIRES', {
          // jQuery based and standalone scripts
          scripts: {
            'modernizr':          ['vendor/modernizr/modernizr.js'],
            'icons':              ['vendor/fontawesome/css/font-awesome.min.css',
                                   'vendor/simple-line-icons/css/simple-line-icons.css'],
            'flot-chart':         ['vendor/Flot/jquery.flot.js'],
            'flot-chart-plugins': ['vendor/flot.tooltip/js/jquery.flot.tooltip.min.js',
                                   'vendor/Flot/jquery.flot.resize.js',
                                   'vendor/Flot/jquery.flot.pie.js',
                                   'vendor/Flot/jquery.flot.time.js',
                                   'vendor/Flot/jquery.flot.categories.js',
                                   'vendor/flot-spline/js/jquery.flot.spline.min.js']
          },
          // Angular based script (use the right module name)
          modules: [
            {name: 'datatables',         files: ['vendor/datatables/media/css/jquery.dataTables.css',
                                                 'vendor/datatables/media/js/jquery.dataTables.js',
                                                 'vendor/angular-datatables/dist/angular-datatables.js'], serie: true},
            {name: 'angular-i18n',       files: ['vendor/angular-i18n/angular-locale_zh.js'], serie: true}
          ]
        })
        ;

})();
