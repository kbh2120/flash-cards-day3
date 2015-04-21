app.controller('MainController', function ($scope, FlashCardsFactory, ScoreFactory) {
  
  /* Populate flashCards from Factory */

  FlashCardsFactory.getFlashCards().then( function( data ) {
    $scope.flashCards = data;
  });

  $scope.categories = [
      'MongoDB',
      'Express',
      'Angular',
      'Node'
  ];
  $scope.currentCategory = '';

  $scope.getCategoryCards = function (category) {
    FlashCardsFactory.getFlashCards(category).then( function( data ) {
      $scope.currentCategory = category;
      $scope.flashCards = data;
    });
  };

	$scope.answerQuestion = function (answer, flashCard) {
		if (!flashCard.answered) {
			flashCard.answered = true;
			flashCard.answeredCorrectly = answer.correct;
      if (answer.correct)
        ScoreFactory['correct'] = ScoreFactory['correct'] + 1;
      else
        ScoreFactory['incorrect'] = ScoreFactory['incorrect'] + 1;

		}
	}
});