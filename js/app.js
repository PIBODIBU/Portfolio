'use strict';

var app = angular.module('PortfolioApp',
    ['ngMaterial', 'ngMessages', 'material.svgAssetsCache', 'ngAnimate', 'ui.router']);

app.config(function ($mdIconProvider, $mdThemingProvider, $stateProvider, $urlRouterProvider) {
    $stateProvider.state('skills', {
        url: '/skills',
        templateUrl: 'template/skills.tmpl.html'
    });

    $stateProvider.state('projects', {
        url: '/projects',
        templateUrl: 'template/projects.tmpl.html'
    });

    $stateProvider.state('info', {
        url: '/info',
        templateUrl: 'template/info.tmpl.html'
    });

    $urlRouterProvider.otherwise("/skills");

    $mdIconProvider.defaultIconSet('/assets/icons/mdi.svg');

    $mdThemingProvider.theme('default')
        .primaryPalette('teal')
        .accentPalette('amber')
        .backgroundPalette('grey');

    $mdThemingProvider.theme('dark')
        .accentPalette('amber')
        .backgroundPalette('teal')
        .dark();

    $mdThemingProvider.enableBrowserColor({
        theme: 'default',
        palette: 'primary',
        hue: '800' // Default is '800'
    });
});