import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Beginner() {
  return (
    <div>
      <Head>
        <title>ESL Universe! English Teaching</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="bg-heroimage h-full min-h-screen bg-cover bg-right">
          <div className="bg-violet-900 bg-opacity-60 h-full min-h-screen w-screen text-center p-12 xl:p-20">
            <div className="flex flex-col justify-center items-center max-w-full">
              <h1 className="text-4xl md:text-6xl xl:text-9xl font-bold text-violet-200 p-6">Beginner</h1>
              <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-violet-200 p-2">低级</h2>
              <div className="flex flex-row flex-wrap justify-center p-12 m-6">
                
                <div className="flex flex-row flex-wrap justify-center p-2 m-2">
                    <Link href="/beginner/colors">
                        <div className="bg-violet-300 bg-opacity-20 hover:bg-opacity-30 transition-all rounded-xl p-12 m-2 text-violet-300">
                            <h2 className="text-violet-300 font-bold text-xl md:text-2xl lg:text-4xl p-2">Colors</h2>
                            <h3 className="text-violet-300 text-xl md:text-2xl p-2">颜色</h3>
                        </div>
                    </Link>
                    <Link href="/beginner/numbers">
                        <div className="bg-violet-300 bg-opacity-20 hover:bg-opacity-30 transition-all rounded-xl p-12 m-2 text-violet-300">
                            <h2 className="text-violet-300 font-bold text-xl md:text-2xl lg:text-4xl p-2">Numbers</h2>
                            <h3 className="text-violet-300 text-xl md:text-2xl p-2">数字</h3>
                        </div>
                    </Link>
                    <Link href="/beginner/days">
                        <div className="bg-violet-300 bg-opacity-20 hover:bg-opacity-30 transition-all rounded-xl p-12 m-2 text-violet-300">
                            <h2 className="text-violet-300 font-bold text-xl md:text-2xl lg:text-4xl p-2">Days</h2>
                            <h3 className="text-violet-300 text-xl md:text-2xl p-2">日历</h3>
                        </div>
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}