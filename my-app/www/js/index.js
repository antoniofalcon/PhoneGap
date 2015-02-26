/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
         document.addEventListener('deviceready', function onDeviceReady() {
            angular.bootstrap(document, ['miApp']);
        }, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

var miapp = angular.module('miApp', []).controller(
    'Controller',
    ['$scope', function ($scope) {
        'use strict';
        $scope.mandar = function () {
            //alert($scope.nombre);
           
                $scope.paises.push({
                nombre: $scope.nombre,
                val: $scope.val
                });
                $scope.nombre = "";
                $scope.val = "";         
        };
        
        $scope.paises = [
            {
                nombre: 'USA',
                value: 1
            },
            {
                nombre: 'Mexico',
                value: 2
            }
        ];
        $scope.Mexico = [
            {
                nombre: 'Hermosillo',
                value: 1
            },
            {
                nombre: 'Guaymas',
                value: 2
            }
        ];
        $scope.USA = [
            {
                nombre: 'LA',
                value: 1
            },
            {
                nombre: 'San Diego',
                value: 2
            }
        ];
        $scope.cds = [];
        $scope.$watch('correctlySelected', function() {
            if($scope.correctlySelected.nombre=="USA"){
               $scope.cds = $scope.USA; 
            };

            if($scope.correctlySelected.nombre=="Mexico"){
               $scope.cds = $scope.Mexico; 
            };
        });
    }]
);