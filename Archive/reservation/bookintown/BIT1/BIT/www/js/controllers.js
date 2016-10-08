angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$state,$stateParams,$window, $ionicPopup, $timeout) {
	$scope.options = {
	autoplay:true,
  loop: true,
  speed: 3000,
  
}
$scope.showPopup = function() {
  $scope.data = {};

  // An elaborate, custom popup
  var myPopup = $ionicPopup.show({
    template: '<iframe src="http://www.youtube.com/embed/shGhZzJ7o-g?rel=0" frameborder="0" allowfullscreen></iframe>',
    scope: $scope,
    buttons: [
      { text: 'Back' }
    ]
  });
 myPopup.then(function(res) {
    console.log('Tapped!', res);
  });

} 
$scope.movies=[{id:"m1",name:"Drishyam",language:"malayalam",genre:"family",poster:"img/drishyam.jpg",cast:"Mohanlal",highlight:"Mohanlal Movie",description:"cast:moasdfasdf asdfa hherrthfggh dbbdfg dfgsdffg sdfg s sdfg  sdfg  sdfg" ,showtimings:['11:00','13:00','14:45','18:00'],others:''},
{id:"m2",name:"Oppam",language:"malayalam",genre:"family",poster:"img/oppam.jpg",cast:"Mohanlal",highlight:"Mohanlal Movie",description:"cast:moasdfasdf asdfa hherrthfggh dbbdfg dfgsdffg sdfg s sdfg  sdfg  sdfg" ,showtimings:['13:00','14:45','18:30'],others:''},
{id:"m3",name:"PAULO KOHLEO",language:"malayalam",genre:"family",poster:"img/paulokohlo.jpg",cast:"Kunchako",highlight:"Comedy Movie",description:"cast:moasdfasdf asdfa hherrthfggh dbbdfg dfgsdffg sdfg s sdfg  sdfg  sdfg" ,showtimings:['11:00','13:00','18:00'],others:''},
{id:"m4",name:"Pink",language:"hindi",genre:"action",poster:"https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Pinkmovieposter.jpg/220px-Pinkmovieposter.jpg",cast:"Aamitab",highlight:"Aamitab Movie",description:"cast:moasdfasdf asdfa hherrthfggh dbbdfg dfgsdffg sdfg s sdfg  sdfg  sdfg" ,showtimings:['11:00','13:00','14:45','18:00'],others:''},
{id:"m5",name:"Martian",language:"english",genre:"thriller",poster:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_UY1200_CR90,0,630,1200_AL_.jpg",cast:"English",highlight:"Space related adventure",description:"cast:moasdfasdf asdfa hherrthfggh dbbdfg dfgsdffg sdfg s sdfg  sdfg  sdfg" ,showtimings:['11:00','14:45','18:00'],others:''}];

var temp={};

for (moviein in $scope.movies){
	var lang=$scope.movies[moviein].language;
	temp[lang]='';
}
$scope.languages=Object.keys(temp);

temp={};

for (moviein in $scope.movies){
	var lang=$scope.movies[moviein].genre;
	temp[lang]='';
}
$scope.genres=Object.keys(temp);
$scope.languagemodel='';
$scope.genremodel='';
$scope.filteredmovies=[];


$scope.filteredlang=[];

var filterout=function(){
	$scope.filteredmovies=[];
	for (index in $scope.movies){
		var item=$scope.movies[index];
		if($scope.languagemodel==''|| item.language==$scope.languagemodel){
			if($scope.genremodel=='' || item.genre==$scope.genremodel)
				$scope.filteredmovies.push(item);
		}
	}
	$scope.hidecarousal=true;
}
filterout();
$scope.hidecarousal=false;
$scope.updategenre=function(genremodel){
	$scope.genremodel=genremodel;
	filterout();
	
}
$scope.updatelanguage=function(languagemodel){
	$scope.languagemodel=languagemodel;
	filterout();
	
}
$scope.reset=function(languagemodel){
	$scope.languagemodel='';
	$scope.genremodel='';
	filterout();
	//$scope.hidecarousal=false;	
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


.controller('MovieDetailsCtrl', function($scope,$stateParams,Movies,$state) {
	$scope.validtheatres=[];
	
	$scope.movies=Movies.get($stateParams.movieid);

	$scope.theatres=[{id:'t1',name:'Liberty Paradise',address: 'Thalassery, Thalassery, Kannur ,ph 6234652456456',showtimes:{m1:['11:00','2:30','18:00','21:00'],m2:['11:00','2:30','18:00'],m3:['11:00']}},
	{id:'t2',name:'Liberty Mini Paradise',address:'Thalassery, Thalassery, Kannur ,ph 6234652456456',showtimes:{m1:['11:00'],m4:['11:00']}},
	{id:'t3',name:'Liberty Movie house',address:'Thalassery, Thalassery, Kannur ,ph 6234652456456',showtimes:{m4:['11:00'],m5:['11:00']}}
	];
	
	
	$scope.movieid = $stateParams.movieid;
	gettheatres($scope.movieid);
	function gettheatres(movieid){
		$scope.validtheatres=[];
		Object.keys($scope.theatres).forEach(function(index) {
			var item=$scope.theatres[index];
			if (item.showtimes[movieid]!=undefined){
				$scope.validtheatres.push(item);
			}			
		});
		
	}

	$scope.nextdays={0:'23-sep',1:'24-sep',2:'25-sep',3:'26-sep',4:'27-sep',5:'28-sep',6:'29-sep',7:'30-sep'};
	$scope.day=[];
	$scope.time=[];
	$scope.bookvalidate=function(movie,theatre,timeparam){	
		
		$state.go('tab.seatselection', {movieid: movie, theatre: theatre,time:timeparam});
		
	
		
	}

  
})

.controller('SeatSelectionCtrl', function($scope,$stateParams,Movies) {
	$scope.validtheatres=[];
	
	console.log($stateParams );
	$scope.movies=Movies.get($stateParams.movieid);
	console.log($stateParams );
	
		$scope.seatsflag=false
	$scope.bookflag=false;
	$scope.choosen=[];
	var seatLayout=[
{"col0": "A1", "col1": "A2", "col2": "A3", "col3": "X", "col4": "A4", "col5": "A5", "col6": "X", "col7": "A6", "col8": "A7", "col9": "A8", "col10": "A9", "col11": "A10", "col12": "A11", "col13": "X", "col14": "A12", "col15": "A13", "col16": "A14", "col17": "A15", "col18": "A16", "col19": "A17"}, {"col0": "B1", "col1": "B2", "col2": "B3", "col3": "X", "col4": "B4", "col5": "B5", "col6": "X", "col7": "B6", "col8": "B7", "col9": "B8", "col10": "B9", "col11": "B10", "col12": "B11", "col13": "X", "col14": "B12", "col15": "B13", "col16": "B14", "col17": "B15", "col18": "B16", "col19": "B17"}, {"col0": "C1", "col1": "C2", "col2": "C3", "col3": "X", "col4": "C4", "col5": "C5", "col6": "X", "col7": "C6", "col8": "C7", "col9": "C8", "col10": "C9", "col11": "C10", "col12": "C11", "col13": "X", "col14": "C12", "col15": "C13", "col16": "C14", "col17": "C15", "col18": "C16", "col19": "C17"}, {"col0": "D1", "col1": "D2", "col2": "D3", "col3": "X", "col4": "D4", "col5": "D5", "col6": "X", "col7": "D6", "col8": "D7", "col9": "D8", "col10": "D9", "col11": "D10", "col12": "D11", "col13": "X", "col14": "D12", "col15": "D13", "col16": "D14", "col17": "D15", "col18": "D16", "col19": "D17"}, {"col0": "E1", "col1": "E2", "col2": "E3", "col3": "X", "col4": "E4", "col5": "E5", "col6": "X", "col7": "E6", "col8": "E7", "col9": "E8", "col10": "E9", "col11": "E10", "col12": "E11", "col13": "X", "col14": "E12", "col15": "E13", "col16": "E14", "col17": "E15", "col18": "E16", "col19": "E17"}, {"col0": "X", "col1": "X", "col2": "X", "col3": "X", "col4": "X", "col5": "X", "col6": "X", "col7": "X", "col8": "X", "col9": "X", "col10": "X", "col11": "X", "col12": "X", "col13": "X", "col14": "X", "col15": "X", "col16": "X", "col17": "X", "col18": "X", "col19": "X"}, {"col0": "X", "col1": "X", "col2": "X", "col3": "X", "col4": "X", "col5": "X", "col6": "X", "col7": "X", "col8": "X", "col9": "X", "col10": "X", "col11": "X", "col12": "X", "col13": "X", "col14": "X", "col15": "X", "col16": "X", "col17": "X", "col18": "X", "col19": "X"}, {"col0": "X", "col1": "X", "col2": "X", "col3": "X", "col4": "X", "col5": "X", "col6": "X", "col7": "X", "col8": "X", "col9": "X", "col10": "X", "col11": "X", "col12": "X", "col13": "X", "col14": "X", "col15": "X", "col16": "X", "col17": "X", "col18": "X", "col19": "X"}, {"col0": "F1", "col1": "F2", "col2": "F3", "col3": "X", "col4": "F4", "col5": "F5", "col6": "X", "col7": "F6", "col8": "F7", "col9": "F8", "col10": "F9", "col11": "F10", "col12": "F11", "col13": "X", "col14": "F12", "col15": "F13", "col16": "F14", "col17": "F15", "col18": "F16", "col19": "F17"}, {"col0": "G1", "col1": "G2", "col2": "G3", "col3": "X", "col4": "G4", "col5": "G5", "col6": "X", "col7": "G6", "col8": "G7", "col9": "G8", "col10": "G9", "col11": "G10", "col12": "G11", "col13": "X", "col14": "G12", "col15": "G13", "col16": "G14", "col17": "G15", "col18": "G16", "col19": "G17"}, {"col0": "H1", "col1": "H2", "col2": "H3", "col3": "X", "col4": "H4", "col5": "H5", "col6": "X", "col7": "H6", "col8": "H7", "col9": "H8", "col10": "H9", "col11": "H10", "col12": "H11", "col13": "X", "col14": "H12", "col15": "H13", "col16": "H14", "col17": "H15", "col18": "H16", "col19": "H17"}, {"col0": "I1", "col1": "I2", "col2": "I3", "col3": "X", "col4": "I4", "col5": "I5", "col6": "X", "col7": "I6", "col8": "I7", "col9": "I8", "col10": "I9", "col11": "I10", "col12": "I11", "col13": "X", "col14": "I12", "col15": "I13", "col16": "I14", "col17": "I15", "col18": "I16", "col19": "I17"}, {"col0": "J1", "col1": "J2", "col2": "J3", "col3": "X", "col4": "J4", "col5": "J5", "col6": "X", "col7": "J6", "col8": "J7", "col9": "J8", "col10": "J9", "col11": "J10", "col12": "J11", "col13": "X", "col14": "J12", "col15": "J13", "col16": "J14", "col17": "J15", "col18": "J16", "col19": "J17"}];

$scope.bookingstatus=[];

	$scope.seatLayout=seatLayout;
for (index in seatLayout){
	var row=seatLayout[index];
	var newrow={};	
	for (key in row){
		//var seat=row[subindex];
		console.log(index,'aaaaaaaaaaaaaaa',key);
		  if( row.hasOwnProperty( key ) ) {
				//console.log("obj." + prop + " = " + obj[prop]);
				newrow[key]='green';
			} 
	}
	
	$scope.bookingstatus.push(newrow);
	
}
console.log($scope.seatLayout);
console.log($scope.bookingstatus);


	$scope.seats=[{"seatLayout":seatLayout, "numOfRows": 10, "numOfSeatsPerRow": 20, "numOfPathways": 3}];
	$scope.seats_bak=[{"id":0,"val":"A0","col":"grey"},
{"id":1,"val":"A1","col":"grey"},
{"id":2,"val":"A2","col":"green"},
{"id":3,"val":"A3","col":"grey"},
{"id":4,"val":"A4","col":"grey"},
{"id":5,"val":"A5","col":"green"},
{"id":6,"val":"A6","col":"grey"},
{"id":7,"val":"A7","col":"grey"},
{"id":8,"val":"A8","col":"green"},
{"id":9,"val":"A9","col":"grey"},
{"id":10,"val":"B0","col":"grey"},
{"id":11,"val":"B1","col":"green"},
{"id":12,"val":"B2","col":"grey"},
{"id":13,"val":"B3","col":"grey"},
{"id":14,"val":"B4","col":"green"},
{"id":15,"val":"B5","col":"grey"},
{"id":16,"val":"B6","col":"grey"},
{"id":17,"val":"B7","col":"green"},
{"id":18,"val":"B8","col":"grey"},
{"id":19,"val":"B9","col":"grey"},
{"id":20,"val":"C0","col":"green"},
{"id":21,"val":"C1","col":"grey"},
{"id":22,"val":"C2","col":"grey"},
{"id":23,"val":"C3","col":"green"},
{"id":24,"val":"C4","col":"grey"},
{"id":25,"val":"C5","col":"grey"},
{"id":26,"val":"C6","col":"green"},
{"id":27,"val":"C7","col":"grey"},
{"id":28,"val":"C8","col":"grey"},
{"id":29,"val":"C9","col":"green"},
{"id":30,"val":"D0","col":"grey"},
{"id":31,"val":"D1","col":"grey"},
{"id":32,"val":"D2","col":"green"},
{"id":33,"val":"D3","col":"grey"},
{"id":34,"val":"D4","col":"grey"},
{"id":35,"val":"D5","col":"green"},
{"id":36,"val":"D6","col":"grey"},
{"id":37,"val":"D7","col":"grey"},
{"id":38,"val":"D8","col":"green"},
{"id":39,"val":"D9","col":"grey"},
{"id":40,"val":"D10","col":"grey"},
{"id":41,"val":"E0","col":"green"},
{"id":42,"val":"E1","col":"grey"},
{"id":43,"val":"E2","col":"grey"},
{"id":44,"val":"E3","col":"green"},
{"id":45,"val":"E4","col":"grey"},
{"id":46,"val":"E5","col":"grey"},
{"id":47,"val":"E6","col":"green"},
{"id":48,"val":"E7","col":"grey"},
{"id":49,"val":"E8","col":"grey"},
{"id":50,"val":"E9","col":"green"},
{"id":51,"val":"F0","col":"grey"},
{"id":52,"val":"F1","col":"grey"},
{"id":53,"val":"F2","col":"green"},
{"id":54,"val":"F3","col":"grey"},
{"id":55,"val":"F4","col":"grey"},
{"id":56,"val":"F5","col":"green"},
{"id":57,"val":"F6","col":"grey"},
{"id":58,"val":"F7","col":"grey"},
{"id":59,"val":"F8","col":"green"},
{"id":60,"val":"F9","col":"grey"},
{"id":61,"val":"G0","col":"grey"},
{"id":62,"val":"G1","col":"green"},
{"id":63,"val":"G2","col":"grey"},
{"id":64,"val":"G3","col":"grey"},
{"id":65,"val":"G4","col":"green"},
{"id":66,"val":"G5","col":"grey"},
{"id":67,"val":"G6","col":"grey"},
{"id":68,"val":"G7","col":"green"},
{"id":69,"val":"G8","col":"grey"},
{"id":70,"val":"G9","col":"grey"},
{"id":71,"val":"H0","col":"green"},
{"id":72,"val":"H1","col":"grey"},
{"id":73,"val":"H2","col":"grey"},
{"id":74,"val":"H3","col":"green"},
{"id":75,"val":"H4","col":"grey"},
{"id":76,"val":"H5","col":"grey"},
{"id":77,"val":"H6","col":"green"},
{"id":78,"val":"H7","col":"grey"},
{"id":79,"val":"H8","col":"grey"},
{"id":80,"val":"H9","col":"green"},
{"id":81,"val":"I0","col":"grey"},
{"id":82,"val":"I1","col":"grey"},
{"id":83,"val":"I2","col":"green"},
{"id":84,"val":"I3","col":"grey"},
{"id":85,"val":"I4","col":"grey"},
{"id":86,"val":"I5","col":"green"},
{"id":87,"val":"I6","col":"grey"},
{"id":88,"val":"I7","col":"grey"},
{"id":89,"val":"I8","col":"green"},
{"id":90,"val":"I9","col":"grey"},
{"id":91,"val":"J0","col":"grey"},
{"id":92,"val":"J1","col":"green"},
{"id":93,"val":"J2","col":"grey"},
{"id":94,"val":"J3","col":"grey"},
{"id":95,"val":"J4","col":"green"},
{"id":96,"val":"J5","col":"grey"},
{"id":97,"val":"J6","col":"grey"},
{"id":98,"val":"J7","col":"green"},
{"id":99,"val":"J8","col":"grey"}];
$scope.available=0;

for (index in $scope.bookingstatus){
	var row=$scope.bookingstatus[index];
	
	for (key in row){
	  if( row.hasOwnProperty( key ) ) {
			if(row[key]=='green'){
				$scope.available++;
			}
		} 
	}	
}
$scope.choosen=[];
$scope.clicked=function(row,col){
	if($scope.bookingstatus[row][col]=='green'){
		$scope.choosen.push({row,col});  
		$scope.bookingstatus[row][col]='blue';	
		$scope.available--;		
	}	 console.log($scope.choosen);
  }
 
  
  
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
