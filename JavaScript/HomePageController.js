var app = angular.module('myApp', []);
app.controller('homeController', function($scope) {
    //$scope.colors = ["purple", "blue", "green", "pink", "white", "black"];


/*function downloadInnerHtml(filename, elId){
  var ehtml = document.getElementById(elId).innerHTML;
  var link = document.createElement('a');
  link.setAttribute('download', filename);
  link.setAttribute('href', 'data:', + 'text/doc' + ';charset=utf-8,' + encondeURIComponet(elHTML));
//  link.click();
  //var filename= 'tags.doc';
//  downloadInnerHtml(filename, 'main');
}*/

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

	function myFunction() {
	  if (window.pageYOffset >= sticky) {
	    navbar.classList.add("sticky")
	  } else {
	    navbar.classList.remove("sticky");
	  }
	}
});

