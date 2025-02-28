import './globals.css';

import Header from './components/header';
import Footer from './components/footer';

export const metadata = {
  title: 'Queer Calendar Sheffield',
  description: 'Find out what queer events are on in Sheffield!',
  charset: 'utf-8',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        {/* Open Graph meta tags */}
        <meta property='og:title' content='Queer Calendar Sheffield'/>
        <meta property='og:url' content='https://queercalendarsheffield.co.uk/'/>
        <meta property='og:type' content='website'/>
        <meta property='og:image' content='https://queercalendarsheffield.co.uk/open-graph-banner.webp'/>
        <meta property='og:image:type' content='image/webp'/>
        <meta property='og:image:width' content='1200'/>
        <meta property='og:image:height' content='630'/>
        <meta property='og:image:alt' content='A rainbow calendar icon with a heart shape in the centre of the icon and to the right of that the words \"Queer Calendar Sheffield\" in white, bold text each word on a new line all on a black background.'/>
        <meta property='og:site_name' content='Queer Calendar Sheffield'/>
        <meta property='og:locale' content='en_GB'/>
        <meta property='og:description' content='A place to find queer and LGBTQ+ events in Sheffield.'/>
        {/* Twitter specific tags */}
        <meta property='twitter:card' content='app'/>
        <meta property='twitter:title' content='Queer Calendar Sheffield'/>
        <meta property='twitter:description' content='A place to find queer and LGBTQ+ events in Sheffield.'/>
        <meta property='twitter:image' content='https://queercalendarsheffield.co.uk/open-graph-banner.webp'/>
        <meta property='twitter:image:alt' content='A rainbow calendar icon with a heart shape in the centre of the icon and to the right of that the words \"Queer Calendar Sheffield\" in white, bold text each word on a new line all on a black background.'/>
        <meta property='twitter:domain' content='queercalendarsheffield.co.uk'/>
        <meta property='twitter:url' content='https://queercalendarsheffield.co.uk/'/>
        {/* <meta property='twitter:site' content=''/>
        <meta property='twitter:creator' content=''/> */}
        {/* Icon meta tags */}
        <meta property='msapplication-TileColor' content='#00aba9' />
        <meta property='theme-color' content='#ffffff' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
      </head>
      <body className='block bg-white dark:shadow-white/10 dark:bg-neutral-700'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
