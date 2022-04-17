import Head from 'next/head'
import Image from 'next/image'
export default function About() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>About | Cikajogja</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
          <h1 className="text-3xl font-bold">
          Cooming Soon {' '}
            <a className="text-red-600" href="https://nextjs.org">
               About New Cikajogja.com!
            </a>
          </h1>
      </main>
    </div>
  )
}