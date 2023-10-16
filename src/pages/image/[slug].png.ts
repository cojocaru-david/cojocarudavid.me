import satori from "satori";
import { html } from "satori-html";
import { Resvg } from "@resvg/resvg-js";
import InterRegular from "@fontsource/inter/files/inter-latin-400-normal.woff";
import InterBold from "@fontsource/inter/files/inter-latin-700-normal.woff";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";

const dimensions = {
  width: 1200,
  height: 630,
};

interface Props {
  title: string;
  pubDate: Date;
}

export async function GET(context: APIContext) {
  const { title, pubDate } = context.props as Props;
  const date = pubDate.toLocaleDateString("en-US", {
    dateStyle: "full",
  });

  const markup = html`<div tw="bg-zinc-900 flex flex-col w-full h-full">
    <div tw="flex flex-col w-full h-4/5 p-10 justify-center">
      <div tw="text-zinc-400 text-2xl mb-6">${date}</div>
      <div
        tw="flex text-6xl w-full font-bold leading-snug tracking-tight text-transparent bg-red-400"
        style="background-clip: text; -webkit-background-clip: text; background: linear-gradient(90deg, rgb(0, 124, 240), rgb(0, 223, 216));"
      >
        ${title}
      </div>
    </div>
    <div
      tw="w-full h-1/5 border-t border-zinc-700/50 flex p-10 items-center justify-between text-2xl"
    >
      <div tw="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="none"
          viewBox="0 0 400 400"
        >
          <path
            fill="#93C5FD"
            d="M316.667 0H83.3333C37.3096 0 0 37.3096 0 83.3333V316.667C0 362.69 37.3096 400 83.3333 400H316.667C362.69 400 400 362.69 400 316.667V83.3333C400 37.3096 362.69 0 316.667 0Z"
          />
          <path
            fill="#1D4ED8"
            d="M142.333 316.667C139.86 316.645 137.415 316.136 135.139 315.169C132.862 314.203 130.798 312.797 129.065 311.033C127.331 309.269 125.962 307.18 125.036 304.887C124.11 302.593 123.645 300.14 123.667 297.667V85.6667C123.645 83.1934 124.11 80.7401 125.036 78.4467C125.962 76.1533 127.331 74.0648 129.065 72.3005C130.798 70.5361 132.862 69.1305 135.139 68.1639C137.415 67.1972 139.86 66.6885 142.333 66.6667H158.667C163.783 66.6667 168.117 68.55 171.667 72.3333C175.45 76.1167 177.333 80.55 177.333 85.6667V208.667C177.333 208.883 177.45 209 177.667 209L178.333 208.667L220 158C228 148.217 238.217 143.333 250.667 143.333H274.667C278.217 143.333 280.783 145 282.333 148.333C284.117 151.667 283.783 154.783 281.333 157.667L224.333 224.667C223.217 226 223.217 227.45 224.333 229L282 302C284.217 305.117 284.45 308.333 282.667 311.667C282.014 313.225 280.895 314.543 279.462 315.439C278.029 316.334 276.354 316.763 274.667 316.667H250.667C238.217 316.667 228.117 311.667 220.333 301.667L178.333 247C178.117 246.783 177.883 246.667 177.667 246.667C177.45 246.667 177.333 246.783 177.333 247V297.667C177.333 302.783 175.45 307.217 171.667 311C170.029 312.816 168.021 314.261 165.779 315.238C163.537 316.216 161.112 316.703 158.667 316.667H142.333Z"
          />
        </svg>
        <span tw="ml-3 text-zinc-400">cojocaru-david</span>
      </div>
      <div tw="flex items-center">
        <img
          src="https://avatars.githubusercontent.com/u/46791833?s=160"
          tw="w-15 h-15 rounded-full"
        />
        <div tw="flex flex-col ml-4">
          <span tw="text-zinc-400">David Cojocaru</span>
          <span tw="text-zinc-400 text-sm">cojocaru-david</span>
        </div>
      </div>
    </div>
  </div>`;

  const svg = await satori(markup, {
    fonts: [
      {
        name: "Inter",
        data: Buffer.from(InterRegular),
        weight: 400,
      },
      {
        name: "Inter",
        data: Buffer.from(InterBold),
        weight: 700,
      },
    ],
    height: dimensions.height,
    width: dimensions.width,
  });

  const image = new Resvg(svg, {
    fitTo: {
      mode: "width",
      value: dimensions.width,
    },
  }).render();

  return new Response(image.asPng(), {
    headers: {
      "Content-Type": "image/png",
    },
  });
}

export async function getStaticPaths() {
  const posts = await getCollection("blog");
  const paths = posts.map((post) => {
    return {
      params: {
        slug: post.slug,
      },
      props: {
        title: post.data.title,
        pubDate: post.data.updatedDate ?? post.data.pubDate,
      },
    };
  });
  return paths;
}
