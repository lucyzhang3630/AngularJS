var userInfoModule = angular.module('UserInfoModule', []);
userInfoModule.controller('UserInfoCtrl', ['$scope',
    function($scope) {
        $scope.userInfo = {
            email: "253445528@gmail.com",
            password: "253445528",
            autoLogin: true
        };
        $scope.getFormData = function() {
            console.log($scope.userInfo);
        };
        $scope.setFormData = function() {
            $scope.userInfo = {
                email: 'lucyzhang@gmail.com',
                password: 'lucyzhang',
                autoLogin: false
            }
        };
        $scope.resetForm = function() {
            $scope.userInfo = {
                email: "253445528@gmail.com",
                password: "253445528",
                autoLogin: true
            };
        }
    }
])
