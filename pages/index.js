import Head from 'next/head';
import Link from 'next/link';

// SSR 동작 원리 확인
export async function getServerSideProps() {
  console.log("server");
  return {
    props: {
      time: new Date().toISOString()
    }
  };
}

export default function Home({ time }) {
  return (
    <>
      <main>
        <h1 className="title">
          {time}
        </h1>
        <h1><Link href="/csr">CSR 동작 원리 확인</Link></h1>
        <h1><Link href="/ssg">SSG 동작 원리 확인</Link></h1>
        <h1><Link href="/isr">ISR 동작 원리 확인</Link></h1>
      </main>
    </>
  )
}
