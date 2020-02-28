var app = angular.module('myApp', []);
app.controller('homeController', function($scope) {
  $scope.fonts = ['Times', 'Roboto Mono','Odibee Sans','Trade Winds','Indie Flower','Dancing Script','Shadows Into Light','Righteous','Amatic SC','Kaushan Script','Kalam','Satisfy','ABeeZee','Cormorant Garamond'];

  setInterval(function(){ 
    content = document.getElementById("contentArea").innerHTML;
    if (content != "") {
      document.getElementById("wordCountId").innerHTML = "Word Count: " + content.split(" ").length;
    } else {
      document.getElementById("wordCountId").innerHTML = "Word Count: 0";
    }
  }, 1000);

  //for exporting doc
  jQuery(document).ready(function($) {
    $("a.word-export").click(function(event) {
      $("#page-content").wordExport($scope.fileName);
    });
  });

function centerP() {
  document.getElementById("contentArea").style.textAlign = "center";
}

function leftP() {
  document.getElementById("contentArea").style.textAlign = "left";
}

function rightP() {
  document.getElementById("contentArea").style.textAlign = "right";
}

function justifyP() {
  document.getElementById("contentArea").style.textAlign = "justify";
}

//--------------------
// End of homeContoller
//
});
