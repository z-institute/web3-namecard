import { useProvider, useEnsName, useAccount } from "wagmi";
import { useEffect, useState } from "react";

const useEns = (_address?: string) => {
  const { address } = useAccount();
  const addr = _address || address;
  const [retEnsData, setRetEnsData] = useState({});
  const provider = useProvider();

  const { data, isError, isLoading } = useEnsName({
    address: addr,
    onError: (err) => {
      console.log(err);
    },
  });
  useEffect(() => {
    if (data) {
      console.log(data);
      setEnsData(data.toString());
    }
  }, [data]);

  async function setEnsData(_ensName: string) {
    const resolver = await provider.getResolver(_ensName);
    const email = await resolver!.getText("email");
    const twitter = await resolver!.getText("com.twitter");
    const github = await resolver!.getText("com.github");
    setRetEnsData({
      email,
      twitter,
      github,
      _ensName,
    });
  }

  return retEnsData;
};

export default useEns;