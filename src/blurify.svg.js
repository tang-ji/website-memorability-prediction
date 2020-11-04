var svgs = document.getElementsByTagName("svg");
for(var i = 0, len = svgs.length;i<len;i++){
  var node = document.createElement("defs");
  node.innerHTML = '<filter id="f1"><feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur"/></filter>';
  svgs[i].appendChild(node);
}
var paths = document.getElementsByTagName("path");
for(var i = 0, len = paths.length;i<len;i++){
  paths[i].style['filter']=paths[i].style['-webkit-filter']= "url(#f1)";
}
var paths = document.getElementsByTagName("rectangle");
for(var i = 0, len = paths.length;i<len;i++){
  paths[i].style['filter']=paths[i].style['-webkit-filter']= "url(#f1)";
}
var paths = document.getElementsByTagName("circle");
for(var i = 0, len = paths.length;i<len;i++){
  paths[i].style['filter']=paths[i].style['-webkit-filter']= "url(#f1)";
}