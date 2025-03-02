import React from "react";
import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
  "nextdotjs",
  "shopify",
  "facebook",
  "google",
  "tiktok",
  "react",
  "openai",
  "tailwindcss",
  "mailchimp",
  "klaviyo",
  "godaddy",
  "woocommerce",
  "wix",
  "squarespace",
  "zapier",
  "claude",
  "notion",
  "wordpress",
  "googleanalytics",
  "googleleads",
  "adobe",
];

interface TechnologiesProps {
  liveLinks?: boolean;
}

export default function Technologies({ liveLinks = false }: TechnologiesProps) {
  return (
    <div className="">
      <IconCloud iconSlugs={slugs} liveLinks={liveLinks} />
    </div>
  );
}
