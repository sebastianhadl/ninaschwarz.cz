// English copy. Every key here must also exist in cs.ts.
// Wrap a word in <em>…</em> to set it in italics, <strong>…</strong> for bold.

export const en = {
  lang: 'en',
  locale: 'en-US',
  ogLocale: 'en_US',
  langName: 'English',
  langShort: 'EN',

  meta: {
    title: 'Nina Schwarz — Singer, Dancer, Actor',
    description:
      'Nina Schwarz is a New York City-based performer — singer, dancer, actor and songwriter. Résumé, performance tapes, photos and music projects.',
    projectsTitle: 'Projects — Nina Schwarz',
    projectsDescription:
      'Music by Nina Schwarz: the debut album Yellow, the singles Taste and High, and the Avon® anthem Síla v nás.',
  },

  nav: {
    about: 'about me',
    videos: 'videos',
    photos: 'photos',
    projects: 'projects',
    contact: 'contact',
    resume: 'résumé',
    home: 'Nina Schwarz — home',
    menu: 'Menu',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    primary: 'Main navigation',
    social: 'Social media',
    language: 'Language',
    skip: 'Skip to content',
  },

  hero: {
    tagline: ['Dancer', 'Singer', 'Actor'],
    imageAlt: 'Portrait of Nina Schwarz in warm light against a black background',
    scroll: 'scroll',
  },

  intro: {
    label: 'Start here',
    items: [
      { lead: 'read my', word: 'résumé', target: 'resume' },
      { lead: 'watch my', word: 'tapes', target: 'tapes' },
      { lead: 'see my', word: 'photos', target: 'photos' },
    ],
    // Word forms for "1 video" / "2 videos" (see plural() in i18n/index.ts)
    counts: {
      videos: ['video', 'videos'],
      photos: ['photo', 'photos'],
    },
  },

  strip: {
    alts: [
      'Nina Schwarz sitting on the floor in a pink and white tracksuit',
      'Nina Schwarz in a dance pose, balancing on one leg in a black outfit',
      'Close-up of Nina Schwarz in a white blazer with her hands in her hair',
    ],
  },

  roles: ['singer', 'dancer', 'actor', 'model', 'songwriter'],

  about: {
    heading: 'about <em>me</em>',
    imageAlt: 'Nina Schwarz laughing, seated on a stool in a white suit against a pink backdrop',
    paragraphs: [
      'Nina Schwarz is a New York City-based performer even though at heart she is a proud Czech girl. As @ninaschwarz_ on social media, Nina shares her artistic journey, captivating an ever-growing audience. She graduated from the prestigious Prague Conservatory where she obtained her <strong>Associate Degree</strong> in two different music majors and in addition to that she chose to graduate from Piano Performance. Nina further decided to follow her music journey to New York City and graduated with a Degree in Musical Theatre from <strong>The American Musical &amp; Dramatic Academy</strong> in 2024.',
      'Nina has spent her career concerting across the Czech Republic, writing her own music where she has made significant contributions as the Lead Singer and Co-writer of the official <strong>Avon® Cancer Awareness</strong> anthem, which she performed as part of the Avon® Breast Cancer Crusade. Additionally, Nina ventured into the realm of music production with the release of her debut Album titled “<strong>Yellow</strong>,” accompanied by three captivating music videos. Nina has also had a long dance career where she has represented the Extra League in which she competed in several disciplines and styles. Among her greatest dance achievements is becoming <strong>World Champion</strong> in category <strong>Solo</strong>, <strong>Duo</strong> and <strong>Formation Disco Dance</strong>.',
      'As a Performer she had the chance to be part of several projects both in the Czech Republic and in New York where she brought to life several of the famous characters and even contributed to the Choreography for the Musical Rebelove.',
    ],
    highlightsLabel: 'At a glance',
    highlights: [
      { title: 'World Champion', text: 'Disco Dance — Solo, Duo & Formation' },
      { title: 'AMDA, New York', text: 'Musical Theatre, class of 2024' },
      { title: 'Prague Conservatory', text: 'Two music majors & Piano Performance' },
      { title: '“Yellow”', text: 'Debut album & three music videos' },
    ],
    cta: 'full résumé',
  },

  tapes: {
    heading: 'check out my <em>performances</em>',
    items: [
      { title: 'Performance tape 01', alt: 'Nina Schwarz performing on stage in a pink dress' },
      { title: 'Performance tape 02', alt: 'Nina Schwarz on stage wearing a bridal veil' },
    ],
    play: 'Play',
  },

  photos: {
    heading: 'photos',
    alts: [
      'Headshot of Nina Schwarz in a yellow top against a pink backdrop',
      'Smiling close-up of Nina Schwarz in a red top with windswept hair',
      'Portrait of Nina Schwarz lit in pink and gold with graphic eye make-up',
      'Nina Schwarz in a dance pose, balancing on one leg in a black outfit',
      'Nina Schwarz seated on a stool in a white suit, head tilted to the side',
      'Nina Schwarz in a dark jacket by a window, surrounded by haze',
      'Nina Schwarz in a low dance pose, bending forward with crossed arms',
      'Portrait of Nina Schwarz in a white blazer against a pink backdrop',
      'Full-length photo of Nina Schwarz in a pink top and skirt against a red backdrop',
      'Nina Schwarz in a wide dance lunge, seen from behind',
    ],
    open: 'Open photo',
  },

  work: {
    heading: 'see more of my <em>work</em>',
    cta: 'all projects',
    view: 'View project',
  },

  contact: {
    heading: 'get in <em>touch</em>',
    emailLabel: 'email',
    phoneLabel: 'phone',
    socialLabel: 'follow',
    resumeCta: 'download résumé',
  },

  footer: {
    backToTop: 'back to start',
    partnerAlt: 'Ústecký kraj (Ústí Region) logo',
    rights: 'All rights reserved.',
  },

  projects: {
    heading: 'projects',
    kind: { album: 'Album', single: 'Single' },
    released: 'Released',
    label: 'Label',
    distributed: 'Distributed',
    listen: 'listen',
    listenOn: 'Listen on Spotify',
    watchOn: 'watch on YouTube',
    playVideo: 'Play video',
    stills: 'stills',
    previous: 'Previous',
    next: 'Next',
    back: 'all projects',
    artworkAlt: 'cover artwork',
    stillAlt: 'still',
    videoNote: 'The video is loaded from YouTube when you press play.',
  },

  lightbox: {
    label: 'Photo viewer',
    close: 'Close',
    previous: 'Previous photo',
    next: 'Next photo',
    of: 'of',
  },

  notFound: {
    title: 'Page not found — Nina Schwarz',
    heading: 'this page took a <em>bow</em>',
    text: 'The page you are looking for has left the stage.',
    cta: 'back to the start',
  },
};

export type Dictionary = typeof en;
