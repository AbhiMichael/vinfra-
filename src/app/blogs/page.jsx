import Navbar from "../../components/Navbar";
import BlogsView from "../../views/Blogs";
import { BLOG_POSTS } from "../../data/blogsData";

export const metadata = {
  title: "Blogs & News | Stories, Site Moments & Staff Celebrations | Vinfra Projects",
  description:
    "Explore candid work site moments, staff celebrations, Ayudha Pooja festivities, heartwarming client handovers, and project chronicles from Vinfra Projects.",
  alternates: {
    canonical: "https://vinfraprojects.com/blogs/",
  },
  openGraph: {
    title: "Blogs & News | Stories, Moments & Celebrations | Vinfra Projects",
    description:
      "Behind every curved roof is our dedicated crew, sunset chai breaks, festival blessings, and heartwarming handover smiles across South India.",
    url: "https://vinfraprojects.com/blogs/",
    siteName: "Vinfra Projects",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogs & News | Vinfra Projects",
    description:
      "Candid site stories, staff celebrations, and heartwarming project moments from Vinfra Projects.",
  },
};

export default function BlogsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Vinfra Projects Engineering Insights & News",
    "description":
      "Official publication of Vinfra Projects featuring engineering case studies, trussless roofing technical guides, and South India expansion updates.",
    "url": "https://vinfraprojects.com/blogs/",
    "publisher": {
      "@type": "Organization",
      "name": "Vinfra Projects",
      "logo": {
        "@type": "ImageObject",
        "url": "https://vinfraprojects.com/logo1.webp",
      },
    },
    "blogPost": BLOG_POSTS.map((post) => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": "2026-01-01",
      "author": {
        "@type": "Person",
        "name": post.author.name,
      },
      "image": `https://vinfraprojects.com${post.image}`,
      "url": `https://vinfraprojects.com/blogs/#${post.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <BlogsView />
    </>
  );
}
