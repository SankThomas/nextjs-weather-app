import React from "react"
import Head from "next/head"
import styles from "../styles/Home.module.css"

export default function Home({ cities }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>GitHub Users NextJs App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.0.4/tailwind.min.css"
        />
      </Head>

      <section className="px-5 mb-10 bg-white py-10 shadow-lg mx-5 rounded-sm">
        <h3 className="font-bold text-center text-xl mb-10">
          You are currently viewing Weather information for {cities.name}
        </h3>
        <h1 className="font-bold text-4xl mb-5">
          {cities.name}, {cities.sys.country}
        </h1>
        <ul>
          <h4 className="font-bold">Geographical Location</h4>
          <li>Latitude: {cities.coord.lat}</li>
          <li>Longitude: {cities.coord.lon}</li>
        </ul>

        <div className="mt-5">
          {cities.weather.map(({ id, main, description }) => {
            return (
              <div key={id}>
                <h4 className="font-bold">Current Weather: {main}</h4>
                <p className="capitalize">More information: {description}</p>
              </div>
            )
          })}
        </div>

        <small className="block mt-5">
          Weather information updates automatically from the API.
        </small>
      </section>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=nairobi&appid=${process.env.REACT_APP_API_KEY}`
  )
  const cities = await res.json()

  return {
    props: {
      cities,
    },
  }
}
