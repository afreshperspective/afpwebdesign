'use strict';

angular.module('perspectiveApp', ['ui.router','ngSanitize','ngResource','ngAnimate','ngTouch','duScroll'])
.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
        
            // route for the home page
            //Unlike other routes in the past, I didn't use app because it was creatiing 
            //child-routes (app/app.work/app.about); so when I was attempting to highlight the navbar for each
            //page, it was constantly leaving "HOME" activated (as all other states were sub-states of app)

            .state('home', {
                url:'/home',
                views: {
                    'body': {
                        templateUrl : 'views/home.html',
                        controller  : 'MainController'
                    }
                }
            })

            .state('about', {
                url:'/about',
                views: {
                    'body@': {
                        templateUrl : 'views/about.html',
                        controller  : 'AboutController'
                    }
                }
            })

            .state('work', {
                url:'/work',
                views: {
                    'body@': {
                        templateUrl : 'views/work.html',
                        controller  : 'WorkController'
                    }
                }
            });

        $urlRouterProvider.otherwise('/home');
        
    })
;