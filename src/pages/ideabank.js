import Layout from 'Components/layout'
import Head from 'next/head'

export default function Ideabank(){
    return(
        <Layout>
             <Head>
             <title>IdeoBank</title>
             <meta name="description" content="프로그래밍" />
             <meta name="viewport" content="width=device-width, initial-scale=1" />
             <link rel="icon" href="/favicon.ico" />
             </Head>
            <h1>ideabank</h1>
        </Layout>
    );
}