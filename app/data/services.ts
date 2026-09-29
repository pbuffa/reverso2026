export type Project = {
  title: string
  image: string
  client?: string
  year?: string
  intro?: string
  body?: string[]
  gallery?: string[]
}

export type Service = {
  title: string
  image: string
  paragraphs: string[]
  projects: Project[]
}

const cover = '/images/00_copertina_progcult.jpg'

const placeholder = {
  image: cover,
  client: 'Da inserire',
  year: '2025',
  intro: 'Frase introduttiva da inserire.',
  body: ['Testo da inserire.', 'Testo da inserire.'],
  gallery: [cover, cover, cover, cover]
}

export const services: Service[] = [
  {
    title: 'Production',
    image: cover, // hero della scheda categoria: metti la foto reale
    paragraphs: [
      'We create journalistic and documentary content for media, brands and institutions. Our productions combine a strong focus on production quality with significant authorial experience.',
      'We bring a multidisciplinary approach across different media and follow each project through all its stages: from conception and development to production.'
    ],
    projects: [
      {
        title: 'VULC',
        image: cover,
        client: 'Geopop',
        year: '2025',
        intro:
          'For Geopop, Reversocollettivo produced an 80-minute documentary dedicated to Italy’s active volcanoes and the communities that live in daily relationship with them.',
        body: [
          'The production required extensive research, planning and coordination of filming across different locations, as well as over a month of on-field production work.',
          'Directed by Claudio Morelli, the documentary was screened in several cinemas across Italy and presented at the Giffoni Film Festival. The film was produced as part of Geopop’s membership campaign, thanks to the contribution of the project’s “patrons”. Released for free and without advertising, it has reached 1 million views on YouTube.',
          'The aim was to create a narrative capable of making complex scientific topics accessible without sacrificing the human and visual dimensions of the territory. The documentary combines science communication, reportage and landscape observation, alternating naturalistic imagery and moments of strong visual impact with encounters with people, experts and local communities.',
          'At the centre of the story is Andrea Moccia, Geopop’s founder and leading science communicator, who guides the viewer through the different locations and introduces the scientific aspects of volcanic activity through a direct and informal language.'
        ],
        gallery: [cover, cover, cover, cover]
      },
      { ...placeholder, title: 'Rai Report' },
      { ...placeholder, title: 'Social value' }
    ]
  },
  {
    title: 'Cultural production',
    image: cover,
    paragraphs: [
      'We conceive and develop cultural projects in collaboration with institutions, companies, authors, communities and professionals.',
      'We work on concept development, content creation, partner networks and the enhancement of public and private funding opportunities.'
    ],
    projects: [
      { ...placeholder, title: 'Sobremesa' },
      { ...placeholder, title: 'G124 x Renzo Piano' },
      { ...placeholder, title: 'Visioni e Connessioni' },
      { ...placeholder, title: 'Pompei Buffer Zone' },
      { ...placeholder, title: 'Progetto ROTTE' }
    ]
  },
  {
    title: 'Editorial direction',
    image: cover,
    paragraphs: [
      'We develop editorial projects for companies, organisations and institutions, whether digital, physical or interactive, offering our clients a modern, alternative and effective strategic model.',
      'We provide strategic consultancy, particularly in editorial direction and video strategy, to traditional and new media seeking to position themselves in the market through original, distinctive and high-quality production, while respecting and enhancing their resources and business models.'
    ],
    projects: [
      { ...placeholder, title: 'VDnews' },
      { ...placeholder, title: 'Chef in Camicia' },
      { ...placeholder, title: 'Poster Media' }
    ]
  }
]