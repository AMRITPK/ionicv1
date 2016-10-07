angular.module('starter.services', [])

.factory('Movies', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var movies=[{id:"m1",name:"Drishyam",language:"malayalam",genre:"family",poster:"img/drishyam.png",cast:"Mohanlal",highlight:"Mohanlal Movie",description:"cast:moasdfasdf asdfa hherrthfggh dbbdfg dfgsdffg sdfg s sdfg  sdfg  sdfg" ,showtimings:['11:00','13:00','14:45','18:00'],others:''},
{id:"m2",name:"Oppam",language:"malayalam",genre:"family",poster:"img/oppam.png",cast:"Mohanlal",highlight:"Mohanlal Movie",description:"cast:moasdfasdf asdfa hherrthfggh dbbdfg dfgsdffg sdfg s sdfg  sdfg  sdfg" ,showtimings:['13:00','14:45','18:30'],others:''},
{id:"m3",name:"PAULO KOHLEO",language:"malayalam",genre:"family",poster:"http://data1.ibtimes.co.in/cache-img-0-450/en/full/614193/1469777369_kochavva-paulo-ayyappa-coelho.jpg",cast:"Kunchako",highlight:"Comedy Movie",description:"cast:moasdfasdf asdfa hherrthfggh dbbdfg dfgsdffg sdfg s sdfg  sdfg  sdfg" ,showtimings:['11:00','13:00','18:00'],others:''},
{id:"m4",name:"Pink",language:"hindi",genre:"action",poster:"https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Pinkmovieposter.jpg/220px-Pinkmovieposter.jpg",cast:"Aamitab",highlight:"Aamitab Movie",description:"cast:moasdfasdf asdfa hherrthfggh dbbdfg dfgsdffg sdfg s sdfg  sdfg  sdfg" ,showtimings:['11:00','13:00','14:45','18:00'],others:''},
{id:"m5",name:"Martian",language:"english",genre:"thriller",poster:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_UY1200_CR90,0,630,1200_AL_.jpg",cast:"English",highlight:"Space related adventure",description:"cast:moasdfasdf asdfa hherrthfggh dbbdfg dfgsdffg sdfg s sdfg  sdfg  sdfg" ,showtimings:['11:00','14:45','18:00'],others:''}];
  return {
    all: function() {
      return movies;
    },
    get: function(movieid) {
      for (var i = 0; i < movies.length; i++) {
        if (movies[i].id == movieid) {
          return movies[i];
        }
      }
      return null;
    }
  };
});
