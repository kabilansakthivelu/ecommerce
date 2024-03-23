import { useState } from "react";
import { useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";
import { toast } from "react-toastify";
import { auth, db } from "../../firebase";
import ComponentWrapper from "../../components/ComponentWrapper";
import SectionInfo from "../../components/SectionInfo";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import FullPageLoader from "../../components/FullPageLoader";
import {
  HEADING,
  SUB_HEADING,
  MESSAGE,
  REDIRECTION_TEXT,
  NEXT_PAGE_TEXT,
  USER_INFO_INITIAL_STATE,
} from "./constants";

const Login = () => {
  const [userInfo, setUserInfo] = useState(USER_INFO_INITIAL_STATE);
  const [showFullPageLoader, setShowFullPageLoader] = useState(false);
  const navigate = useNavigate();

  const handleUserInfoChange = (field, value) => {
    setUserInfo({ ...userInfo, [field]: value });
  };

  const { email, password } = userInfo;

  const handleSignIn = async (e) => {
    e.preventDefault();
    setShowFullPageLoader(true);
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      await db
        .collection("users")
        .doc(auth.currentUser.uid)
        .get()
        .then((snapshot) => {
          navigate("/");
        });
    } catch (error) {
      let error1 = error.message.split(":");
      let error2 = error1[1].split("(");
      toast.error(error2[0], { position: "top-right" });
    } finally {
      setShowFullPageLoader(false);
    }
  };

  return (
    <ComponentWrapper>
      {showFullPageLoader && <FullPageLoader />}
      <SectionInfo
        showHeading
        showSubHeading
        showMessage
        heading={HEADING}
        subHeading={SUB_HEADING}
        message={MESSAGE}
      />
      <form>
        <Input
          label="Email"
          identifier="email"
          type="email"
          value={email}
          handleChange={handleUserInfoChange}
        />
        <Input
          enableShowPassword
          label="Password"
          identifier="password"
          type="password"
          value={password}
          handleChange={handleUserInfoChange}
        />
        <Button title="LOGIN" handleClick={handleSignIn} />
        <hr />
        <Footer
          redirectionPath="/register"
          redirectionText={REDIRECTION_TEXT}
          nextPage={NEXT_PAGE_TEXT}
        />
      </form>
    </ComponentWrapper>
  );
};

export default Login;
