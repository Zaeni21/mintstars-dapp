import { useState } from 'react';
import { ethers } from 'ethers';
import Head from 'next/head';
import toast, { Toaster } from 'react-hot-toast';

const CONTRACT_ADDRESS = "0x32e099A937B9Efc72EE94d49fF781b46c6245A01";
const ABI = [
  {
    "inputs": [
      { "internalType": "address", "name": "to", "type": "address" },
      { "internalType": "string", "name": "tokenURI", "type": "string" }
    ],
    "name": "mintNFT",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "payable",
    "type": "function"
  }
];

export default function MintPage() {
  const [uri, setUri] = useState("");
  const [minting, setMinting] = useState(false);

  const mintNFT = async () => {
    try {
      if (!uri) return toast.error("Enter Metadata URI");
      setMinting(true);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
      const tx = await contract.mintNFT(await signer.getAddress(), uri, { value: ethers.utils.parseEther("0.1") });
      await tx.wait();
      toast.success("NFT Minted Successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Minting failed.");
    } finally {
      setMinting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <Head><title>MintStars | Mint NFT</title></Head>
      <Toaster />
      <h1 className="text-3xl font-bold mb-4">MintStars NFT</h1>
      <input
        type="text"
        placeholder="Enter Metadata IPFS URI (ipfs://...)"
        value={uri}
        onChange={(e) => setUri(e.target.value)}
        className="text-black p-2 rounded w-full max-w-lg mb-4"
      />
      <button
        onClick={mintNFT}
        disabled={minting}
        className="bg-purple-600 px-6 py-2 rounded hover:bg-purple-700"
      >
        {minting ? "Minting..." : "Mint NFT (0.1 MON)"}
      </button>
    </div>
  );
}