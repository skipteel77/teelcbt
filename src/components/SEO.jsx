import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { pageSeo, siteConfig } from "../seo/siteConfig";
import {
  breadcrumbSchema,
  personSchema,
  practiceSchema,
  websiteSchema,
} from "../seo/schema";

function normalizePath(pathname) {
  if (!pathname || pathname === "/") return "/";
  return pathname.replace(/\/+$/, "");
}

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function upsertLink(rel, href) {
  let element = document.head.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
}

function upsertJsonLd(id, value) {
  let element = document.head.querySelector(`#${id}`);
  if (!element) {
    element = document.createElement("script");
    element.id = id;
    element.type = "application/ld+json";
    document.head.appendChild(element);
  }
  element.textContent = JSON.stringify(value);
}

function removeJsonLd(id) {
  document.head.querySelector(`#${id}`)?.remove();
}

export default function SEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = normalizePath(pathname);
    const meta = pageSeo[path] ?? {
      title: `Page Not Found | ${siteConfig.name}`,
      description: "The page you requested could not be found.",
      noindex: true,
    };

    const canonical = `${siteConfig.url}${path === "/" ? "/" : path}`;
    const image = `${siteConfig.url}${siteConfig.image}`;
    const hostname = window.location.hostname;
    const isProduction =
      hostname === "teelcbt.com" || hostname === "www.teelcbt.com";
    const robots = meta.noindex || !isProduction
      ? "noindex,nofollow"
      : "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1";

    document.title = meta.title;

    upsertMeta('meta[name="description"]', {
      name: "description",
      content: meta.description,
    });
    upsertMeta('meta[name="robots"]', { name: "robots", content: robots });
    upsertLink("canonical", canonical);

    upsertMeta('meta[property="og:locale"]', {
      property: "og:locale",
      content: siteConfig.locale,
    });
    upsertMeta('meta[property="og:type"]', {
      property: "og:type",
      content: "website",
    });
    upsertMeta('meta[property="og:site_name"]', {
      property: "og:site_name",
      content: siteConfig.name,
    });
    upsertMeta('meta[property="og:title"]', {
      property: "og:title",
      content: meta.title,
    });
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: meta.description,
    });
    upsertMeta('meta[property="og:url"]', {
      property: "og:url",
      content: canonical,
    });
    upsertMeta('meta[property="og:image"]', {
      property: "og:image",
      content: image,
    });
    upsertMeta('meta[property="og:image:width"]', {
      property: "og:image:width",
      content: "1200",
    });
    upsertMeta('meta[property="og:image:height"]', {
      property: "og:image:height",
      content: "630",
    });
    upsertMeta('meta[property="og:image:alt"]', {
      property: "og:image:alt",
      content: "Teel CBT — Dr. Karen Teel",
    });

    upsertMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });
    upsertMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: meta.title,
    });
    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: meta.description,
    });
    upsertMeta('meta[name="twitter:image"]', {
      name: "twitter:image",
      content: image,
    });

    upsertJsonLd("seo-practice-schema", practiceSchema());
    upsertJsonLd("seo-person-schema", personSchema());
    upsertJsonLd("seo-website-schema", websiteSchema());

    const breadcrumb = breadcrumbSchema(path, meta.title);
    if (breadcrumb) {
      upsertJsonLd("seo-breadcrumb-schema", breadcrumb);
    } else {
      removeJsonLd("seo-breadcrumb-schema");
    }
  }, [pathname]);

  return null;
}
