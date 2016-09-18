angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
	$scope.options = {
	autoplay:true,
  loop: true,
  speed: 3000,
}


$scope.$on("$ionicSlides.sliderInitialized", function(event, data){
  // data.slider is the instance of Swiper
  
  $scope.slider = data.slider;
	
  
  
});

$scope.$on("$ionicSlides.slideChangeStart", function(event, data){
  console.log('Slide change is beginning');
});

$scope.$on("$ionicSlides.slideChangeEnd", function(event, data){
  // note: the indexes are 0-based
  $scope.activeIndex = data.activeIndex;
  $scope.previousIndex = data.previousIndex;
});
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('MovieDetailsCtrl', function($scope) {
	$scope.bookflag=false;
	$scope.choosen=[];
	$scope.seats=[{id:1,val:'aaa',col:'grey'},{id:2,val:'bbb',col:'grey'},{id:3,val:'ccc',col:'green'},{id:4,val:'ddd',col:'green'},{id:5,val:'eee',col:'green'},{id:6,val:'fff',col:'green'},{id:7,val:'ggg',col:'green'},{id:8,val:'hhh',col:'green'}]

$scope.clicked=function(param){
	  $scope.choosen=[];
	for (index in $scope.seats){
		if($scope.seats[index].id==param){
			
		if ($scope.seats[index].col == 'blue'){
			$scope.seats[index].col='green';
			
		}else if ($scope.seats[index].col == 'green'){
			$scope.seats[index].col='blue';
			
			$scope.bookflag=true;
		}
	
		}
			if($scope.seats[index].col == 'blue'){
			$scope.choosen.push($scope.seats[index].val);
		}
	}
	 
  }
  
})
.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
