import React from "react";
import { DEVICE_TYPE } from "../../utils/constants";
import { S } from "./ToggleStyles";

const DeviceToggle = ({ deviceType, setDeviceType }) => {
  const handleToggle = (value) => {
    setDeviceType(value);
  };

  return (
    <S.ButtonsContainer>
      {DEVICE_TYPE.map((item, i) => (
        <S.Toggler
          key={item.value}
          selected={deviceType === item.value}
          onClick={() => handleToggle(item.value)}
        >
          {item.label}
        </S.Toggler>
      ))}
    </S.ButtonsContainer>
  );
};

export default DeviceToggle;
