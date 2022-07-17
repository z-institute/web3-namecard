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
    if (_ensName || addr) {
      // console.log(data, _ensName);
      setEnsData(_ensName || data);
    }
  }, [_ensName, addr]);
  useEffect(() => {
    if (data) {
      setEnsData(data.toString());
    }
  }, [data]);

  async function setEnsData(ensName: string) {
    const resolver = await provider.getResolver(ensName);
    if (!resolver) {
      setRetEnsData({});
      return;
    }
    const email = await resolver.getText("email");
    const twitter = await resolver.getText("com.twitter");
    const github = await resolver.getText("com.github");
    const discord = await resolver.getText("com.discord");
    const websiteUrl = await resolver.getText("url");
    const ethAddress = await provider.resolveName(ensName);
    const avatar = await resolver.getAvatar();
    const avatarUrl = avatar?.url;
    setRetEnsData({
      email,
      ethAddress,
      twitter,
      github,
      discord,
      ensName,
      avatarUrl,
      websiteUrl,
    });
  }

  return retEnsData;
};

export default useEns;
