import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Agustina Staltari",
  initials: "AA",
  location: "Mar del Plata, Argentina",
  locationLink:
    "https://www.google.com/maps/place/Mar+del+Plata,+Buenos+Aires+Province",
  about: "Arquitecta",
  summary:
    "Soy Arquitecta, actualmente trabajo en reconocido estudio de Arquitectura en Mar del Plata. A lo largo de mi experiencia descubrí cierto interés en el diseño de interiores. Actualmente me encuentro predispuesta a ampliar mis conocimientos en la materia. Me considero alguien proactiva, con buena predisposición para trabajar en equipo y abierta a nuevas experiencias. Busco crecer tanto personal como profesionalmente.",
  avatarUrl: "/avatar.jpeg",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "agus.staltari@gmail.com",
    tel: "+5492236333433",
    social: [
      // {
      //   name: "GitHub",
      //   url: "https://github.com/BartoszJarocki",
      //   icon: GitHubIcon,
      // },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/agustina-staltari-b9596b11b/",
        icon: LinkedInIcon,
      },
      // {
      //   name: "X",
      //   url: "https://x.com/BartoszJarocki",
      //   icon: XIcon,
      // },
    ],
  },
  education: [
    {
      school: "Universidad Nacional de Mar del Plata",
      degree: "Arquitectura",
      start: "2015",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Estudio Panasci",
      link: "https://www.instagram.com/estudiopanasci/?hl=en",
      badges: ["Full-Time"],
      title: "Arquitecta",
      logo: ParabolLogo,
      start: "2022",
      end: "Actualidad",
      description: `- Gestión de múltiples proyectos en simultáneo
        - Diseño de interiores, mobiliario y decoración
        - Relación con gremios y proveedores
        - Supervisión de tareas en obra
        - Desarrollo de proyectos de construcción y remodelación en viviendas particulares y comercios`,
    },
    {
      company: "Freelance",
      link: "/",
      badges: ["Part-Time"],
      title: "Arquitecta",
      logo: ClevertechLogo,
      start: "2021",
      end: "Actualidad",
      description: `
       - Anteproyecto en Mar del Sur, conjunto de viviendas
       - Diseño de mobiliario
       - Remodelación viviendas particulares
       - Confección de planos de Seguridad e Higiene para Comercios`,
    },
    {
      company: "Grupo DAS",
      link: "hhttps://www.instagram.com/grupodasconstrucciones/?hl=en",
      badges: ["Full-Time"],
      title: "Arquitecta",
      logo: JojoMobileLogo,
      start: "2021",
      end: "2022",
      description:
        "Renderizado 3D · Modelado 3D · Planos de construcción · AutoCAD",
    },
    {
      company: "DFS Studio",
      link: "https://www.instagram.com/dfs.estudio/",
      badges: ["Part-Time"],
      title: "Arquitecta",
      logo: NSNLogo,
      start: "2021",
      end: "2022",
      description:
        "Diseño de folletos · Publicidad · Renderizado · Adobe Photoshop",
    },
    {
      company: "Estudio Roberto Lopez del Hoyo",
      link: "/",
      badges: ["Part-Time"],
      title: "Arquitecta",
      logo: NSNLogo,
      start: "2021",
      end: "2021",
      description: "Dibujo técnico · Planos municipales · AutoCAD · SketchUp",
    },
  ],
  skills: [
    "Gestión de proyectos",
    "Diseño de interiores",
    "Mobiliario y decoración",
    "Dibujo técnico",
    "Renderizado 3D",
    "AutoCAD",
    "Revit",
    "SketchUp",
    "Lumion",
  ],
  projects: [
    {
      title: "Sarasa Negro",
      techStack: ["Diseño de interiores", "Dirección de obra"],
      description: "Restaurant de alto nivel en la ciudad de Mar del Plata",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Muu",
      techStack: ["Selección de mobiliario"],
      description: "Restaurant de carnes",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Sarasa Negro",
      techStack: ["Diseño de interiores", "Dirección de obra"],
      description: "Restaurant de alto nivel en la ciudad de Mar del Plata",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Muu",
      techStack: ["Selección de mobiliario"],
      description: "Restaurant de carnes",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Sarasa Negro",
      techStack: ["Diseño de interiores", "Dirección de obra"],
      description: "Restaurant de alto nivel en la ciudad de Mar del Plata",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Muu",
      techStack: ["Selección de mobiliario"],
      description: "Restaurant de carnes",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
  ],
} as const;
