import { ConnectButton } from "thirdweb/react";
import { createWallet, walletConnect, inAppWallet } from "thirdweb/wallets";
import { arbitrum, optimism } from "thirdweb/chains";
import { createThirdwebClient } from "thirdweb";
const THIRDWEB_CLIENT = createThirdwebClient({
  clientId: String(process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID),
});
export default function ConfiguredConnectButton() {
  const wallets = [
    createWallet("io.rabby"),
    createWallet("me.rainbow"),
    createWallet("io.metamask"),
    createWallet("app.phantom"),
    walletConnect(),
    inAppWallet({
      auth: {
        options: ["email", "google", "apple", "facebook"],
      },
    }),
  ];
  return (
    <ConnectButton
      client={THIRDWEB_CLIENT}
      autoConnect={true}
      wallets={wallets}
      theme={"light"}
      chains={[arbitrum, optimism]}
      accountAbstraction={{
        chain: arbitrum,
        sponsorGas: true,
      }}
      connectModal={{
        size: "compact",
        title: "Create Your AA Wallet",
      }}
    />
  );
}
