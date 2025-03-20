export const tag: string = "@cojocaru-david";
export const author: string = "David Cojocaru";
export const github: string = "https://github.com/cojocaru-david";

export const title: string = "David Cojocaru - Junior Software Developer";
export const description: string =
  "I am a self-taught developer who loves to build things for the web. With 5+ years of coding experience, I'm passionate about creating elegant solutions and exploring new technologies. Currently working on exciting projects while remaining open to new opportunities.";
export const country: string = "Romania";

export const FooterSocials = [
  {
    name: "GitHub",
    url: github,
    icon: "mdi:github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/cojocaru-david/",
    icon: "mdi:linkedin",
  },
  {
    name: "Email",
    url: "mailto:contact@cojocarudavid.me",
    icon: "mdi:email",
  },
];

interface Meta {
  title: string;
  description: string;
  keywords: string[];
  ogImage: {
    src: string;
    alt: string;
  };
}

export const defaultMeta: Meta = {
  title: "David Cojocaru - Home",
  description:
    "Discover the portfolio and blog of David Cojocaru, a 16-year-old software developer and cybersecurity enthusiast from Romania. Explore his expertise in web development, programming languages, and more.",
  keywords: [
    "david cojocaru",
    "junior software developer",
    "junior",
    "cybersecurity enthusiast",
    "web development",
    "programming",
    "portfolio",
    "blog",
    "romania",
  ],
  ogImage: {
    src: "/banner.png",
    alt: "David Cojocaru - Home",
  },
};

export interface Category {
  text: string;
  logo: string;
}

export type Technologies = {
  "Web Development": Category[];
  "Development Tools": Category[];
  "Hosting and Cloud Services": Category[];
  "Operating Systems": Category[];
  "Other Programming Languages and Technologies": Category[];
  "Web Servers": Category[];
  Databases: Category[];
  "Other Software": Category[];
};

export const technologies: Technologies = {
  "Web Development": [
    { text: "HTML", logo: "mdi:language-html5" },
    { text: "JavaScript", logo: "mdi:language-javascript" },
    { text: "CSS", logo: "mdi:language-css3" },
    { text: "PHP", logo: "mdi:language-php" },
    { text: "Astro", logo: "simple-icons:astro" },
    { text: "Tailwind CSS", logo: "mdi:tailwind" },
  ],
  "Development Tools": [
    { text: "Visual Studio Code", logo: "mdi:visual-studio-code" },
    { text: "Git", logo: "mdi:git" },
  ],
  "Hosting and Cloud Services": [
    { text: "DigitalOcean", logo: "mdi:digital-ocean" },
    { text: "Cloudflare", logo: "cib:cloudflare" },
    { text: "Netlify", logo: "cib:netlify" },
  ],
  "Operating Systems": [
    { text: "Windows", logo: "mdi:windows" },
    { text: "Ubuntu", logo: "mdi:ubuntu" },
  ],
  "Other Programming Languages and Technologies": [
    { text: "Lua", logo: "mdi:language-lua" },
    { text: "Golang", logo: "mdi:language-go" },
    { text: "Node.js", logo: "mdi:nodejs" },
  ],
  "Web Servers": [
    { text: "Apache", logo: "cib:apache" },
    { text: "Nginx", logo: "cib:nginx" },
  ],
  Databases: [
    { text: "MySQL", logo: "cib:mysql" },
    { text: "MongoDB", logo: "cib:mongodb" },
  ],
  "Other Software": [
    { text: "Discord", logo: "mdi:discord" },
    { text: "Spotify", logo: "mdi:spotify" },
    { text: "Visual Studio", logo: "mdi:visual-studio" },
    { text: "Brave", logo: "cib:brave" },
  ],
};
