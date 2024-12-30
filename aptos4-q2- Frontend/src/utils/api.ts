// src/utils/api.ts
export const fetchMyNFTs = async () => {
  return [
    {
      id: 1,
      name: "Celestial Dreams",
      image: "https://via.placeholder.com/200",
      rarity: "Common",
      price: "0.0001 APT",
      description: "A mystical vision of stars dancing across the cosmos.",
      owner: "0xb6ce...17aa",
    },
    {
      id: 2,
      name: "Oceanic Whisper",
      image: "https://via.placeholder.com/200",
      rarity: "Rare",
      price: "0.0002 APT",
      description: "A serene painting of the ocean's majesty.",
      owner: "0xb4ce...12cd",
    },
  ];
};
