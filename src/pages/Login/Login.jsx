import { Link } from "react-router-dom";
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
} from "./constants";

const Login = () => {
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
        <Input label="Email" identifier="email" type="email" />
        <Input label="Password" identifier="password" type="password" />
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
