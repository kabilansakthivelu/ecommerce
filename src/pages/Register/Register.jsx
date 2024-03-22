import { useState } from "react";
import ComponentWrapper from "../../components/ComponentWrapper";
import SectionInfo from "../../components/SectionInfo";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import {
  HEADING,
  REDIRECTION_TEXT,
  NEXT_PAGE_TEXT,
  NEW_USER_INFO_INITIAL_STATE,
} from "./constants";

const Register = () => {
  const [newUserInfo, setNewUserInfo] = useState(NEW_USER_INFO_INITIAL_STATE);

  const handleNewUserInfoChange = (field, value) => {
    setNewUserInfo({ ...newUserInfo, [field]: value });
  };

  const { name, email, password } = newUserInfo;

  return (
    <ComponentWrapper>
      <SectionInfo showHeading heading="Create your account" />
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
          label="Password"
          identifier="password"
          type="password"
          value={password}
          handleChange={handleNewUserInfoChange}
        />
        <Button title={HEADING} />
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
