"use client";

import { ImageKitProvider as IKProvider } from "imagekitio-next";

export default function ImageKitProvider({ children }: { children: React.ReactNode }) {
  return (
    <IKProvider 
      publicKey={process.env.NEXT_PUBLIC_PUBLIC_KEY}
      urlEndpoint={process.env.NEXT_PUBLIC_URL_ENDPOINT}
      transformationPosition="path"
    >
      {children}
    </IKProvider>
  );
} 