import { useState } from "react";
import { FormControlLabel, IconButton, useMediaQuery } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import { S } from "./styles";
import CopyIcon from "../../../assets/icons/CopyIcon.svg";
import { DEVICE_TYPE } from "../../../utils/constants";
import PrimaryButton from "../../buttons/PrimaryButton";
import axios from "axios";
import { shortenedLink } from "../../../utils/index";

const Scan = ({ deviceType, data, handleClose }) => {
  const [iosSteps, setIosSteps] = useState({
    iosStep1: false,
    iosStep2: false,
    iosStep3: false,
  });
  const [androidSteps, setAndroidSteps] = useState({
    step1: false,
    step2: false,
    step3: false,
  });
  const [disableVerification, setDisableVerification] = useState(false);
  const medium = useMediaQuery("(max-width:899.95px)");
  const [verificationLoading, setVerificationLoading] = useState(false);

  const handleChange = (event) => {
    setAndroidSteps({
      ...androidSteps,
      [event.target.name]: event.target.checked,
    });
  };

  const handleIosStepChange = (event) => {
    setIosSteps({
      ...iosSteps,
      [event.target.name]: event.target.checked,
    });
  };

  const { step1, step2, step3 } = androidSteps;
  const { iosStep1, iosStep2, iosStep3 } = iosSteps;
  const error = [step1, step2, step3].filter((v) => v).length < 3;
  const iosError = [iosStep1, iosStep2, iosStep3].filter((v) => v).length < 3;
  const qrData = "data:image/png;base64," + data?.activationCode;

  const handleVerification = () => {
    setVerificationLoading(true);
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/api/wallet/verify/installation`,
        {
          iccid: data?.iccid,
        }
      )
      .then((res) => {
        handleClose();
        setVerificationLoading(false);
      });
  };

  return (
    <S.ScanContainer>
      <S.ScanContent>
        <S.ScanQRContent>
          {deviceType === DEVICE_TYPE[0].value ? (
            <S.ScanTitle> Settings &gt; Network & Internet </S.ScanTitle>
          ) : (
            <S.ScanTitle> Open camera to scan QR code </S.ScanTitle>
          )}
          <S.MiniText>(One time setup)</S.MiniText>
        </S.ScanQRContent>
        {medium && (
          <S.ScanQR medium={medium}>
            <S.QRWrapper>
              <img src={qrData} style={{ height: "90%" }} />
            </S.QRWrapper>
          </S.ScanQR>
        )}
        {deviceType === DEVICE_TYPE[0].value && (
          <S.CustomFormControl
            required
            error={error}
            component="fieldset"
            variant="standard"
          >
            <S.CustomFormGroup>
              <FormControlLabel
                control={
                  <S.CheckBoxStyles
                    checked={step1}
                    onChange={(e) =>
                      disableVerification === false && handleChange(e)
                    }
                    name="step1"
                  />
                }
                label="Click on Add icon on Mobile Network / SIMs "
              />
              <FormControlLabel
                control={
                  <S.CheckBoxStyles
                    checked={step2}
                    onChange={(e) =>
                      disableVerification === false && handleChange(e)
                    }
                    name="step2"
                  />
                }
                label="Don’t have / Download a SIM card > Scan QR code"
              />
              <FormControlLabel
                control={
                  <S.CheckBoxStyles
                    checked={step3}
                    onChange={(e) =>
                      disableVerification === false && handleChange(e)
                    }
                    name="step3"
                  />
                }
                label='Enable "Mobile Data" and "Data Roaming"'
              />
            </S.CustomFormGroup>
          </S.CustomFormControl>
        )}

        {deviceType !== DEVICE_TYPE[0].value && (
          <S.CustomFormControl
            required
            error={error}
            component="fieldset"
            variant="standard"
          >
            <S.CustomFormGroup>
              <FormControlLabel
                control={
                  <S.CheckBoxStyles
                    checked={iosStep1}
                    onChange={(e) =>
                      disableVerification === false && handleIosStepChange(e)
                    }
                    name="iosStep1"
                  />
                }
                label='Enter "GIANT" as the label and set "Default line" as Primary'
              />
              <FormControlLabel
                control={
                  <S.CheckBoxStyles
                    checked={iosStep2}
                    onChange={(e) =>
                      disableVerification === false && handleIosStepChange(e)
                    }
                    name="iosStep2"
                  />
                }
                label='Choose "GIANT" as your default line for "Cellular Data"'
              />
              <FormControlLabel
                control={
                  <S.CheckBoxStyles
                    checked={iosStep3}
                    onChange={(e) =>
                      disableVerification === false && handleIosStepChange(e)
                    }
                    name="iosStep3"
                  />
                }
                label='Turn "Data Roaming" toggle ON inside the GIANT cellular plan'
              />
            </S.CustomFormGroup>
          </S.CustomFormControl>
        )}

        <S.VerifyButton>
          <PrimaryButton
            style={{ height: "50px", width: "250px", fontSize: "18px" }}
            disable={
              (deviceType === DEVICE_TYPE[0].value ? error : iosError) ||
              verificationLoading
            }
            onClick={() => {
              if (!verificationLoading && !disableVerification)
                handleVerification();
            }}
          >
            {verificationLoading ? (
              <S.ContrastProgress />
            ) : disableVerification ? (
              "Verified"
            ) : (
              "Verify Installation"
            )}
          </PrimaryButton>
          <S.TroubleText>
            Having trouble? Visit our detailed&nbsp;
            <S.CustomLink
              onClick={async () => {
                window.open(
                  "https://support.giantprotocol.org/hc/en-us/articles/9297603626519-How-do-I-install-and-activate-my-eSIM-"
                );
              }}
            >
              installation guide.{" "}
              <IconButton sx={{ padding: "3px" }}>
                <OpenInNewIcon sx={{ color: "#45B549", fontSize: "0.8rem" }} />
              </IconButton>
            </S.CustomLink>
          </S.TroubleText>
        </S.VerifyButton>
      </S.ScanContent>
      <S.ScanQR>
        <S.QRWrapper>
          <img src={qrData} style={{ height: "90%" }} />
        </S.QRWrapper>
        <S.CustomLink
          sx={{ textAlign: "left", width: "73%", margin: "0.3rem 0 0 0" }}
          onClick={() => navigator.clipboard.writeText(data.qrUrl)}
        >
          <img
            src={CopyIcon}
            alt="copy icon"
            style={{ marginRight: "0.5rem" }}
          />
          {shortenedLink(data.qrUrl)}
        </S.CustomLink>
      </S.ScanQR>
    </S.ScanContainer>
  );
};

export default Scan;
