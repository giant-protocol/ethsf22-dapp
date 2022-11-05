import axios from "axios";
import React, { useEffect, useState } from "react";
import ExplorePlanCard from "../../components/cards/ExplorePlanCard";
import MyDataPlanCard from "../../components/cards/MyDataPlanCard";
import { EXPLORE_CARD_PLANS } from "../../utils/constants";
import TopBannerImg from "../../assets/TopBanner.png";
import { S } from "./styles";
import { useWeb3React } from "@web3-react/core";

const LandingPage = () => {
  const [activePlans, setActivePlans] = useState([]);
  const [inActivePlans, setInactivePlans] = useState([]);
  const [adminAddress, setAdminAddress] = useState([]);
  const { account } = useWeb3React();

  useEffect(() => {
    if (account !== undefined) {
      getUserPlans();
    }
  }, [account]);

  const getUserPlans = () => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/api/wallet/plans`, {
        walletAddress: account,
      })
      .then((res) => {
        setActivePlans(res.data.activePlans);
        setInactivePlans(res.data.inActivePlans);
        setAdminAddress(res.data.admin);
      });
    // let data = {
    //   status: true,
    //   admin: "0x6cf134323798858d7d06396D7d77C224AC3c7edA",
    //   inActivePlans: [
    //     {
    //       chain: "0x5",
    //       contractType: "ERC1155",
    //       tokenAddress: "0xb7f6addeac6839dc8a3537a015bff85620c43b1c",
    //       tokenId: "1",
    //       tokenUri:
    //         "https://ipfs.moralis.io:2053/ipfs/QmVbrvic2rXQ1JhrWoJYiLJQh4oDC1WW3q8wH5HXsMg5gu/0",
    //       metadata: {
    //         name: "GIANT - 3GB - USA",
    //         description: "GIANT 3 GB USA Cellular eSIM data",
    //         image:
    //           "ipfs://QmcPxyJ4q1rhLqScptPt9uhR2faX5jETZoQ3eCSRD9EJEf/Screenshot%202022-11-02%20at%2012.15.00%20PM.png",
    //         external_url: "",
    //         background_color: "",
    //         attributes: [
    //           {
    //             trait_type: "ACTIVATIONPERIODINDAYS",
    //             value: "7",
    //           },
    //           {
    //             trait_type: "CONNECTIONTYPE",
    //             value: "Cellular",
    //           },
    //           {
    //             trait_type: "NETWORKTYPE",
    //             value: "LTE",
    //           },
    //           {
    //             trait_type: "QUANTITYOFDATAINGB",
    //             value: "3",
    //           },
    //           {
    //             trait_type: "VALIDITYINDAYS",
    //             value: "30",
    //           },
    //           {
    //             trait_type: "DESTINATION",
    //             value: "USA",
    //           },
    //           {
    //             trait_type: "COUNTRYCODE",
    //             value: "US",
    //           },
    //         ],
    //         supply: "1000",
    //       },
    //       name: "GIANT eSIM",
    //       symbol: "GES",
    //       amount: 1,
    //       blockNumberMinted: "7888155",
    //       blockNumber: "7890057",
    //       ownerOf: "0xe20ea5c046f8897800f43c1a22734a596e61a6ac",
    //       tokenHash: "9121856f77e8961c2e265abf0c1066b4",
    //       lastMetadataSync: "2022-11-04T03:43:31.441Z",
    //       lastTokenUriSync: "2022-11-04T03:43:19.663Z",
    //     },
    //     {
    //       chain: "0x5",
    //       contractType: "ERC1155",
    //       tokenAddress: "0xb7f6addeac6839dc8a3537a015bff85620c43b1c",
    //       tokenId: "0",
    //       tokenUri:
    //         "https://ipfs.moralis.io:2053/ipfs/QmeNWXNGGs9aNmGerc4h9tqP3uErd3SdbXHqpEzHep6hde/0",
    //       metadata: {
    //         name: "GIANT - 1GB - USA",
    //         description: "GIANT 1 GB USA Cellular eSIM data",
    //         image:
    //           "ipfs://QmQFVES89798xEdtXzoNKA6DRxWYtChzUDi42LwKrccduj/Screenshot%202022-11-02%20at%2012.14.54%20PM.png",
    //         external_url: "",
    //         background_color: "",
    //         attributes: [
    //           {
    //             trait_type: "ACTIVATIONPERIODINDAYS",
    //             value: "7",
    //           },
    //           {
    //             trait_type: "CONNECTIONTYPE",
    //             value: "Cellular",
    //           },
    //           {
    //             trait_type: "NETWORKTYPE",
    //             value: "LTE",
    //           },
    //           {
    //             trait_type: "QUANTITYOFDATAINGB",
    //             value: "1",
    //           },
    //           {
    //             trait_type: "VALIDITYINDAYS",
    //             value: "7",
    //           },
    //           {
    //             trait_type: "DESTINATION",
    //             value: "USA",
    //           },
    //           {
    //             trait_type: "COUNTRYCODE",
    //             value: "US",
    //           },
    //         ],
    //         supply: "1000",
    //       },
    //       name: "GIANT eSIM",
    //       symbol: "GES",
    //       amount: 1,
    //       blockNumberMinted: "7888145",
    //       blockNumber: "7890027",
    //       ownerOf: "0xe20ea5c046f8897800f43c1a22734a596e61a6ac",
    //       tokenHash: "f4fe569765bd08316283c3fe2a25d029",
    //       lastMetadataSync: "2022-11-04T03:41:31.496Z",
    //       lastTokenUriSync: "2022-11-04T03:41:19.553Z",
    //     },
    //   ],
    //   activePlans: [],
    // };

    // setActivePlans(data.activePlans);
    // setInactivePlans(data.inActivePlans);
    // setAdminAddress(data.admin)
  };

  return (
    <>
      <img src={TopBannerImg} alt="" style={{ marginTop: "5rem",width:"100vw" }} srcset="" />
      <S.LandingPageContainer>
        <S.MyDataPlansCard>
          <S.MyDataPlansCardHeader>My Data Plans</S.MyDataPlansCardHeader>
          <S.MyDataPlansCardBody>
            {inActivePlans?.map((data, index) => {
              return (
                <MyDataPlanCard
                  data={data}
                  key={index}
                  adminAddress={adminAddress}
                  status="Inactive"
                />
              );
            })}
            {activePlans?.map((data, index) => {
              return (
                <MyDataPlanCard data={data} key={data.id} status="Active" />
              );
            })}
          </S.MyDataPlansCardBody>
        </S.MyDataPlansCard>
        <S.ExplorePlansCard>
          <S.MyDataPlansCardHeader>
            Explore eSIM data plans on OpenSea
          </S.MyDataPlansCardHeader>
          <S.ExplorePlansCardBody>
            {EXPLORE_CARD_PLANS.map((plan) => {
              return <ExplorePlanCard key={plan.id} data={plan} />;
            })}
          </S.ExplorePlansCardBody>
        </S.ExplorePlansCard>
      </S.LandingPageContainer>
    </>
  );
};

export default LandingPage;
