import '../styles/globals.css'
import useSWR from "swr";
import Axios from "axios";
import { SWRConfig } from "swr";

Axios.defaults.baseURL = "http://localhost:9001";

const fetcher = async (url) => {
  try {
    const res = await Axios.get(url);
    return res.data;
  } catch (err) {
    throw err.response.data;
  }
};


function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig value={{ fetcher }}>
      <Component {...pageProps} />
    </SWRConfig>
  )
}

export default MyApp
