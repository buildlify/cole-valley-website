import Head from 'next/head';

type Props = {
  title: string;
  description: string;
  keywords: string;
  url: string;
  image: string;
};

const Meta = ({ title, description, keywords, url, image }: Props) => {
  return (
    <Head>
      {/* default */}
      <meta charSet='UTF-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge,chrome=1' />
      <meta name='MobileOptimized' content='320' />
      <meta name='HandheldFriendly' content='true' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0 maximum-scale=1' />
      <meta name='application-name' content={title} />

      {/* basic */}
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      <link rel='canonical' href={url} />

      {/* favicons */}
      <link rel='icon' href='/favicons/favicon.ico' />
      <link rel='icon' type='image/png' sizes='32x32' href='/favicons/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/favicons/favicon-16x16.png' />
      <link
        rel='icon'
        type='image/png'
        sizes='192x192'
        href='/favicons/android-chrome-192x192.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='512x512'
        href='/favicons/android-chrome-512x512.png'
      />
      <link
        rel='apple-touch-icon'
        type='image/png'
        sizes='180x180'
        href='/favicons/apple-touch-icon.png'
      />

      {/* open graph / social media */}
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='630' />
      <meta property='og:image' content={image} />
      <meta property='og:url' content={url} />
      <meta property='og:locale' content='en_US' />
      <meta property='og:site_name' content={title} />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />
      <meta name='twitter:image:alt' content={title} />
      <meta name='twitter:url' content={url} />
    </Head>
  );
};

Meta.defaultProps = {
  title: '',
  description: '',
  keywords: '',
  url: '',
  image: '/banner.png',
};

export default Meta;
