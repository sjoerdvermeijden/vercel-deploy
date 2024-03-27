import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import Layout from '../components/Layout/Layout'

export default function Home() {
  return (
    <Layout>
      <p>Lorem, ipsum dolor.</p>
    </Layout>
  );
}
