import ComponentWrapper from "../../components/ComponentWrapper";
import SectionInfo from "../../components/SectionInfo";
import { HEADING, MESSAGE } from "./constants";

const Categories = () => {
  return (
    <ComponentWrapper>
      <SectionInfo
        showHeading
        showMessage
        heading={HEADING}
        message={MESSAGE}
      />
    </ComponentWrapper>
  );
};

export default Categories;
