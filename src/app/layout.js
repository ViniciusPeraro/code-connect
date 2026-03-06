import { Prompt } from 'next/font/google'
import { Aside } from "../components/Aside";
import "./globals.css";
import { SearchIcon } from '@/components/Icons/Search';
import Searchbar from '@/components/SearchBar';

export const metadata = {
  title: "Code Connect",
  description: "Conectando desenvolvedores!",
};

const prompt = Prompt({
  subsets: ['latin'],
  weight: [ '400', '600'],
  display: 'swap',
})


export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={prompt.className}>
      <body>
        <div className="app-container">
          <div className="aside-container">
              <Aside/>
          </div>
          <div className='main-container'>
            <Searchbar></Searchbar>
              {children}
          </div>
        </div>
      </body>
    </html>
  );
}
