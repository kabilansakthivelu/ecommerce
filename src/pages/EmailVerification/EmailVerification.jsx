import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import ComponentWrapper from "../../components/ComponentWrapper";
import SectionInfo from "../../components/SectionInfo";
import Button from "../../components/Button";
import OtpInput from "../../components/OtpInput";
import withAuthentication from "../../hoc/withAuthentication";
import { auth, db } from "../../firebase";
import { SUBMIT_BUTTON_TEXT, HEADING, MESSAGE, OTP_DIGITS_LENGTH, TEMP_OTP_CODE } from "./constants";

const EmailVerification = () => {
  const otpRef = useRef(Array(OTP_DIGITS_LENGTH).fill(null));
  const navigate = useNavigate();

  useEffect(() => {
    const documentRef = db.collection("users").doc(auth.currentUser.uid);
    documentRef.get().then((doc) => {
      if (doc.exists) {
        const data = doc.data();
        if (data.isEmailVerified) {
          navigate("/");
        }
      }
    });
  }, []);

  const handleVerification = () => {
    const enteredOtp = otpRef.current.reduce((str, ref) => str + ref.value, '');
    if (enteredOtp !== TEMP_OTP_CODE) {
      toast.error('Please enter valid OTP (12345678)', { position: 'top-right' });
    } else {
      db.collection("users")
        .doc(auth.currentUser.uid)
        .update({ isEmailVerified: true });
      navigate("/");
    }
  };

  return (
    <ComponentWrapper>
      <SectionInfo
        showHeading
        heading={HEADING}
        showMessage
        message={MESSAGE}
      />
      <OtpInput digitsCount={OTP_DIGITS_LENGTH} ref={otpRef} />
      <Button title={SUBMIT_BUTTON_TEXT} handleClick={handleVerification} />
    </ComponentWrapper>
  );
};

export default withAuthentication(EmailVerification);
