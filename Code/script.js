		const form = document.getElementById("form");
        const username = document.getElementById("username");
        const email = document.getElementById("email");
        const phone = document.getElementById("phone");
        const password =  document.getElementById("password");
        const cpassword = document.getElementById("cpassword");
		const table = document.getElementById('data');
		
		//add event
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            validate();
			//submit();
        })
		
		/*const submit = () => {
			let name = document.getElementById("username").value;
			let email = document.getElementById("email").value;
			let phone = document.getElementById("phone").value;


			let newArray = [name,email,phone];
			newArray.forEach((item)=>{
			var li = document.createElement("li");
			var text = document.createTextNode(item);
			li.appendChild(text);
			table.appendChild(li);
			})
			
		}*/
		
		const sendData = (usernameVal, sRate, count) => {
			if(sRate === count){
				alert('Registration Successful');
				swal("Welcome! " + usernameVal, "Registration Successful");
			}
		}
		
		//For Final Validation
		const successMsg = (usernameVal) => {
			let formCon = document.getElementsByClassName('form-control');
			var count = formCon.length - 1;
			for(var i=0; i<formCon.length; i++) {
				if(formCon[i].className === 'form-control success') {
					var sRate= 0+i;
					console.log(sRate);
					sendData(usernameVal, sRate, count);
				}else {
					return false;
				}
			}
		}
		
		const isEmail = (emailVal) => {
            var atSymbol = emailVal.indexOf("@");
            if(atSymbol < 1) return false;
            var dot = emailVal.lastIndexOf('.');
            if(dot <= atSymbol + 2) return false;
            if(dot === emailVal.length - 1) return false;
            return true;
        }
		
        const validate = () => {
            const usernameVal = username.value.trim();
            const emailVal = email.value.trim();
            const phoneVal = phone.value.trim();
            const passwordVal = password.value.trim();
            const cpasswordVal = cpassword.value.trim();

            //validate username
            if(usernameVal === "") {
                setErrorMsg(username, 'Username cannot be blank');
            }else if(usernameVal.length<3) {
                setErrorMsg(username, "Username length should be minimum of 3 characters")
            }else {
                setSuccessMsg(username);
            }
			
            //validate email
            if(emailVal === "") {
                setErrorMsg(email, 'Email cannot be blank');
            }else if(!isEmail(emailVal)) {
                setErrorMsg(email, "Not a valid email")
            }else {
                setSuccessMsg(email);
            }

            //validate mobile number
            if(phoneVal === "") {
                setErrorMsg(phone, 'Mobile number cannot be blank');
            }else if(phoneVal.length != 10) {
                setErrorMsg(phone, "Not a valid number")
            }/*else if(phoneVal.type !== 'Number'){
				setErrorMsg(phone, "Phone number should include only digits");
			}*/else {
                setSuccessMsg(phone);
            }

            if(passwordVal === "") {
                setErrorMsg(password, 'Password cannot be blank');
            }else if(passwordVal.length < 6) {
                setErrorMsg(password, "Password must contain atleast 6 characters");
            }else {
                setSuccessMsg(password);
            }

            if(cpasswordVal === "") {
                setErrorMsg(cpassword, 'Confirm password cannot be blank');
            }else if(cpasswordVal != passwordVal) {
                setErrorMsg(cpassword, "Password doesn't match");
            }else {
                setSuccessMsg(cpassword);
            }
			successMsg(usernameVal);

        }
          
        function setErrorMsg(input, errormsgs) {
            const formControl = input.parentElement;
            const small = formControl.querySelector('small');
            formControl.className = "form-control error";
            small.innerText = errormsgs;
        }

        function setSuccessMsg(input) {
            const formControl = input.parentElement;
            formControl.className = "form-control success";
        }
