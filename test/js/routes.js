angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.waveZone', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/waveZone.html',
        controller: 'waveZoneCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page10',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('WAVEs', {
    url: '/page5',
    templateUrl: 'templates/WAVEs.html',
    controller: 'WAVEsCtrl'
  })

  .state('waves', {
    url: '/page7',
    templateUrl: 'templates/waves.html',
    controller: 'wavesCtrl'
  })

  .state('waveSCatcher', {
    url: '/page8',
    templateUrl: 'templates/waveSCatcher.html',
    controller: 'waveSCatcherCtrl'
  })

$urlRouterProvider.otherwise('')


});