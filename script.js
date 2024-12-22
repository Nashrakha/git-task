document.getElementById("searchButton").addEventListener("click", function () {
       const input = document.getElementById("userData").value.trim();
       if (input.toLocaleLowerCase() === "shreekant-04") {
              document.getElementById("shreekant-04").style.display = "block";
              document.getElementById("crackerghost").style.display = "none";
       }
       if (input.toLocaleLowerCase() === "crackerghost") {
              document.getElementById("shreekant-04").style.display = "none";
              document.getElementById("crackerghost").style.display = "block";
       } else {
              alert("USer not Found! isme ye do data hai: shreekant-04,crackerghost")
       }
});