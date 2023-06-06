import { useEffect, useState } from "react";
import { FaGooglePlusG } from "react-icons/fa";
import { useFormik } from "formik";
import { useRouter } from "next/router";

import Social from "../social/Social";

const isValidUsername = (username) => /^[a-z0-9]{6}$/.test(username);
const isValidEmail = (email) =>
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
const toLowerCase = (text) => String(text).toLowerCase();
const validate = (values) => {
  const errors = {};
  if (!values.sername) errors.username = "*required";
  else if (isValidUsername(toLowerCase(values.username)))
    errors.username = "*username should be alpha numeric";
  else if (values.username.length < 7) errors.username = "*min 6 characters";
  if (!values.email) errors.email = "*requried";
  else if (!isValidEmail(toLowerCase(values.email)))
    errors.email = "*invalid email";
  if (!values.password) errors.password = "*requried";
  if (values.password.length < 7) errors.password = "*min 8 characters";
  if (!values.confirmPassword) errors.confirmPassword = "*requried";
  else if (values.confirmPassword !== values.password)
    errors.confirmPassword = "*password and confirm password are not same";

  console.log(errors);
  return errors;
};

const SignUp = () => {
  const handleRequest = (data) => {
    setStatus({
      error: data.error,
      message: data.message,
      status: data.status,
    });
    if (!data.error) {
      form.resetForm();
      setTimeout(() => {}, 3500);
    }
  };

  const { id } = useRouter();

  useEffect(() => {}, []);

  const [referral, setReferral] = useState({
    referralCode: "",
    referrals: [],
    username: "",
  });

  const [status, setStatus] = useState({
    message: "",
    status: "",
    error: false,
  });

  // const [createAccount, { data, loading, error, called }] = useMutation(
  //   UserApi.
  // );

  const form = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      username: "",
      confirmPassword: "",
      referralCode: id || "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div
      className="modal fade"
      id="signupModal"
      tabIndex="2"
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-body">
            <div className="account-form-area">
              <button
                type="button"
                className="close-btn"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="las la-times"></i>
              </button>
              <h3 className="title">Open Free Account</h3>
              <div className="account-form-wrapper">
                <form>
                  <div className="form-group">
                    <label>
                      Email <sup>*</sup>
                    </label>
                    <input
                      onChange={form.handleChange}
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter your Email"
                      required
                      value={form.values.email}
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      Username <sup>*</sup>
                    </label>
                    <input
                      onChange={form.handleChange}
                      type="email"
                      name="username"
                      id="username"
                      placeholder="Enter your Username"
                      required
                      value={form.values.username}
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      password <sup>*</sup>
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      onChange={form.handleChange}
                      placeholder="password"
                      required
                      value={form.values.password}
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      confirm password <sup>*</sup>
                    </label>
                    <input
                      onChange={form.handleChange}
                      type="password"
                      name="confirmPassword"
                      id="confirmPassword"
                      placeholder="Confirm Password"
                      required
                      value={form.values.confirmPassword}
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      referral code <sup>*</sup>
                    </label>
                    <input
                      type="text"
                      name="referralCode"
                      id="referralCode"
                      placeholder="Enter code"
                      onChange={form.handleChange}
                      value={form.values.referralCode}
                    />
                  </div>
                  <div className="d-flex flex-wrap mt-2">
                    <div className="custom-checkbox">
                      <input
                        type="checkbox"
                        name="id-2"
                        id="id-2"
                        defaultChecked
                      />
                      <label htmlFor="id-2">I agree to the</label>
                      <span className="checkbox"></span>
                    </div>
                    <a href="#0" className="link ml-1">
                      Terms, Privacy Policy and Fees
                    </a>
                  </div>
                  <div className="form-group text-center mt-5">
                    <button className="cmn-btn">log in</button>
                  </div>
                </form>
                <p className="text-center mt-4">
                  {" "}
                  Already have an account?{" "}
                  <button
                    onClick={form.handleSubmit}
                    data-bs-toggle="modal"
                    data-bs-target="#loginModal"
                  >
                    Login
                  </button>
                </p>
                <div className="divider">
                  <span>or</span>
                </div>

                {/* social links here */}
                <Social
                  items={[
                    // [FaFacebookF, "/"],
                    // [FaTwitter, "/"],
                    [FaGooglePlusG, "/"],
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
