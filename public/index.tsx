import React, { useEffect, useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { CircularProgress, Grid, Tooltip, useMediaQuery } from '@mui/material'
import { styled } from '@mui/system'
import MainLogo from 'assets/icons/MainLogo.svg'
import MainLogoBeta from 'assets/icons/MainLogoBeta.svg'
import MobileViewLogo from 'assets/icons/GiantMobileLogo.svg'
import OpenLinkIcon from 'assets/OpenLinkIcon.svg'
import WalletIcon from 'assets/icons/WalletIcon.svg'
import { getItem, setItem } from '../../../services/localStorage/localStorage.service'
import { PAGES, PAYMENT_TYPE } from '../../../utils/constants'
import { PAGES_TYPE } from '../../../types'
import { NavLink, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { useWalletContext } from '../../../contexts/wallet'
import Collapse from './Collapse'
import ProfileMenu from './ProfileMenu'
import DisconnectWalletModal from './DisconnectWalletModal'
import { getBalance } from 'polkadot/callmethods/system'
import { usePaymentContext } from 'contexts/payment'
import { handleSegment } from 'utils/utils'
const injectedWeb3 = (window as any).injectedWeb3

export default function Header() {
  // const [address, setAddress] = useState<string>('')
  // const isConnected = getItem<boolean>("isConnected");
  const {
    isConnected,
    isConnecting,
    connectedAccount,
    balance,
    apiState,
    setConnectedModalOpen,
    isLogged,
    showPurchaseModal,
  } = useWalletContext()
  const { setPaymentType } = usePaymentContext()
  const matches = useMediaQuery(`${isConnected ? '(max-width:1200px)' : '(max-width:900px)'}`)
  const mobileView = useMediaQuery('(max-width:450px)')
  const [searchParams] = useSearchParams()
  const status = searchParams.get('status')

  const [isDisconnectToggle, setIsDisconnectToggle] = useState<boolean>(false)
  const [selectedLink, setSelectedLink] = useState<any>({})

  const handleDisconnectModalOpen = () => setIsDisconnectToggle(true)
  const handleDisconnectModalClose = () => setIsDisconnectToggle(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
    setSelectedLink(PAGES.find((item: any) => item.route.split('/')[1].includes(location.pathname.split('/')[1])))
  }, [location.pathname])

  useEffect(() => {
    if (connectedAccount.address !== undefined && showPurchaseModal) {
      status === 'failed' ? setPaymentType(PAYMENT_TYPE[1].value) : setPaymentType(PAYMENT_TYPE[0].value)
    }
  }, [connectedAccount, showPurchaseModal])

  useEffect(() => {
    const checkInjected = async () => {
      if (Object.keys(injectedWeb3).length && isConnected) {
        const accounts = getItem<any[]>('accounts', [])

        if (accounts.length) {
          // setAddress(accounts[0].address)
          getBalance(accounts[0].address).then((bal) => {})
        } else console.log('please link your account to the wallet.')
      } else {
        setItem<boolean>('isConnected', false)
      }
    }
    checkInjected()
  }, [])

  const headerRoutes =
    process.env.REACT_APP_CURRENT_CHAIN === 'testnet'
      ? PAGES
      : PAGES.filter((item: any) => item.title !== 'Competition')

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CustomAppBar position="static">
        <HeaderContainer container>
          <LogoContainer item onClick={() => navigate('/')}>
            <img src={mobileView ? MobileViewLogo : MainLogoBeta} alt="" />
          </LogoContainer>
          {matches && <Collapse selectedLink={selectedLink} setSelectedLink={setSelectedLink} />}
          {!matches && (
            <>
              {/* To be used */}
              {/* <NavContainer item>
                {PAGES.map((page: PAGES_TYPE) => {
                  return (
                    <NavItem
                      to={page.route}
                      key={page.id}
                      style={({ isActive }) => {
                        return {
                          borderBottom: isActive ? '5px solid #45B549' : '',
                          paddingTop: isActive ? '5px' : '',
                        }
                      }}
                    >
                      <HeaderText>{page.title}</HeaderText>
                    </NavItem>
                  )
                })}
                <GuideContent
                  onClick={() => window.open('https://docs.giantprotocol.org/guides/how-to-use-the-testnet-app')}
                >
                  Guide <img src={OpenLinkIcon} alt="openlinkicon" />
                </GuideContent>
              </NavContainer> */}
              <NavContainer item>
                {headerRoutes.map((page: PAGES_TYPE) => {
                  return (
                    <NavItem
                      isConnected={isConnected}
                      to={page.route}
                      key={page.id}
                      style={{
                        borderBottom: page?.id === selectedLink?.id ? '5px solid #45B549' : '',
                        paddingTop: page?.id === selectedLink?.id ? '5px' : '',
                      }}
                      onClick={() => setSelectedLink(page)}
                    >
                      <HeaderText>{page.title}</HeaderText>
                    </NavItem>
                  )
                })}
                <GuideContent
                  onClick={() =>
                    window.open(
                      `https://docs.giantprotocol.org/guides/how-to-use-the-${process.env.REACT_APP_CURRENT_CHAIN}-app`,
                    )
                  }
                >
                  Guide <img src={OpenLinkIcon} alt="openlinkicon" />
                </GuideContent>
              </NavContainer>
              <WalletContainer item>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    justifyContent: 'flex-end',
                  }}
                >
                  {isConnected && isLogged ? (
                    <>
                      <ProfileMenu />
                      <BalanceContainer onClick={() => handleDisconnectModalOpen()}>
                        <LeftContainer
                          className="animate__animated animate__fadeInRight"
                          sx={{ fontWeight: 700, fontSize: '18px' }}
                        >
                          {balance?.deci ?? '0'}&nbsp;GIANT
                        </LeftContainer>

                        <img
                          src={WalletIcon}
                          style={{
                            zIndex: '99',
                            background: isConnected ? '#CED6E0' : '',
                            height: '2.5rem',
                          }}
                          className="animate__animated animate__fadeIn"
                          alt="walletLogo"
                        />
                        <RightContainer
                          sx={{
                            fontWeight: 400,
                            color: '#66717B',
                            fontSize: '1.125rem',
                          }}
                          className="animate__animated animate__fadeInLeft"
                        >
                          {connectedAccount?.address.substring(0, 6)}...
                          {connectedAccount?.address.substring(connectedAccount.address.length - 4)}
                        </RightContainer>
                      </BalanceContainer>
                    </>
                  ) : isConnecting || apiState !== 2 ? (
                    <Box sx={{ display: 'flex' }}>
                      <CircularProgress />
                    </Box>
                  ) : (
                    <div
                      style={{
                        cursor: 'pointer',
                      }}
                      onClick={() => {
                        // walletConnectHandler()
                        handleSegment('Clicked Connect Wallet icon', {
                          build: process.env.REACT_APP_CURRENT_CHAIN,
                          'screen name':
                            location.pathname.substring(1) === '' ? 'Home' : location.pathname.substring(1),
                        })
                        setConnectedModalOpen(true)
                      }}
                    >
                      <Tooltip title="Connect wallet" arrow>
                        <img src={WalletIcon} alt="walletLogo" />
                      </Tooltip>
                    </div>
                  )}
                </Box>
                <DisconnectWalletModal isToggle={isDisconnectToggle} handleModalClose={handleDisconnectModalClose} />
              </WalletContainer>
            </>
          )}
        </HeaderContainer>
      </CustomAppBar>
    </Box>
  )
}

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  background: theme.palette.common.white,
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1), 0px 0px 1px rgba(11, 33, 62, 0.25)',
  color: theme.palette.text.primary,
  position: 'fixed',
  top: 0,
  zIndex: 99,
  height: '5rem',
}))

