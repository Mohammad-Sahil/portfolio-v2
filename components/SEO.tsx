import Head from 'next/head'

interface SEOProps {
  title?: string
  description?: string
}

const defaultTitle = 'Mohammad Sahil | Full Stack Developer Portfolio'
const defaultDescription =
  "I'm Mohammad Sahil — a passionate full stack developer skilled in React, Next.js, Node.js, Firebase, Flutter & more. I've led production-ready projects and built scalable dashboards, admin panels, and mobile apps."

export default function SEO({
  title = defaultTitle,
  description = defaultDescription,
}: SEOProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="x-ua-compatible" content="IE=edge" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* *********** Primary Meta Tags *********** */}
        <meta
          name="title"
          content="Mohammad Sahil | Full Stack Developer Portfolio"
        />
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="Mohammad Sahil, Full Stack Developer, React Developer, Next.js, Flutter Developer, Node.js Developer, Firebase, GCP, AWS, Typescript Developer, Dashboard Developer, Admin Panel, Portfolio"
        />
        <meta name="author" content="Mohammad Sahil" />

        {/* *********** Open Graph / Facebook *********** */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tsharpsahil.vercel.app/" />
        <meta
          property="og:title"
          content="Mohammad Sahil | Full Stack Developer Portfolio"
        />
        <meta
          property="og:description"
          content="Experienced in React, Next.js, Firebase, Flutter & more — building scalable web and mobile platforms."
        />
        <meta
          property="og:image"
          content="https://tsharpsahil.vercel.app/waimg.png"
        />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1080" />
        <meta property="og:image:type" content="image/png" />

        {/* *********** Twitter Card *********** */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://tsharpsahil.vercel.app/" />
        <meta
          name="twitter:title"
          content="Mohammad Sahil | Full Stack Developer Portfolio"
        />
        <meta
          name="twitter:description"
          content="React, Next.js, Firebase, Flutter & more — building production-ready platforms and real-time dashboards."
        />
        <meta
          name="twitter:image"
          content="https://tsharpsahil.vercel.app/waimg.png"
        />
      </Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Mohammad Sahil',
            alternateName: ['Mohd Sahil', 'M Sahil', 'Mo Sahil'],
            url: 'https://tsharpsahil.vercel.app/',
            image: 'https://tsharpsahil.vercel.app/waimg.png',
            jobTitle: 'Full Stack Developer',
            worksFor: [
              { '@type': 'Organization', name: 'Freelance' },
              { '@type': 'Organization', name: 'Focus-on-Concepts' },
              { '@type': 'Organization', name: 'Just-Speak' },
              { '@type': 'Organization', name: 'Talentz' },
              { '@type': 'Organization', name: 'Masterji Tailor' },
              { '@type': 'Organization', name: 'Vriddhi NITR' },
              { '@type': 'Organization', name: 'NIT Rourkela' },
              { '@type': 'Organization', name: 'DevDribble' },
              { '@type': 'Organization', name: 'E-cell NITR' },
            ],
            alumniOf: {
              '@type': 'CollegeOrUniversity',
              name: 'National Institute of Technology Rourkela',
            },
            sameAs: [
              'https://github.com/Mohammad-Sahil',
              'https://www.linkedin.com/in/tsharpsahilemeja/',
              'https://x.com/tsharpsahil',
            ],
            knowsAbout: [
              'React.js',
              'Next.js',
              'Node.js',
              'Firebase',
              'Flutter',
              'GCP',
              'AWS',
              'TypeScript',
              'Full Stack Development',
              'Web Development',
              'Mobile App Development',
            ],
            description:
              "I'm Mohammad Sahil — a passionate full stack developer skilled in React, Next.js, Node.js, Firebase, Flutter & more. I build scalable dashboards, admin panels, and mobile apps.",
          }),
        }}
      />
    </>
  )
}
