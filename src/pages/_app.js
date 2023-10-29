// import Contextapi from '@/Components/Contextapi';
import { Contextapi } from '@/Components/Contextapi';
import '@/styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App({ Component, pageProps }) {
  return (
    <Contextapi>
      <Component {...pageProps} />
    </Contextapi>
  )
}
