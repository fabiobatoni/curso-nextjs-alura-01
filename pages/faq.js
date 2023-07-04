import Head from 'next/head';
import Link from '../src/components/Link';

//export async function getServerSideProps() {
// getServerSideProps => Rodando a cada acesso que você recebe
// getStaticProps => roda em tempo de build
// Em modo deve sempre roda ,qualquer uma das 2 funções

export async function getStaticProps() {

  const FAQ_API_URL = "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json"
  const faq = await fetch(FAQ_API_URL)
    .then((response) => {
      return response.json()
    })
    .then((resposta) => {
      return resposta
    })

  return {
    props: {
      faq
    },
  }
}

export default function FAQPage({ faq }) {

  return (
    <div>
      <Head>
        <title>FAQ - Alura Cases Campanha</title>
      </Head>
      <h1>Alura Cases - FAQ</h1>
      <Link href="/">
        ir para pagina do HOME
      </Link>
      <ul>
        {faq.map(({answer, question}) => (
          <li key={question}>
            {question}
          </li>
        ))}
      </ul>
    </div>
  )
}
