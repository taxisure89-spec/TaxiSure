import { Helmet } from 'react-helmet-async';

const defaultMeta = {
    title: 'TaxiSure - Your Trusted Ride Companion',
    description: 'Safe, reliable rides for city travel, all-India tours, and pilgrimage journeys. Book verified drivers across 100+ cities.',
    keywords: 'taxi booking, ride hailing, India tours, Char Dham Yatra, city rides, transportation',
    image: '/logo.png',
    url: 'https://taxisure.in'
};

function SEO({
    title,
    description,
    keywords,
    image,
    url,
    type = 'website'
}) {
    const meta = {
        title: title || defaultMeta.title,
        description: description || defaultMeta.description,
        keywords: keywords || defaultMeta.keywords,
        image: image || defaultMeta.image,
        url: url || defaultMeta.url
    };

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{meta.title}</title>
            <meta name="title" content={meta.title} />
            <meta name="description" content={meta.description} />
            <meta name="keywords" content={meta.keywords} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={meta.url} />
            <meta property="og:title" content={meta.title} />
            <meta property="og:description" content={meta.description} />
            <meta property="og:image" content={meta.image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={meta.url} />
            <meta property="twitter:title" content={meta.title} />
            <meta property="twitter:description" content={meta.description} />
            <meta property="twitter:image" content={meta.image} />
        </Helmet>
    );
}

export default SEO;
