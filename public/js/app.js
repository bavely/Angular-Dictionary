var app = angular.module('dictionary', ["ngRoute", "search", "saved"]);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "views/Search.html",
            controller: "searching"
        })

    .when("/saved", {
        templateUrl: "views/Saved.html",
        controller: "save"
    })

    .otherwise("/", {
        templateUrl: "views/Search.html",
        controller: "searching"
    });
});