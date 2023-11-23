import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

const useNFT = (_address?: string) => {
  const { address } = useAccount();
  const addr = _address || address;
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.opensea.io/api/v1/assets?owner=${addr}&order_direction=desc&limit=5`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "X-API-KEY": "369d126c15054a758f5be55651e5a04a",
        },
        // mode: "no-cors",
      }
    )
      .then((response) => response.json())
      .then(({ assets }) => {
        console.log(assets);
        setNfts(assets);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [addr]);

  return { nfts };
};

export default useNFT;
