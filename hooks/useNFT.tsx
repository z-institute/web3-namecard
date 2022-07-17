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
          "X-API-KEY": "aa0237cea5064c919d53d993b765897a",
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
