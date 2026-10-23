export type GalleryItem = string | { src: string; wide?: boolean }

export type Project = {
  title: string
  image: string
  video?: string
  client?: string
  year?: string
  intro?: string
  body?: string[]
  gallery?: GalleryItem[]
}

export type Service = {
  title: string
  cta: string
  image?: string // non più usato: la scheda categoria non ha più l'hero
  paragraphs: string[]
  projects: Project[]
}

// Fallback per le immagini non ancora disponibili.
const cover = '/images/00_copertina_progcult.jpg'

export const services: Service[] = [
  {
    title: "Production",
    cta: 'See productions',
    paragraphs: [
      "We create journalistic and documentary content for media, brands and institutions. Our productions combine a strong focus on production quality with significant authorial experience.",
      "We bring a multidisciplinary approach across different media and follow each project through all its stages: from conception and development to production."
    ],
    projects: [
      {
        title: "VULC",
        image: "/images/01_vulc_mockup.jpg",
        client: 'Geopop',
        year: '2025',
        intro: "For Geopop, Reversocollettivo produced an 80-minute documentary dedicated to Italy’s active volcanoes and the communities that live in daily relationship with them.",
        body: [
          "The production required extensive research, planning and coordination of filming across different locations, as well as over a month of on-field production work.",
          "Directed by Claudio Morelli, the documentary was screened in several cinemas across Italy and presented at the Giffoni Film Festival. The film was produced as part of Geopop’s membership campaign, thanks to the contribution of the project’s “patrons”. Released for free and without advertising, it has reached 1 million views on YouTube.",
          "The aim was to create a narrative capable of making complex scientific topics accessible without sacrificing the human and visual dimensions of the territory. The documentary combines science communication, reportage and landscape observation, alternating naturalistic imagery and moments of strong visual impact with encounters with people, experts and local communities.",
          "At the centre of the story is Andrea Moccia, Geopop’s founder and leading science communicator, who guides the viewer through the different locations and introduces the scientific aspects of volcanic activity through a direct and informal language."
        ],
        gallery: [
          "/images/01_vulc_bts01.jpg",
          "/images/01_vulc_bts02.jpg",
          { src: "/images/01_vulc_cinema_01.jpeg", wide: true },
          "/images/01_vulc_frame01.png",
          "/images/01_vulc_frame02.png",
          { src: "/images/01_vulc_frame03.png", wide: true }
        ]
      },
      {
        title: "Rai Report",
        image: "/images/02_report__heroimg.jpg",
        client: 'Report (Rai)',
        intro: "For Report, a programme broadcast on Italian national television, Reversocollettivo collaborates with journalist Nancy Porsia on the production of investigative reports focusing on the Israeli-Palestinian conflict.",
        body: [
          "Two of the projects already produced are Anatomia di un crimine (Anatomy of a crime), dedicated to attacks on the healthcare system in the Gaza Strip, and Chi prega per la guerra (Who prays for war), which explores the developments of the conflict through its political, religious and territorial dimensions.",
          "For these projects, Reversocollettivo handled production and on field filming, working closely with the journalist and Report’s editorial team to document complex contexts and translate journalistic research into audiovisual storytelling. Further collaborations are currently in development and will be released in the coming months."
        ],
        // TODO: sostituire le immagini ADC con versioni senza loghi (richiesto nel workbook).
        gallery: [
          "/images/02_report_ADC_01.jpg",
          "/images/02_report_ADC_02.jpg",
          { src: "/images/02_report_ADC_03.jpg", wide: true },
          "/images/02_report_PDG_01.jpg",
          "/images/02_report_PDG_02.jpg",
          { src: "/images/02_report_PDG_03.jpg", wide: true }
        ]
      },
      {
        title: "Social Value",
        image: "/images/03_EYsv_heroimg.jpg",
        video: "/video/03_EYsv_hero.mp4", // metti il nome vero del file
        client: 'EY',
        intro: "Social Value brings together EY’s commitment to supporting projects with a strong social impact, selected through an internal vote.",
        body: [
          "The programme supports organisations working in areas aligned with the EY Foundation’s priorities: social vulnerability, young people, skills development and the future of work.",
          "Reversocollettivo oversaw the documentation and storytelling of the activities supported by the Foundation, through reportage and documentaries developed across different formats and local contexts."
        ],
        gallery: [
          "/images/03_EYsv_img01.jpg",
          "/images/03_EYsv_img02.jpg",
          { src: "/images/03_EYsv_img03.jpg", wide: true },
          "/images/03_EYsv_img04.jpg",
          "/images/03_EYsv_img05.jpg",
          { src: "/images/03_EYsv_img06.jpg", wide: true },
          "/images/03_EYsv_img07.jpg",
          "/images/03_EYsv_img08.jpg",
          { src: "/images/03_EYsv_img09.jpg", wide: true },
          { src: "/images/03_EYsv_img10.jpg", wide: true }
        ]
      },
      {
        title: "Docs for NZZ",
        // TODO: aggiungere immagine di progetto e gallery (non presenti nel workbook).
        image: cover,
        client: 'NZZ Format',
        year: '2025–2026',
        intro: "Between 2025 and 2026, Reversocollettivo produced and carried out on-the-ground filming for four documentaries for NZZ Format, the documentary programme of the Swiss media organisation.",
        body: [
          "The projects address issues of international relevance through on field reportage, from migration along the US-Mexico border and the political transformation of the United States to forced disappearances in Mexico ahead of the 2026 World Cup.",
          "Patrick Tombola, co-founder of Reversocollettivo, oversaw, wrote and produced the reportage throughout all its stages. The work was carried out in collaboration with NZZ’s post-production team, which handled the editing, adapting the production to the editorial requirements of the media organisation."
        ]
      },
      {
        title: "ARTE Re:",
        // TODO: aggiungere immagine di progetto e gallery (non presenti nel workbook).
        image: cover,
        client: 'ARTE',
        intro: "For ARTE Re:, Reversocollettivo produced a reportage dedicated to the system of asylum seeker centres established by Italy in Albania.",
        body: [
          "Directed by Patrick Tombola, the documentary follows the stories of people involved in the reception and repatriation system, connecting the situation of asylum seekers in Italy with the so-called “Albania model” and its political and social implications.",
          "Reversocollettivo oversaw the entire organisation of production on location and the realisation of the reportage throughout all its stages, up to final delivery."
        ]
      }
    ]
  },
  {
    title: "Cultural projects",
    cta: 'See cultural projects',
    paragraphs: [
      "We conceive and develop cultural projects in collaboration with institutions, companies, authors, communities and professionals.",
      "We work on concept development, content creation, partner networks and the enhancement of public and private funding opportunities."
    ],
    projects: [
      {
        title: "Sobremesa",
        // TODO: aggiungere immagine di progetto e gallery.
        image: "/images/01_sobrem_mockup.png",
        intro: "Sobremesa is a transnational cooperation project dedicated to the themes of food, migration and belonging, co-funded by the European Union.",
        body: [
          "Active across Greece, Portugal, the Basque Region of Spain and Italy, the project brings together artists, researchers, cultural practitioners and local communities to question dominant narratives around identity, integration and cultural heritage.",
          "Reversocollettivo is responsible for project’s communication and editorial direction. It oversees the definition of the narrative strategy, as well as the production and coordination of content, bringing different perspectives, practices and cultures into dialogue through editorial and audiovisual formats."
        ],
        gallery: [
          { src: "/images/01_sobrem_adg_mockup.jpg", wide: true },
          "/images/01_sobrem_pic02.jpg",
          "/images/01_sobrem_pic03.jpg",
          { src: "/images/01_sobrem_pic04.jpg", wide: true }
        ]
      },
      {
        title: "G124 x Renzo Piano",
        image: "/images/02_G124.jpg",
        client: 'G124',
        intro: "Since 2014, architect Renzo Piano has been developing G124, a permanent laboratory dedicated to the study and regeneration of several Italian peripheral areas.",
        body: [
          "The project, named after the number of the senator’s office at Palazzo Giustiniani, began with the architect’s appointment as Senator for Life. Piano uses his parliamentary salary to fund the work of young architects and urban planners who join the project on a yearly basis.",
          "For this project, Claudio Morelli oversaw the editorial productions, working on journalistic research, photographic production and photo editing."
        ]
      },
      {
        title: "Visioni e Connessioni",
        // TODO: aggiungere immagine di progetto e gallery.
        image: "/images/03_EYvc_mockup.png",
        client: 'EY',
        year: '2025',
        intro: "Visioni e Connessioni is an editorial project by EY, curated by Walter Mariotti and Claudio Morelli.",
        body: [
          "Through interviews and narrative reportage, the project aims to tell the spirit and the stories behind protagonists and activities of Italian organisations that have taken on a significant role as social actors.",
          "The first edition, conceived and produced in 2025, explored the world of Italian family foundations, placing at its centre presidents, entrepreneurs and visionary figures who lead these institutions through a direct personal commitment."
        ],
        gallery: [
          "/images/03_EYvc_01.jpg",
          "/images/03_EYvc_02.jpg",
          { src: "/images/03_EYvc_03.jpg", wide: true },
          "/images/03_EYvc_04.jpg",
          "/images/03_EYvc_05.jpg",
          { src: "/images/03_EYvc_06.jpg", wide: true },
          "/images/03_EYvc_07.jpg",
          "/images/03_EYvc_08.jpg",
          { src: "/images/03_EYvc_09.jpg", wide: true },
          "/images/03_EYvc_10.jpg",
          "/images/03_EYvc_11.jpg",
          { src: "/images/03_EYvc_12.jpg", wide: true }
        ]
      },
      {
        title: "Pompei Buffer Zone",
        image: "/images/04_pompeiiBF_01.jpg",
        client: 'Pompeii Archaeological Park',
        year: '2026',
        intro: "For Strategia Fotografia 2026, a call promoted by the Italian Ministry of Culture, Reversocollettivo developed a proposal for an authorial and documentary photographic research project in the Vesuvius area, in collaboration with the Pompeii Archaeological Park.",
        body: [
          "The project explores the relationship between archaeological heritage, landscape and living communities, investigating how people inhabit and experience today a territory profoundly shaped by the presence of the volcano.",
          "The proposal, focused on the production of new photographic works intended for the Park’s permanent collection, was deemed eligible for the call."
        ],
        gallery: [
          "/images/04_pompeiiBF_02.jpg",
          "/images/04_pompeiiBF_03.jpg",
          { src: "/images/04_pompeiiBF_04.jpg", wide: true },
          "/images/04_pompeiiBF_05.jpg",
          "/images/04_pompeiiBF_06.jpg"
        ]
      },
      {
        title: "Progetto ROTTE",
        image: "/images/05_rotte.jpg",
        intro: "ROTTE is a documentary photography and training project dedicated to the representation of contemporary migration and European borders.",
        body: [
          "The project stems from the desire to support an independent and ongoing narrative of migration, bringing images beyond traditional editorial circuits and directly into the social sphere. Photography, training and public dialogue become tools for building an active memory, capable of transforming the narrative of migration into awareness.",
          "Conceived in connection with Lampedusa’s Week of Memory and Welcome, ROTTE brings authors, photojournalists, institutions and the public into dialogue through a programme dedicated to documentary photography and its civic and cultural role."
        ]
      }
    ]
  },
  {
    title: "Editorial direction",
    cta: 'See editorial work',
    paragraphs: [
      "We develop editorial projects for companies, organisations and institutions, whether digital, physical or interactive, offering our clients a modern, alternative and effective strategic model.",
      "We provide strategic consultancy, particularly in editorial direction and video strategy, to traditional and new media seeking to position themselves in the market through original, distinctive and high-quality production, while respecting and enhancing their resources and business models."
    ],
    projects: [
      {
        title: "VDnews",
        image: cover,
        intro: "VD is a digital media platform dedicated to the production of original stories, ranging from social reportage to lifestyle content.",
        body: [
          "Reversocollettivo oversaw the editorial direction of the project, from the brand launch phase to the definition and management of the editorial line throughout the entire production process.",
          "The work covered both original journalistic production and the development of branded content, ensuring editorial and narrative consistency across different formats and content."
        ],
        gallery: [
          //{ src: "/images/01_vd_mockup02.png", wide: true }
        ]
      },
      {
        title: "Slowmag",
        image: "/images/02_slowmag_mockup.png",
        client: "Slow Food Milano",
        intro: "Slowmag is a pilot communication project developed for Slow Food Milano.",
        body: [
          "The partner’s objective was to design an alternative communication channel capable of enhancing the spirit of the association and the sense of community that characterises its affiliated organisations and initiatives.",
          "Reversocollettivo created a fully-fledged magazine to collect the stories of Lombardy-based producers and restaurant owners who share the values promoted by Slow Food."
        ]
      },
      {
        title: "Chef in Camicia",
        image: "/images/03_cinc_mockup01.png",
        year: "2023",
        intro: "Chef in Camicia is a digital media platform focused on the production of editorial and branded content in the food sector.",
        body: [
          "In 2023 Claudio Morelli, founder of Reversocollettivo, carried out an editorial direction consultancy project centred on the rethinking and rebranding of the editorial product, with a focus on the production of highly distinctive original content.",
          "Beyond rethinking the visual identity, the main work involved imagining a new content flow with a strong editorial drive, bringing together food storytelling with lifestyle narratives and the documentation of current affairs and contemporary phenomena related to the media platform’s area of focus."
        ],
        gallery: [
          { src: "/images/03_cinc_frame01.png", wide: true },
          "/images/03_cinc_frame02.png",
          "/images/03_cinc_frame03.png"
        ]
      },
      {
        title: "Poster Media",
        image: "/images/04_poster_mockup01.png",
        intro: "Poster is an editorial project born from the idea and commitment of the founders of Reversocollettivo, aimed at offering a journalistic platform that combines product quality, innovation in the media world, and a commitment to independence.",
        body: [
          "Designed and built by journalists, Poster serves a singular interest: that of the public and its readers. It is a high-quality content production made up of stories, reportage, and original documentary videos. Innovative formats are paired with modern and flexible distribution methods, merging physical and digital elements. All of this is done without losing sight of or compromising the pursuit of knowledge and information dissemination, whether traditional or futuristic.",
          "Poster aims to build a community that connects journalism with localities, information with the public, and dissemination with knowledge."
        ],
        gallery: [
          { src: "/images/04_poster_mockup02.png", wide: true }
        ]
      }
    ]
  }
]