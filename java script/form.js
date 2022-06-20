
function validate(id) {
  
  if (id == "Name") {
    var fName = document.getElementById("Name").value;
    var filter2 = /^[a-z][a-z\s]*$/;
    if (fName == "") {
      document.getElementById("Name").style.border = "3px solid red";
      error2.innerHTML = "<span style='color: red; font-size: 10px;'>" + "Please Enter A  Name</span>";
      //  

      return false;
    } else {
      if (!fName.match(filter2)) {
        document.getElementById("Name").style.border = "3px solid red";
        error2.innerHTML = "<span style='color: red; font-size: 10px;'>" + "Please Enter String</span>";
        return false;
      }
      else {
        error2.innerHTML = "";
        document.getElementById("Name").style.border = "";
      }
    }
  }
  if (id == "email") {
    var Email = document.getElementById("email").value;
    var filter4 = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z\-])+\.)+([a-zA-Z]{2,4})+$/;
    if (Email == "") {
      document.getElementById("email").style.border = "3px solid red";
      error4.innerHTML = "<span style='color: red; font-size: 10px;'>" + "Please Enter Email</span>";
      return false;
    }
    else {
      if (!Email.match(filter4)) {
        document.getElementById("email").style.border = "3px solid red";
        error4.innerHTML = "<span style='color: red; font-size: 10px;'>" + "Please Enter valid Email</span>";
        return false;
      }
      else {
        error4.innerHTML = "";
        document.getElementById("email").style.border = "";
      }
    }

  }
}
