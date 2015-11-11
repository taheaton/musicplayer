import angular from 'angular';
import 'angular-ui-router';

import config from './config';

import HomeController from './controllers/home.controller';

angular
  .module('app', ['ui.router'])
  .constant('SC', '23b4766cf44b594143bb18234a10a18f')
  .config(config)
  .controller('HomeController', HomeController)
;