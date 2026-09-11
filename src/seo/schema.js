import { siteConfig } from "./siteConfig";

export function practiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${siteConfig.url}/#practice`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    description:
      "Evidence-based psychotherapy for anxiety with Dr. Karen Teel, a licensed clinical psychologist in New York.",
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: [
      `${siteConfig.url}/assets/logo-horizontal.png`,
      `${siteConfig.url}/assets/hero-karen.jpg`,
    ],
    address: {
      "@type": "PostalAddress",
      ...siteConfig.address,
    },
    employee: {
      "@id": `${siteConfig.url}/#karen-teel`,
    },
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/#karen-teel`,
    name: "Karen Teel",
    honorificPrefix: "Dr.",
    honorificSuffix: "PhD",
    jobTitle: "Licensed Clinical Psychologist",
    url: `${siteConfig.url}/about`,
    image: `${siteConfig.url}/assets/about-karen.jpg`,
    worksFor: {
      "@id": `${siteConfig.url}/#practice`,
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Columbia University",
    },
    knowsAbout: [
      "Cognitive Behavioral Therapy",
      "Anxiety disorders",
      "Exposure and Response Prevention",
      "Acceptance and Commitment Therapy",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    publisher: {
      "@id": `${siteConfig.url}/#practice`,
    },
  };
}

export function breadcrumbSchema(pathname, title) {
  if (pathname === "/") return null;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: title.replace(/\s*\|\s*.*$/, ""),
        item: `${siteConfig.url}${pathname}`,
      },
    ],
  };
}
