import React from 'react';
import '../styles/NFTCard.css'; // Incluimos estilos

type NFTCardProps = {
  nft: {
    id: number;
    name: string;
    description: string;
    uri: string;
    price: number;
    for_sale: boolean;
    rarity: number;
  };
  onBuy: () => void;
};

const NFTCard = ({ nft, onBuy }: NFTCardProps) => {
  return (
    <div className="nft-card">
      <img src={nft.uri} alt={nft.name} style={{ width: "100%" }} />
      <h3>{nft.name}</h3>
      <p>{nft.description}</p>
      <p>Precio: {nft.price} APT</p>
      <p>Rareza: {nft.rarity}</p>
      {nft.for_sale && <button onClick={onBuy}>Comprar</button>}
    </div>
  );
};

export default NFTCard;
