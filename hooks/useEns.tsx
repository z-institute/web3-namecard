import { useProvider, useEnsName, useAccount } from "wagmi";
import { useEffect, useState } from "react";

const useEns = (_address?: string, _ensName?: string) => {
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
    if (_ensName) {
      setEnsData(_ensName);
    }
  }, [_ensName]);
  useEffect(() => {
    if (data) {
      setEnsData(data.toString());
    }
  }, [data]);

  async function setEnsData(ensName: string) {
    const resolver = await provider.getResolver(ensName);
    const email = await resolver!.getText("email");
    const twitter = await resolver!.getText("com.twitter");
    const github = await resolver!.getText("com.github");
    const websiteUrl = await resolver!.getText("url");
    const avatar = await resolver!.getAvatar();
    const avatarUrl = avatar?.url;
    setRetEnsData({
      email,
      twitter,
      github,
      ensName,
      avatarUrl,
      websiteUrl,
    });
  }

  return retEnsData;
};

export default useEns;
