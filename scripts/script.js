//modal box for agent filtering button
var modal = document.getElementById("filter_modal");
var filter_btn = document.getElementById("filter_button");
var span = document.getElementsByClassName("close")[0];

filter_btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal){
    modal.style.display = "none";
  }
}
