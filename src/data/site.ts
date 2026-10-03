// Site-wide facts that are the same in every language.
// Edit contact details and social links here.

export const site = {
  name: 'Nina Schwarz',
  url: 'https://www.ninaschwarz.cz',
  location: 'New York, NY',
  email: 'nina.managementofficial@gmail.com',
  phone: { display: '+1 (646) 321-8275', href: 'tel:+16463218275' },
  // Kept at the same address as on the old site so existing links keep working.
  resume: '/s/Nina-Schwarz-Resume.pdf',
  socials: [
    { id: 'tiktok', label: 'TikTok', handle: '@ninaschwarz__', url: 'https://www.tiktok.com/@ninaschwarz__' },
    { id: 'instagram', label: 'Instagram', handle: '@ninaschwarz_', url: 'https://www.instagram.com/ninaschwarz_' },
    {
      id: 'spotify',
      label: 'Spotify',
      handle: 'Nina Schwarz',
      url: 'https://open.spotify.com/artist/7eult2AZFYEKG5VvUqL7ys',
    },
    { id: 'youtube', label: 'YouTube', handle: '@NINAYELLOW', url: 'https://www.youtube.com/@NINAYELLOW' },
  ],
  partner: { name: 'Ústecký kraj', url: 'https://www.kr-ustecky.cz/' },
} as const;

export type SocialId = (typeof site.socials)[number]['id'];
