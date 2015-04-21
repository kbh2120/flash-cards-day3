app.directive('borderOnHover', function () {
	return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      element.on('mouseenter', function () {
        // console.log(element);
        element[0].style.color = 'red';
      });
    }
  }
});