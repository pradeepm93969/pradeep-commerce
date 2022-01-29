import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main className="flex items-center justify-center h-80">
        <Link className="mx-10 button-primary px-10" href="/about">
          <a>About</a>
        </Link>
        <Link className="mx-10 button-primary-outlined px-10" href="/about">
          <a>About</a>
        </Link>
        <Link className="mx-10 button-secondary px-10" href="/about">
          <a>About</a>
        </Link>
        <Link className="mx-10 button-secondary-outlined px-10" href="/about">
          <a>About</a>
        </Link>
      </main>
    </div>
  );
}
