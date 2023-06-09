import { FaGooglePlusG } from "react-icons/fa";

import { useFormik } from "formik";
import { useRouter } from "next/router";
import { UserApi } from "../../pages/api/user";

import Social from "../social/Social";

import { useMutation } from "@apollo/client";
import toast, { Toaster } from "react-hot-toast";
import { MdWarning } from "react-icons/md";
import { BiRightArrow } from "react-icons/bi";

const isValidUsername = (username) => /^[a-z0-9]{6}$/.test(username);
const isValidEmail = (email) =>
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
const toLowerCase = (text) => String(text).toLowerCase();
const validate = (values) => {
  const errors = {};
  if (!values.username) errors.username = "*required";
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

  return errors;
};

function eToster(message, duration, bg, color, icon) {
  return toast.custom(
    <div
      style={{
        maxWidth: "820px",
        padding: "1rem",
        borderRadius: "1rem",
        background: bg,
        color: color,
        display: "flex",
        columnGap: "1rem",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div> {icon}</div>
      <p style={{ color: color }}> {message}</p>
    </div>,
    { duration: duration }
  );
}

const FormError = (props) => (
  <div>
    {props.touched || props.name ? (
      <p style={{ color: "red" }}>{props.name}</p>
    ) : null}
  </div>
);

const SignUp = () => {
  const { id } = useRouter();

  const [createAccount, { data, loading, error, called }] = useMutation(
    UserApi.registerUser()
  );

  const form = useFormik({
    initialValues: {
      email: "",
      password: "",
      username: "",
      confirmPassword: "",
      referralCode: id || "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
      createAccount({
        variables: {
          ...values,
        },
      })
        .then((s) => {
          const resp = s.data.registerUser;
          console.log(resp);
          if (resp.error)
            return eToster(
              resp.message,
              4000,
              "orange",
              "white",
              <MdWarning />
            );

          form.resetForm();
          return eToster(
            resp.message,
            4000,
            "green",
            "white",
            <BiRightArrow />
          );
        })
        .catch((e) => {
          return eToster(e, 4000, "red", "white", <MdWarning />);
        });
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
                <div>
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
                    <FormError
                      touched={form.touched.email ?? false}
                      name={form.errors.email ?? ""}
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      Username <sup>*</sup>
                    </label>
                    <input
                      onChange={form.handleChange}
                      type="text"
                      name="username"
                      id="username"
                      placeholder="Enter your Username"
                      required
                      value={form.values.username}
                    />
                    <FormError
                      touched={form.touched.username ?? false}
                      name={form.errors.username ?? ""}
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

                    <FormError
                      touched={form.touched.password ?? false}
                      name={form.errors.password ?? ""}
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
                    <FormError
                      touched={form.touched.confirmPassword ?? false}
                      name={form.errors.confirmPassword ?? ""}
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
                    <button
                      onClick={() => form.handleSubmit()}
                      className="cmn-btn"
                    >
                      signup in
                    </button>
                  </div>
                </div>
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
      <Toaster />
    </div>
  );
};

export default SignUp;
