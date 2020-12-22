
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterC");
  if (c == "all") c = "";

  for (i = 0; i < x.length; i++) {
    CFRemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) CFAddClass(x[i], "show");
  }
}

function CFAddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function CFRemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

