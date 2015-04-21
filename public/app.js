var app = angular.module('flashCards', []);

app.factory('FlashCardsFactory', function ($http) {
    return {
       getFlashCards: function (category) {
        var path;
        if (category)
            path = '/cards?category=' + category;
        else
            path = '/cards';
        return $http.get(path).then(function (response) {
            return response.data;
        });
       }
    };
});

app.factory('ScoreFactory', function () {
    return {
       correct: 0,
       incorrect: 0
   };
});

app.controller('StatsController', function($scope, ScoreFactory){
    $scope.scores = ScoreFactory;
});