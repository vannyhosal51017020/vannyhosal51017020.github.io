document.addEventListener ("DOMContentLoaded", function() {

  var page = window.location.hash.substr(1);
  if (page == "") page = "home";
  loadPage(page);

  function loadPage (page) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4) {
        var content = document.querySelector("#body-content");
        if (this.status == 200) {
          content.innerHTML = xhttp.responseText;

          document.querySelectorAll(".collection-item, .topnav a, .sidenav a")
          .forEach(function(element) {

                element.addEventListener("click" , function(event) {
                  page = event.target.getAttribute("href").substr(1);
                  loadPage(page);
                });
              });
        } else if (this.status == 404) {
          content.innerHTML = "<p> Halaman <strong>" + page + "</strong> tidak ditemukan.</p>";
        } else {
          content.innerHTML = "<p>Ups.. Halaman <strong>" + page + "</strong> tidak dapat diakses.</p>";
        }
      }
    };

      xhttp.open("GET", "pages/" + page + ".html", true);
      xhttp.send();

    }
});
