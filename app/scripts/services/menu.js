'use strict';

/**
 * @ngdoc service
 * @name demoSassApp.menu
 * @description
 * # menu
 * Service in the demoSassApp.
 */
angular.module('demoSassApp')
	.service('menu', function menu() {
		var menuOptions = [];

		menuOptions = [{
			menuName: 'Dashboard',
			route: '#/summary',
			icon: 'typcn typcn-th-large',
			rightMenu: false,
			
		},{
			menuName: 'Graphs',
			route: '#/graphlist',
			icon: 'typcn typcn-chart-line',
			rightMenu: true,
		},
		{
			menuName: 'Commands',
			route: '#/commands',
			icon: 'typcn typcn-point-of-interest',
			
		},
		{
			menuName: 'Events',
			route: '#/events',
			icon: 'typcn typcn-info-large',
			
		}];

	this.getMenuOptions = function(){
		return menuOptions;
	};
	});