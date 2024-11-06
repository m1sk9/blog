import type { Site, SocialObjects } from './types';

export const SITE: Site = {
  website: 'https://blog.m1s.dev/',
  author: 'm1sk9',
  profile: 'https://m1s.dev/',
  desc: 'knowledge sharing blog',
  title: 'blog.m1s.dev',
  ogImage: 'blog-m1s-og.png',
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  editPost: {
    url: 'https://github.com/m1sk9/blog.m1s.dev/edit/main/src/content/blog',
    text: 'Edit on GitHub',
    appendFilePath: true,
  },
};

export const LOCALE = {
  lang: 'ja', // html lang code. Set this empty and default will be "en"
  langTag: ['en-US'], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: 'GitHub',
    href: 'https://github.com/m1sk9',
    linkTitle: 'GitHub: m1sk9',
    active: true,
  },
  {
    name: 'Mail',
    href: 'mailto:me@m1sk9.dev',
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: 'Mastodon',
    href: 'https://mstdn.maud.io/@m1sk9',
    linkTitle: 'Mastodon: @m1sk9@mstdn.maud.io',
    active: true,
  },
];
