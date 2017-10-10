'use strict';

angular.module('perspectiveApp', ['ui.router','ngSanitize','ngResource','ngAnimate','ngTouch', 'duScroll'])
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
;;'use strict';

angular.module('perspectiveApp')
			.controller('HeaderController', ['$scope', '$document', function($scope, $document) {

				$scope.toTheTop = function() {
      		$document.scrollTopAnimated(0, 800);
    		};

    		$(function() {
					$('.work-link').on("click", function() {
						$('body').css({"background-position": "25% 0%", "background-transition":"background 2s" });
					});
					$('.home-link').on("click", function() {
						$('body').css({"background-position": "50% 20%", "background-transition":"background 2s" });
					});
					$('.about-link').on("click", function() {
						$('body').css({"background-position": "75% 50%", "background-transition":"background 2s" });
					});
				});

			 	$scope.contact  = {
					name:"",
					email:"",
					company:"",
					message:""
				};

			 	$scope.testSuccess = false;
				$scope.sendContact = function() {
					$scope.testSuccess = true;
			    // Get the first form with the name
			    // Hopefully there is only one, but there are more, select the correct index
			    //var frm = document.getElementsByName('contactForm')[0];
			   // frm.reset();  // Reset
			    return false; // Prevent page refresh
				};

			}])

			.controller('WorkController', ['$scope', function($scope) {

				$scope.pageName = "page-work";
				var line1Width = $('#link-1').width();
				var line1Height = $('.wrap-v').height();
				var dotSize = $('.dot').height();
				$scope.line1Padding = {"padding-left" : line1Width-dotSize};
				$scope.line1vPadding = {"padding-top" : line1Height-(dotSize/2)};

				$(window).scroll(function() {
    			if ($(this).scrollTop() > 300) {
        		$('.sub-title-v').fadeOut(500);
        		$('.wrap-v').fadeOut(500);
        		$('.services-body').fadeOut(500);
        		$('.wrap-2-v').fadeOut(500);
    			} else {
    				$('.sub-title-v').fadeIn(500);
    				$('.wrap-v').fadeIn(500);
						$('.services-body').fadeIn(500);
						$('.wrap-2-v').fadeIn(500);
    			}
					if ($(this).scrollTop() > 700) {
						$('.sub-title-v-port').fadeOut(500);
						$('.wrap-v-port').fadeOut(500);
						$('.portfolio-body').fadeOut(500);
						$('.wrap-2-v-port').fadeOut(500);
					} else {
						$('.sub-title-v-port').fadeIn(500);
						$('.wrap-v-port').fadeIn(500);
						$('.portfolio-body').fadeIn(500);
						$('.wrap-2-v-port').fadeIn(500);
					}
				});
			}])

			.controller('AboutController', ['$scope', function($scope) {
				$scope.pageName = "page-about";
				var line1Height = $('.wrap-v').height();
				$scope.line1vPadding = {"padding-top" : line1Height-10};
			}])

			.controller('MainController', ['$scope', function($scope) {

				$scope.pageName = "page-main";

				var innerWindowHeight = $(window).innerHeight();
				var innerWindowWidth = $(window).innerWidth();
				$scope.windowHeight = {
					"height" : innerWindowHeight,
					"width" : innerWindowWidth
				};

				$scope.arrowTop = {
					"top" : (innerWindowHeight)*0.95
				};
				$(function() {
				  $('.sun-ball').hover(function() {
				    $('body').css({ "background-position": "20% 0%", "background-transition":"background 2s" });
				    $('.logo-first').addClass('logo-hover');
				    $('.bird-transition').fadeIn(500);
				  }, function() {
				    // on mouseout, reset the background colour
				    $('body').css({ "background-position": "50% 20%", "background-transition":"background 2s" });
				    $('.logo-first').removeClass('logo-hover');
				    $('.bird-transition').fadeOut(300);
				 	});
				});

				//need to check to see what the background position is before modifying it: https://stackoverflow.com/questions/10011286/javascript-or-jquery-get-background-position-properties-of-a-given-element-and-t
				var myPos = $('body').css("background-position").split(" ");

				//myPos[0]  find what the first value of background position is; we don't need this
				$(function() {
					$('.sun-ball').on("click", function() {
						if (myPos[0] === "20%") { 
						  $('body').css({ "background-position": "50% 20%", "background-transition":"background 2s" });
					    $('.bird-transition').fadeIn(1000);
						} else {
						  $('body').css({ "background-position": "20% 0%", "background-transition":"background 2s" });
					    $('.bird-transition').fadeOut(700);
						}
					});
				});

				$(window).scroll(function() {
    			if ($(this).scrollTop() > 50) { //use `this`, not `document`
        		$('.arrow').fadeOut();
    			} else {
        		$('.arrow').fadeIn();
    			}
    			if ($(this).scrollTop() > 200) { //use `this`, not `document`
        		$('.logo').fadeOut(700);
    			} else {
        		$('.logo').fadeIn(700);
    			}
    			if ($(this).scrollTop() > innerWindowHeight*0.75) { //use `this`, not `document`
				    $('.tree-transition').addClass('appear');
				  }
				});
			}])
;

