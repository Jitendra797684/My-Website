
        function validate(id) {
          
          
          var Name = document.getElementById("Name").value;
          var Email = document.getElementById("Email").value;
          var Massage = document.getElementById("Massage").value;
            
            var validation = true;



            if (id == "Name") {
                var Name = document.getElementById("Name").value;
                
                var string = /^[a-z][a-z\s]*$/;
                if (Name == "") {
                    document.getElementById("Name").style.border = "1px solid red";
                    errorname.innerHTML = "<span style='color: red; font-size: 12px;'>" + "*Name cannot be blank</span>"
                    return false;
                } else {
                    if (!Name.match(string)) {
                      errorname.innerHTML = "<span style='color: red; font-size: 12px;'>" + "*Please Enter A String .</span>"
                        // document.getElementById("firstName").style.border="1px solid red";
                        return false;
                       
                    }
                    errorname.innerHTML = "";
                    document.getElementById("Name").style.border ="none";
                    validation = false;
                }
            }

       

            if (id == "Email") {
              var Email = document.getElementById("Email").value;
                const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                if (Email == "") {
                    erroremail.innerHTML = "<span style='color: red; font-size: 10px;'>" + "*Email cannot be blank</span>"
                    document.getElementById("Email").style.border = "1px solid red";
                    return false;
                }
                else {
                    if (!re.test(Email)) {
                        erroremail.innerHTML = "<span style='color: red; font-size: 10px;'>" + "*Email is not valid.</span>"
                        document.getElementById("Email").style.border = "1px solid red";
                        return false;
                    }
                    erroremail.innerHTML = "";
                    document.getElementById("Email").style.border = "none";
                    validation = false;

                }
            }

            if (id == "Massage") {
               
              var Massage = document.getElementById("Massage").value;
                if (Massage == "") {
                    errorMassage.innerHTML = "<span style='color: red; font-size: 10px;'>" + "*Massage cannot be blank</span>"
                    document.getElementById("Massage").style.border = "1px solid red";
                    return false;
                    
                }
                else {
                   
                    errorMassage.innerHTML = "";
                    document.getElementById("Massage").style.border = "none";
                    validation = false;


                }

            }
           
        }
        function checkForm(form)
        {
          
          if(form.inputfield.value == "") {
              errorname.innerHTML = "<span style='color: red; font-size: 12px;'>" + "*Name cannot be blank</span>"
              form.inputfield.focus();
            return false;
          }
          var re = /^[a-z][a-z\s]*$/;
          if(!re.test(form.inputfield.value)) {
                    
            errorname.innerHTML = "<span style='color: red; font-size: 12px;'>" + "*Please Enter Valid Name</span>"

            form.inputfield.focus();
            return false;
          }

          if(form.inputfield1.value == "") {
            
            errorname.innerHTML = "<span style='color: red; font-size: 12px;'>" + "*Email cannot be blank</span>"
            form.inputfield.focus();
            return false;
          }
                var se =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if(!se.test(form.inputfield1.value)) {
            
                  erroremail.innerHTML = "<span style='color: red; font-size: 12px;'>" + "*Please Enter Valid Email</span>"
                  form.inputfield1.focus();
                  return false;
          }
      
          if(form.inputfield2.value == "") {
            
            errormassage.innerHTML = "<span style='color: red; font-size: 12px;'>" + "*Massage Can't blank</span>"
            form.inputfield2.focus();
            return false;
          }
          return true;
        }
       