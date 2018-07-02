var app = angular.module('myApp', []);
app.controller('homeController', function($scope) {
    //$scope.colors = ["purple", "blue", "green", "pink", "white", "black"];
});

/*function downloadInnerHtml(filename, elId){
  var ehtml = document.getElementById(elId).innerHTML;
  var link = document.createElement('a');
  link.setAttribute('download', filename);
  link.setAttribute('href', 'data:', + 'text/doc' + ';charset=utf-8,' + encondeURIComponet(elHTML));
//  link.click();
  //var filename= 'tags.doc';
//  downloadInnerHtml(filename, 'main');
}*/

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
