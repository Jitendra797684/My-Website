
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
  if (id == "password") {
    var str = document.getElementById("password").value;
    let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
    let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')
    if (str == "") {
      errorpass.style.backgroundColor = "";
      errorpass.innerHTML = "<span style='color: red; font-size: 12px;'>" + "*Please Enter Password</span>"
      return false;
    } else {
      if (strongPassword.test(str)) {
        errorpass.style.backgroundColor = "green";
        errorpass.innerHTML = "<span style='color: white; font-size: 12px; padding:10px;'>" + "Strong Password</span>"
      } else if (mediumPassword.test(str)) {
        errorpass.style.backgroundColor = 'blue';
        errorpass.innerHTML = "<span style='color: white; font-size: 12px; padding:10px;'>" + "Medium Password</span>"
      }
      else {
        errorpass.style.backgroundColor = 'red';
        errorpass.innerHTML = "<span style='color: white; font-size: 12px; padding:10px;'>" + "Weak Password</span>"
      }
    }
  }
}
