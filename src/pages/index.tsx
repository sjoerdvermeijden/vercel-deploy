import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import Layout from '../components/Layout/Layout'
import Restaurants from '../components/Restaurants/Restaurants'

export default function Home() {
  return (
    <Layout>
      <div className="container mx-auto py-10 px-4">
        <Restaurants />
      </div>
    </Layout>
  );
}
