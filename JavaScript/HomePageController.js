var app = angular.module('myApp', []);
app.controller('homeController', function($scope) {
  scope = $scope;
  //$scope.colors = ["purple", "blue", "green", "pink", "white", "black"];
  scope.fonts = ["Normal", "Italic", "Oblique"];

});

function centerP() {
  document.getElementById("myP").style.textAlign = "center";
}

function leftP() {
  document.getElementById("myP").style.textAlign = "left";
}

function rightP() {
  document.getElementById("myP").style.textAlign = "right";
}

function justifyP() {
  document.getElementById("myP").style.textAlign = "justify";
}
//for exporting doc
jQuery(document).ready(function($) {
  $("a.word-export").click(function(event) {
    $("#page-content").wordExport();
  });
});
