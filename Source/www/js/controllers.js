angular.module('app.controllers', [])
  
.controller('loginCtrl', function($scope) {
    
})
   
// up to date
.controller('newLogCtrl', function($scope, $http) {
    $scope.post = function(){
        jObj = new JSONObject;
        jObj = ({
            "Date":$scope.addDate,
            "Result":$scope.addTest            
        })
        if(!($scope.addDate == NULL || $scope.addTest == NULL)){
        $http.post("mongodb://<BChrysler>:<chivalry13>@ds019628.mlab.com:19628/ase_lab_7/logs", jObj);
        }
    }
})
      
//needs updating
.controller('updateBloodLogCtrl', function($scope, $http) {
    $scope.post = function(){
        jObj = new JSONObject;
        jObj = ({
            "Date":$scope.updateDate,
            "Result":$scope.updateTest            
        })
        $http.post("mongodb://<BChrysler>:<chivalry13>@ds019628.mlab.com:19628/ase_lab_7/logs", jObj);
    }
})
   
//should be done, needs checking
.controller('deleteBloodlogCtrl', function($scope, $http) {
    $scope.delete = function(){
        $http.delete("mongodb://<BChrysler>:<chivalry13>@ds019628.mlab.com:19628/ase_lab_7/logs", {"Date":$scope.delDate});
    }
})
   
//should be done, needs checking
.controller('viewBloodlogCtrl', function($scope) {
     $scope.get = function(){
        $http.get("mongodb://<BChrysler>:<chivalry13>@ds019628.mlab.com:19628/ase_lab_7/logs", {"Date":$scope.seeDate})
    }
})
 