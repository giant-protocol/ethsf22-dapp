import DiscordLogo from "../../assets/icons/DiscordIcon.svg";
import TelegramLogo from "../../assets/icons/TelegramIcon.svg";
import TwitterLogo from "../../assets/icons/TwitterIcon.svg";
import FacebookLogo from "../../assets/icons/FacebookIcon.svg";
import LinkedinLogo from "../../assets/icons/LinkedInIcon.svg";

import USA_1GB_Illustration from "../../assets/USA_1GB_Illustration.svg";
import USA_3GB_Illustration from "../../assets/USA_3GB_Illustration.svg";
import USA_5GB_Illustration from "../../assets/USA_5GB_Illustration.svg";

export const SOCIAL_ICONS = [
  {
    id: 1,
    icon: DiscordLogo,
    link: "https://discord.gg/giantprotocol",
    name: "Discord Link",
  },
  {
    id: 2,
    icon: TelegramLogo,
    link: "https://t.me/giantprotocol",
    name: "Telegram Link",
  },
  {
    id: 3,
    icon: TwitterLogo,
    link: " https://twitter.com/giantprotocol",
    name: "Twitter Link",
  },
  {
    id: 4,
    icon: FacebookLogo,
    link: " https://www.facebook.com/giantprotocol",
    name: "Facebook Link",
  },
  {
    id: 5,
    icon: LinkedinLogo,
    link: "https://www.linkedin.com/company/giantprotocol/",
    name: "Linkedin Link",
  },
];

export const EXPLORE_CARD_PLANS = [
  {
    id: 1,
    packSize: 5,
    backgroundColor:
      "linear-gradient(180deg, #F8D0D4 0%, rgba(253, 240, 242, 0) 100%);",
    backgroundColorHeader:
      "linear-gradient(113.74deg, #F8D0D4 9.6%, #FDF0F2 91.34%)",
    innerGradient:
      "linear-gradient(180deg, #F79EA7 0%, rgba(248, 208, 212, 0) 100%);",
    borderColor: "#EF5153",
    validity: "30 Days",
    illustration: USA_5GB_Illustration,
    link: `${process.env.REACT_APP_OPENSEA_LINK}assets/${
      process.env.REACT_APP_CURRENT_CHAIN === "5" ? "goerli" : "matic"
    }/${process.env.REACT_APP_CONTRACT_ADDRESS}/2`,
  },
  {
    id: 2,
    packSize: 3,
    backgroundColor:
      "linear-gradient(180deg, rgba(45, 172, 143, 0.52) 0%, rgba(45, 172, 143, 0) 100%);",
    backgroundColorHeader:
      "linear-gradient(113.74deg, rgba(45, 172, 143, 0.52) 9.6%, rgba(45, 172, 143, 0) 91.34%)",
    innerGradient:
      " linear-gradient(180deg, #2DAC8F 0%, rgba(45, 172, 143, 0) 100%);",
    borderColor: "#2DAC8F",
    validity: "30 Days",
    illustration: USA_3GB_Illustration,
    link: `${process.env.REACT_APP_OPENSEA_LINK}assets/${
      process.env.REACT_APP_CURRENT_CHAIN === "5" ? "goerli" : "matic"
    }/${process.env.REACT_APP_CONTRACT_ADDRESS}/1`,
  },
  {
    id: 3,
    packSize: 1,
    backgroundColor:
      "linear-gradient(180deg, #FFF9EB 0%, rgba(255, 212, 103, 0) 100%);",
    backgroundColorHeader:
      "linear-gradient(113.74deg, #FFF9EB 9.6%, rgba(255, 212, 103, 0) 91.34%)",
    innerGradient:
      "linear-gradient(180deg, #F3B71C 0%, rgba(255, 212, 103, 0) 100%)",
    borderColor: "#D3832C",
    validity: "7 Days",
    illustration: USA_1GB_Illustration,
    link: `${process.env.REACT_APP_OPENSEA_LINK}assets/${
      process.env.REACT_APP_CURRENT_CHAIN === "5" ? "goerli" : "matic"
    }/${process.env.REACT_APP_CONTRACT_ADDRESS}/0`,
  },
];

export const DEVICE_TYPE = [
  { value: "android", label: "Android" },
  { value: "ios", label: "iOS" },
];
