import { useMutation } from "@apollo/client";
import { useFormik } from "formik";
import { BiRightArrow } from "react-icons/bi";
import { FaFacebookF, FaGooglePlusG, FaTwitter } from "react-icons/fa";
import { MdWarning } from "react-icons/md";
import { UserApi } from "../../pages/api/user";
import Social from "../social/Social";

import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";

const isValidUsername = (username) => /^[a-z0-9]{6}$/.test(username);
const toLowerCase = (text) => String(text).toLowerCase();
const validate = (values) => {
  const errors = {};
  if (!values.username) errors.username = "*required";
  else if (isValidUsername(toLowerCase(values.username)))
    errors.username = "*username should be alpha numeric";
  else if (values.username.length < 7) errors.username = "*min 6 characters";
  if (!values.password) errors.password = "*requried";
  if (values.password.length < 7) errors.password = "*min 8 characters";
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
      <div style={{ color: color }}> {message}</div>
    </div>,
    { duration: duration }
  );
}

const FormError = (props) => (
  <div>
    {props.touched || props.name ? (
      <div style={{ color: "red" }}>{props.name}</div>
    ) : null}
  </div>
);

const Login = () => {
  const router = useRouter();

  const [login, { data, loading, error, called }] = useMutation(
    UserApi.loginUser()
  );

  const form = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
      login({
        variables: {
          ...values,
        },
      })
        .then((s) => {
          console.log(s);
          const resp = s.data.loginUser;
          console.log(resp);
          if (resp.error)
            return eToster(
              resp.message,
              4000,
              "orange",
              "white",
              <MdWarning />
            );
          localStorage.setItem("username", resp.username);
          localStorage.setItem("userId", resp.userId);
          router.push("/user-info");
          window.location.reload();
          // return eToster(
          //   resp.message,
          //   4000,
          //   "green",
          //   "white",
          //   <BiRightArrow />
          // );
        })
        .catch((e) => {
          console.log(e);
          // return eToster(e, 4000, "red", "white", <MdWarning />);
        });
    },
  });

  return (
    <div
      className="modal fade"
      id="loginModal"
      tabIndex="1"
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
              <h3 className="title">Welcome Back</h3>
              <div className="account-form-wrapper">
                <div>
                  <div className="form-group">
                    <label>
                      Email <sup>*</sup>
                    </label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      onChange={form.handleChange}
                      placeholder="Enter your Username"
                      required
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
                      placeholder="password"
                      onChange={form.handleChange}
                      required
                    />
                    <FormError
                      touched={form.touched.password ?? false}
                      name={form.errors.password ?? ""}
                    />
                  </div>
                  <div className="d-flex flex-wrap justify-content-between mt-2">
                    <div className="custom-checkbox">
                      <input
                        type="checkbox"
                        name="id-1"
                        id="id-1"
                        defaultChecked
                        required
                      />
                      <label htmlFor="id-1">Remember Password</label>
                      <span className="checkbox"></span>
                    </div>
                    <a href="#0" className="link">
                      Forgot Password?
                    </a>
                  </div>
                  <div className="form-group text-center mt-5">
                    <button onClick={form.handleSubmit} className="cmn-btn">
                      log in
                    </button>
                  </div>
                </div>
                <p className="text-center mt-4">
                  Don&#39;t have an account?{" "}
                  <a
                    href="#0"
                    data-bs-toggle="modal"
                    data-bs-target="#signupModal"
                  >
                    {" "}
                    Sign Up Now
                  </a>
                </p>
                <div className="divider">
                  <span>or</span>
                </div>

                {/* social links here */}
                <Social
                  items={[
                    [FaFacebookF, "/"],
                    [FaTwitter, "/"],
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

export default Login;
