//get all checkbox elements
var checkboxes = document.getElementsByTagName("input");

for(var i = 0; i < checkboxes.length; i++) {
  //add an event listener on each checkbox
  checkboxes[i].addEventListener('click', function(event){
    //get the parent node - the list element
    var liElement = event.target.parentNode;

    //strike through text on list if checked, if not, remove stike through
    if (event.target.checked){
      liElement.style.textDecoration = "line-through";
    } else {
      if (liElement.style.textDecoration = "line-through"){
        liElement.style.textDecoration = "none";
      }
    }
  });
}