const HeaderContainer = styled(Grid)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0rem 2rem',
  height: '100%',
  [theme.breakpoints.down('sm')]: {
    padding: '0rem 0 0 1rem',
  },
  [theme.breakpoints.down(1350)]: {
    padding: '0rem 1rem',
  },
}))

const GuideContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  cursor: 'pointer',
  color: '#45B549',
  fontWeight: 700,
  paddingLeft: '1rem',
  [theme.breakpoints.down(1290)]: {
    paddingLeft: '0rem',
  },
}))

const LogoContainer = styled(Grid)(({ theme }) => ({
  cursor: 'pointer',
}))
const NavContainer = styled(Grid)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  height: '100%',
}))
const WalletContainer = styled(Grid)(({ theme }) => ({}))

const LeftContainer = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.light,
  width: '100%',
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'flex-end',
  height: '2.5rem',
  borderRadius: '2rem 0 0 2rem',
  padding: '0 1rem',
}))
const RightContainer = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.light,
  height: '2.5rem',
  width: '100%',
  alignItems: 'center',
  display: 'flex',
  padding: '0 1rem',
  borderRadius: '0 2rem 2rem 0',
}))
const BalanceContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-evenly',
  borderRadius: '20px',
}))

type NavItemType = {
  theme?: any
  isConnected: boolean
}

const NavItem = styled(NavLink)(({ theme, isConnected }: NavItemType) => ({
  color: theme.palette.common.black,
  boxSizing: 'border-box',
  height: '5rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  // width: '5rem',
  minWidth: '6rem',
  textDecoration: 'none',
  padding: '0 1rem',
  [theme.breakpoints.down(999.99)]: {
    padding: !isConnected && '0 0.5rem',
    minWidth: !isConnected && '5rem',
  },
  [theme.breakpoints.down(1350)]: {
    minWidth: isConnected && '5rem',
  },
  [theme.breakpoints.down(1300)]: {
    minWidth: isConnected && '4.5rem',
  },
  [theme.breakpoints.down(1230)]: {
    padding: isConnected && '0 0.5rem',
  },
  [theme.breakpoints.down(1200)]: {
    minWidth: isConnected && '4rem',
  },
}))

const HeaderText = styled(Typography)(({ theme }) => ({}))
