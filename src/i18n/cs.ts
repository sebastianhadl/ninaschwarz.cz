// Czech copy. Mirrors en.ts key for key.
// Wrap a word in <em>…</em> to set it in italics, <strong>…</strong> for bold.

import type { Dictionary } from './en';

export const cs: Dictionary = {
  lang: 'cs',
  locale: 'cs-CZ',
  ogLocale: 'cs_CZ',
  langName: 'Čeština',
  langShort: 'CZ',

  meta: {
    title: 'Nina Schwarz — zpěvačka, tanečnice, herečka',
    description:
      'Nina Schwarz je zpěvačka, tanečnice, herečka a autorka písní působící v New Yorku. Životopis, ukázky vystoupení, fotografie a hudební projekty.',
    projectsTitle: 'Projekty — Nina Schwarz',
    projectsDescription:
      'Hudba Niny Schwarz: debutové album Yellow, singly Taste a High a hymna Avon® Síla v nás.',
  },

  nav: {
    about: 'o mně',
    videos: 'videa',
    photos: 'fotky',
    projects: 'projekty',
    contact: 'kontakt',
    resume: 'životopis',
    home: 'Nina Schwarz — úvod',
    menu: 'Menu',
    openMenu: 'Otevřít menu',
    closeMenu: 'Zavřít menu',
    primary: 'Hlavní navigace',
    social: 'Sociální sítě',
    language: 'Jazyk',
    skip: 'Přeskočit na obsah',
  },

  hero: {
    tagline: ['Tanečnice', 'Zpěvačka', 'Herečka'],
    imageAlt: 'Portrét Niny Schwarz v teplém světle na černém pozadí',
    scroll: 'dolů',
  },

  intro: {
    label: 'Začněte tady',
    items: [
      { lead: 'přečtěte si můj', word: 'životopis', target: 'resume' },
      { lead: 'podívejte se na má', word: 'videa', target: 'tapes' },
      { lead: 'prohlédněte si mé', word: 'fotky', target: 'photos' },
    ],
    // Tvary pro 1 / 2–4 / 5 a více (viz plural() v i18n/index.ts)
    counts: {
      videos: ['video', 'videa', 'videí'],
      photos: ['fotka', 'fotky', 'fotek'],
    },
  },

  strip: {
    alts: [
      'Nina Schwarz sedí na zemi v růžovo-bílé teplákové soupravě',
      'Nina Schwarz v taneční póze, balancuje na jedné noze v černém oblečení',
      'Detail Niny Schwarz v bílém saku s rukama ve vlasech',
    ],
  },

  roles: ['zpěvačka', 'tanečnice', 'herečka', 'modelka', 'skladatelka'],

  about: {
    heading: 'o <em>mně</em>',
    imageAlt: 'Nina Schwarz se směje, sedí na stoličce v bílém obleku na růžovém pozadí',
    paragraphs: [
      'Nina Schwarz je performerka žijící v New Yorku, i když v srdci zůstává hrdou Češkou. Na sociálních sítích sdílí pod jménem @ninaschwarz_ svou uměleckou cestu a oslovuje stále rostoucí publikum. Vystudovala prestižní Pražskou konzervatoř, kde získala <strong>absolutorium</strong> ve dvou hudebních oborech, a navíc absolvovala také hru na klavír. Za hudbou se poté vydala do New Yorku, kde v roce 2024 absolvovala obor muzikálové divadlo na <strong>The American Musical &amp; Dramatic Academy</strong>.',
      'Nina koncertovala po celé České republice a píše vlastní hudbu. Jako hlavní zpěvačka a spoluautorka stojí za oficiální <strong>hymnou Avon® na podporu boje proti rakovině</strong>, kterou zazpívala v rámci projektu Avon® za zdravá prsa. Pustila se také do hudební produkce a vydala debutové album „<strong>Yellow</strong>“, které doprovázejí tři působivé videoklipy. Má za sebou i dlouhou taneční kariéru – v extralize soutěžila v řadě disciplín a stylů. K jejím největším tanečním úspěchům patří titul <strong>mistryně světa</strong> v disco dance v kategoriích <strong>sólo</strong>, <strong>duo</strong> a <strong>formace</strong>.',
      'Jako performerka se podílela na řadě projektů v České republice i v New Yorku, kde ztvárnila několik slavných postav, a přispěla také k choreografii muzikálu Rebelové.',
    ],
    highlightsLabel: 'Ve zkratce',
    highlights: [
      { title: 'Mistryně světa', text: 'Disco dance — sólo, duo a formace' },
      { title: 'AMDA, New York', text: 'Muzikálové divadlo, absolventka 2024' },
      { title: 'Pražská konzervatoř', text: 'Dva hudební obory a hra na klavír' },
      { title: '„Yellow“', text: 'Debutové album a tři videoklipy' },
    ],
    cta: 'celý životopis',
  },

  tapes: {
    heading: 'podívejte se na má <em>vystoupení</em>',
    items: [
      { title: 'Ukázka vystoupení 01', alt: 'Nina Schwarz na jevišti v růžových šatech' },
      { title: 'Ukázka vystoupení 02', alt: 'Nina Schwarz na jevišti se svatebním závojem' },
    ],
    play: 'Přehrát',
  },

  photos: {
    heading: 'fotky',
    alts: [
      'Portrét Niny Schwarz ve žlutém tričku na růžovém pozadí',
      'Usměvavý detail Niny Schwarz v červeném topu s rozevlátými vlasy',
      'Portrét Niny Schwarz v růžovém a zlatém světle s grafickým líčením očí',
      'Nina Schwarz v taneční póze, balancuje na jedné noze v černém oblečení',
      'Nina Schwarz sedí na stoličce v bílém obleku s hlavou nakloněnou ke straně',
      'Nina Schwarz v tmavé bundě u okna, zahalená v mlžném oparu',
      'Nina Schwarz v nízké taneční póze, v předklonu se zkříženýma rukama',
      'Portrét Niny Schwarz v bílém saku na růžovém pozadí',
      'Celá postava Niny Schwarz v růžovém topu a sukni na červeném pozadí',
      'Nina Schwarz v širokém tanečním výpadu, pohled zezadu',
    ],
    open: 'Otevřít fotku',
  },

  work: {
    heading: 'další z mé <em>tvorby</em>',
    cta: 'všechny projekty',
    view: 'Zobrazit projekt',
  },

  contact: {
    heading: 'ozvěte <em>se</em>',
    emailLabel: 'e-mail',
    phoneLabel: 'telefon',
    socialLabel: 'sledujte',
    resumeCta: 'stáhnout životopis',
  },

  footer: {
    backToTop: 'zpět na začátek',
    partnerAlt: 'Logo Ústeckého kraje',
    rights: 'Všechna práva vyhrazena.',
  },

  projects: {
    heading: 'projekty',
    kind: { album: 'Album', single: 'Singl' },
    released: 'Vydáno',
    label: 'Label',
    distributed: 'Distribuce',
    listen: 'poslechnout',
    listenOn: 'Poslechnout na Spotify',
    watchOn: 'přehrát na YouTube',
    playVideo: 'Přehrát video',
    stills: 'záběry',
    previous: 'Předchozí',
    next: 'Další',
    back: 'všechny projekty',
    artworkAlt: 'obal',
    stillAlt: 'záběr',
    videoNote: 'Video se po spuštění načte z YouTube.',
  },

  lightbox: {
    label: 'Prohlížeč fotek',
    close: 'Zavřít',
    previous: 'Předchozí fotka',
    next: 'Další fotka',
    of: 'z',
  },

  notFound: {
    title: 'Stránka nenalezena — Nina Schwarz',
    heading: 'tahle stránka se už <em>uklonila</em>',
    text: 'Stránka, kterou hledáte, odešla ze scény.',
    cta: 'zpět na začátek',
  },
};
