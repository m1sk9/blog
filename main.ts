import blog from 'blog';
import { BlogSettings } from 'blog/types';

const blogSettings: BlogSettings = {
  author: 'm1sk9',
  title: 'blog.m1sk9.dev',
  avatar: 'https://github.com/m1sk9.png',
  avatarClass: 'rounded-full',
  lang: 'en',
  cover: '#aefcb1',
  favicon: './favicon.ico',
  dateFormat: (date) =>
    new Intl.DateTimeFormat('en', { dateStyle: 'long' }).format(date),
  links: [
    {
      title: 'GitHub',
      url: 'https://github.com/m1sk9',
    },
    {
      title: 'Twitter',
      url: 'https://twitter.com/m1sk9',
    },
  ],
};

blog(blogSettings);
