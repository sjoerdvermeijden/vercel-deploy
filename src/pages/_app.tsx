import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { CartComponent } from '../context/CartContext'
import { TotalComponent } from '../context/TotalContext'

export default function App({ Component, pageProps }: AppProps) {
  return (

    <CartComponent>
      <TotalComponent>
        <Component {...pageProps} />
      </TotalComponent>
    </CartComponent>
  );
}
