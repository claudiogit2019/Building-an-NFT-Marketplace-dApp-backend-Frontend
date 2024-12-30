import { AptosClient, AptosAccount } from "aptos";

const NODE_URL = "https://fullnode.devnet.aptoslabs.com/v1"; // URL del nodo Aptos (Devnet/Mainnet/Testnet)
const client = new AptosClient(NODE_URL);

export const CONTRACT_ADDRESS = "0x772adc178a9b8729202022e561c69fe0122230c49887e61f8dc976dcd2fce5b2";
export const MODULE_NAME = "NFTMarketplace";

// Inicializa el contrato
export const initializeMarketplace = async (account: AptosAccount) => {
  const payload = {
    type: "entry_function_payload",
    function: `${CONTRACT_ADDRESS}::${MODULE_NAME}::initialize`,
    arguments: [],
    type_arguments: [],
  };
  return client.generateTransaction(account.address(), payload);
};

// Función para acuñar un NFT
export const mintNFT = async (
  account: AptosAccount,
  name: string,
  description: string,
  uri: string,
  rarity: number,
  royalties: number
) => {
  const payload = {
    type: "entry_function_payload",
    function: `${CONTRACT_ADDRESS}::${MODULE_NAME}::mint_nft`,
    arguments: [name, description, uri, rarity, royalties],
    type_arguments: [],
  };
  return client.generateTransaction(account.address(), payload);
};

// Función para comprar un NFT
export const purchaseNFT = async (account: AptosAccount, nftId: number, payment: number) => {
  const payload = {
    type: "entry_function_payload",
    function: `${CONTRACT_ADDRESS}::${MODULE_NAME}::purchase_nft`,
    arguments: [nftId, payment],
    type_arguments: [],
  };
  return client.generateTransaction(account.address(), payload);
};
