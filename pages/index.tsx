import Link from "next/link";
import Head from "next/head";

import Header from "../components/header";
import Banner from "../components/banner";
import Card from "../components/card";

export default function IndexPage({ exploreRequest }) {
  return (
    <div>
      <Head>
        <title>Haus | Holidays Home & Apartment Rentals</title>
      </Head>

      {/* Header */}

      <Header />

      {/* Hero Banner */}

      <Banner />

      <main className="max-w-4xl mx-auto px-8">
        <section className="pt-6">
          <h2 className="text-3xl font-bold pb-5">Explore Nearby</h2>

          {exploreRequest?.map((item) => (
            <Card 
            key={item.img}
            img={item.img} 
            location={item.location} 
            distance={item.distance}/>
          ))}

          


        </section>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const exploreRequest = await fetch("https://www.jsonkeeper.com/b/4G1G").then(
    (res) => res.json()
  );

  return {
    props: {
      exploreRequest,
    },
  };

  // console.log(exploreRequest)
}
