import '@/styles/globals.css'
// 
import Navbar from '@/components/Navbar'
import { createClient, Provider } from 'urql'
const client = createClient({ url: process.env.NEXT_PUBLIC_BACKEND_API })
export default function App({ Component, pageProps }) {
  return (
    <Provider value={client} >
      <Navbar />
      <Component {...pageProps} />
    </Provider>

  )
}
