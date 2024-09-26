import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <main>
          <div className="border-2 border-red-500">Hola desde APP</div>
          <Component {...pageProps} />

    </main>
  )
}
