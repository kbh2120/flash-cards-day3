app.directive('flashCard', function(ScoreFactory) {
  return {
    restrict: 'E',
    templateUrl: 'js/directives/flashCard/flashCard.html',
    scope: {
      card: '='
    },
    link: function(scope, element, attrs) {
      scope.answerQuestion = function (answer, flashCard) {
        if (!flashCard.answered) {
          flashCard.answered = true;
          flashCard.answeredCorrectly = answer.correct;
          if (answer.correct)
            ScoreFactory['correct'] = ScoreFactory['correct'] + 1;
          else
            ScoreFactory['incorrect'] = ScoreFactory['incorrect'] + 1;
        }
      };
    }
  };
});