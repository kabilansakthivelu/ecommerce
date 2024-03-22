import { Link } from "react-router-dom";
import ComponentWrapper from "../../components/ComponentWrapper";
import SectionInfo from "../../components/SectionInfo";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import { HEADING, REDIRECTION_TEXT, NEXT_PAGE_TEXT } from "./constants";

const Register = () => {
  return (
    <ComponentWrapper>
      <SectionInfo showHeading heading="Create your account" />
      <form>
        <Input label="Name" identifier="name" type="name" />
        <Input label="Email" identifier="email" type="email" />
        <Input label="Password" identifier="password" type="password" />
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
