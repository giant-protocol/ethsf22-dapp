import { initializeConnector } from '@web3-react/core'
import { MetaMask } from '@web3-react/metamask'

export const [metaMask, metamaskHooks] = initializeConnector((actions) => new MetaMask({ actions,defaultChainId:parseInt(process.env.REACT_APP_CURRENT_CHAIN)}))