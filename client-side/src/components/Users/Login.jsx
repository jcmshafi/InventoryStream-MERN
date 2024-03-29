import { useRef } from "react";
import { Link } from "react-router-dom";
import { LoginRequest } from "../../APIRequest/UsersAPIRequest";
import { ErrorToast, IsEmail, IsEmpty } from "../../helper/FormHelper";

const Login = () => {
  let passRef,
    emailRef = useRef();

  const SubmitLogin = async () => {
    let email = emailRef.value;
    let pass = passRef.value;

    if (IsEmail(email)) {
      ErrorToast("Invalid Email Address");
    } else if (IsEmpty(pass)) {
      ErrorToast("Password Required");
    } else {
      let result = await LoginRequest(email, pass);
      if (result) {
        window.location.href = "/";
      }
    }
  };

  return (
    <div className="container vh-100 d-flex align-items-center">
        <div className="row justify-content-center w-100">
            <div className="col-md-7 col-lg-6 center-screen">
                <div className="card w-90  p-4">
                    <div className="card-body">
                        <h3>SIGN IN</h3>
                        <br/>
                        <input ref={(input)=>emailRef=input} placeholder="User Email" className="form-control" type="email"/>
                        <br/>
                        <input ref={(input)=>passRef=input} placeholder="User Password" className="form-control" type="password"/>
                        <br/>
                        <button onClick={SubmitLogin} className="btn btn-success w-100 animated ">Next</button>
                        <div className="float-end mt-3">
                            <span>
                                <Link className="text-center ms-3 h6" to="/Registration">Sign Up</Link>
                                <span className="ms-1">|</span>
                                <Link className="text-center ms-3 h6" to="/SendOTP">Forget Password</Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};
export default Login;
