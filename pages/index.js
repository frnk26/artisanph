import Head from 'next/head'
import Image from 'next/image'
// URQL
import { PRODUCT_QUERY } from '@/lib/query'
import { useQuery } from 'urql'


export default function Home() {
  const [results] = useQuery({ query: PRODUCT_QUERY })
  const { data, fetching, error } = results;

  // if (fetching) return <p> loading</p>;
  // if (error) return <p> loading</p>;

  // const products = data.products.data;

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      </main>
    </>
  )
}
