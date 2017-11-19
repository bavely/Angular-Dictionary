angular.module("search", [])
    .controller("searching", ["$scope", "apicall", function($scope, apicall) {
        $scope.dataObj = {}
        $scope.handleSubmit = function() {
            apicall.getData($scope.dataObj.word).then(function(res) {
                console.log(res);
                $scope.dataObj.results = res.data.list;
            });
        }


    }])

.factory("apicall", function($http) {

    return {

        getData: function(word) {
            return $http({
                method: 'GET',
                url: `https://mashape-community-urban-dictionary.p.mashape.com/define?mashape-key=xzA2tesmsHmshqT1U6rCslFUIONcp1jY8BsjsnfStCxvkCUYTD&term=${word}`


            });
        },

        saveData: function(dif) {
            return $http({
                method: 'POST',
                url: "api/saved",
                data: dif
            });
        }
    };
});