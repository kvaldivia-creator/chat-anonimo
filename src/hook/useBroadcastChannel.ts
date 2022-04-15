import { useState, useEffect } from "react";

export const useBroadcastChannel = (channel: string) => {
  const [broadcast, setBroadcast] = useState(null);

  useEffect(() => {
    const bc: any = new BroadcastChannel(channel);
    setBroadcast(bc)

    return () => {
      bc.close()
    };
  }, [channel])

  return broadcast;
};
