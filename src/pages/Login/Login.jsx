import { useState, useRef } from "react";
import ComponentWrapper from "../../components/ComponentWrapper";
import SectionInfo from "../../components/SectionInfo";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
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
  const passwordRef = useRef();

  const handleUserInfoChange = (field, value) => {
    setUserInfo({ ...userInfo, [field]: value });
  };

  const handleShowPasswordToggle = () => {
    if (passwordRef && passwordRef.current) {
      const currentType = passwordRef.current.type;
      passwordRef.current.type = currentType === "text" ? "password" : "text";
    }
  };

  const getInputSuffix = () => {
    return <span onClick={handleShowPasswordToggle} style={{ cursor: 'pointer' }}>Show</span>;
  }

  const { email, password } = userInfo;

  return (
    <ComponentWrapper>
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
          label="Password"
          identifier="password"
          type="password"
          value={password}
          handleChange={handleUserInfoChange}
          suffix={getInputSuffix()}
          ref={passwordRef}
        />
        <Button title="LOGIN" />
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
