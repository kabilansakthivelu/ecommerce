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
  REDIRECTION_TEXT,
  NEXT_PAGE_TEXT,
  NEW_USER_INFO_INITIAL_STATE,
} from "./constants";

const Register = () => {
  const [newUserInfo, setNewUserInfo] = useState(NEW_USER_INFO_INITIAL_STATE);
  const [showFullPageLoader, setShowFullPageLoader] = useState(false);
  const navigate = useNavigate();

  const handleNewUserInfoChange = (field, value) => {
    setNewUserInfo({ ...newUserInfo, [field]: value });
  };

  const { name, email, password } = newUserInfo;

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!name.trim().length) {
      toast.error("Please enter a valid username.", { position: "top-right" });
    } else {
      setShowFullPageLoader(true);
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        await db
          .collection("users")
          .doc(auth.currentUser.uid)
          .set({ name });
        navigate("/emailVerification");
      } catch (error) {
        let error1 = error.message.split(":");
        let error2 = error1[1].split("(");
        toast.error(error2[0], { position: "top-right" });
      } finally {
        setShowFullPageLoader(false);
      }
    }
  };

  return (
    <ComponentWrapper>
      {showFullPageLoader && <FullPageLoader />}
      <SectionInfo showHeading heading={HEADING} />
      <form>
        <Input
          label="Name"
          identifier="name"
          type="name"
          value={name}
          handleChange={handleNewUserInfoChange}
        />
        <Input
          label="Email"
          identifier="email"
          type="email"
          value={email}
          handleChange={handleNewUserInfoChange}
        />
        <Input
          enableShowPassword
          label="Password"
          identifier="password"
          type="password"
          value={password}
          handleChange={handleNewUserInfoChange}
        />
        <Button title={HEADING} handleClick={handleSignUp} />
        <hr />
        <Footer
          redirectionPath="/login"
          redirectionText={REDIRECTION_TEXT}
          nextPage={NEXT_PAGE_TEXT}
        />
      </form>
    </ComponentWrapper>
  );
};

export default Register;
