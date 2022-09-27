import Link from "next/link";
import Head from "next/head";

import Header from "../components/header";
import Banner from "../components/banner";
import Card from "../components/card";
import CardMedium from "../components/card-medium";
import CardLarge from "../components/card-large";

export default function IndexPage({ exploreRequest, liveAnywhere }) {
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            {exploreRequest?.map((item) => (
              <Card
                key={item.img}
                img={item.img}
                location={item.location}
                distance={item.distance}
              />
            ))}
          </div>
        </section>

        <section className="pt-6">
          <h2 className="text-3xl font-bold pb-5">Live anywhere</h2>

          <div className="flex overflow-scroll scrollbar-hide">
          {liveAnywhere?.map((i) => (
            <CardMedium 
            key={i.img} 
            img={i.img} 
            title={i.title} 
            />
          ))}
          </div>

        </section>


        <section className="pt-6">
        
        <CardLarge img="https://links.papareact.com/4cj" />

        </section>

       

      </main>
    </div>
  );
}

export async function getStaticProps() {

  const exploreRequest = await fetch("https://www.jsonkeeper.com/b/4G1G")
  .then(
    (res) => res.json()
  );

  const liveAnywhere = await fetch("https://www.jsonkeeper.com/b/VHHT")
  .then(
    (res) => res.json()
  );

  return {
    props: {
      exploreRequest,
      liveAnywhere,
    },
  };
}
