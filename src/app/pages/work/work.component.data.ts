export const workDetailInfo: Record<string, {
  id: string;
  title: string;
  titleHtml: string;
  description: string;
  logo: string;
  primaryBackgroundColor: string;
  banner1: string;
  banner2?: string;
  labels: string[];
  images: Array<{
    src: string;
    styles?: Record<string, string>;
    cssClass?: string;
    alt?: string;
  }>;
  links: { label: string, path: string }[];
  industry: string;
  goals: string;
  results: string[];
  designHero: string;
  typographyFont?: string;
  colorSwatch: string[];
  colorBackgroundColor?: string;
  typographyBackgroundColor?: string;
  typoImage?: string;
  metaTitle: string;
  metaDescription: string;
  logoAlt: string;
  banner1Alt: string;
  banner2Alt?: string;
  designHeroAlt: string;
  typoImageAlt?: string;
}> = {
  gym: {
    id: "gym",
    title: "Power House GYM",
    titleHtml: "Power House <span style='color: #FF0000;'>GYM</span>",
    description: "Power House Gym is a fitness brand identity built around strength, energy, and motivation. The goal was to design a dynamic, visually impactful logo and brand system that resonates with fitness enthusiasts and drives them to achieve their goals.",
    logo: "gym/logo.svg",
    primaryBackgroundColor: "#FFE800",
    banner1: "gym/banner-1.webp",
    banner2: "gym/banner-1.webp",
    labels: ['Branding', 'Logo'],
    images: [
      {
        src: "gym/tile-1.webp",
        alt: "Power House Gym brand colour palette — red yellow black fitness branding by Satzartz",
        styles: {
          "background-image": "url('/gym/tile-1.webp')",
          "background-size": "auto 130%",
          "background-position": "center",
          "background-repeat": "no-repeat",
          "width": "55%"
        }
      },
      {
        src: "gym/tile-2.webp",
        alt: "Power House Gym gym wear apparel branding — motivational slogan Do It Now designed by Satzartz",
        styles: {
          "background-image": "url('/gym/tile-2.webp')",
          "background-size": "contain",
          "background-position": "center",
          "background-repeat": "no-repeat",
          "width": "45%"
        }
      },
      {
        src: "gym/tile-3.webp",
        alt: "Power House Gym billboard and outdoor branding mockup — fitness brand identity by Satzartz India",
        styles: {
          "background-image": "url('/gym/tile-3.webp')",
          "background-size": "auto",
          "background-position": "center",
          "background-repeat": "no-repeat",
          "width": "35%"
        }
      },
      {
        src: "gym/tile-4.webp",
        alt: "Power House Gym digital marketing brand assets — social media fitness branding by Satzartz",
        styles: {
          "background-image": "url('/gym/tile-4.webp')",
          "background-size": "auto 110%",
          "background-position": "center",
          "background-repeat": "no-repeat",
          "width": "65%"
        }
      }
    ],
    links: [
      { label: 'Home', path: '/home'},
      { label: 'Work', path: '/home'},
      { label: 'Power House GYM', path: ''},
    ],
    industry: "Fitness & Wellness",
    goals: "Bold Brand Identity: Design a striking logo and visual system to represent the gym's raw energy and power. Inspire Action: Use vibrant colours and motivational messaging to drive member engagement. Ensure Versatility: Create brand assets adaptable across every touchpoint — from gym interiors to digital marketing materials.",
    results: [
      "Power House Gym's brand identity was crafted to reflect its core values of strength, energy, and motivation. The dynamic logo design features bold typography and weight-inspired visuals that symbolise power and fitness. A vibrant colour palette of red, yellow, and black evokes energy and passion while ensuring high visibility across every brand touchpoint.",
      "The identity system was applied seamlessly across apparel, marketing materials, and digital platforms — including gym wear with the motivational slogan \"Do It Now\" and bold billboard designs with fitness-focused imagery. This cohesive fitness branding not only inspires members but firmly establishes Power House Gym as a bold, action-driven brand in the fitness and wellness space."
    ],
    designHero: "gym/design-hero.webp",
    typographyFont: "RUSHFORD CLEAN - REGULAR",
    colorSwatch: ["#EC1C24", "#FFE800", "#000000"],
    metaTitle: "Power House Gym Fitness Brand Identity Design · Satzartz",
    metaDescription: "How Satzartz designed a bold fitness brand identity for Power House Gym — logo, colour system, and gym branding by a brand identity designer based in Tamil Nadu, India.",
    logoAlt: "Power House Gym bold fitness logo design — red yellow black brand identity by Satzartz India",
    banner1Alt: "Power House Gym fitness brand identity full hero — gym branding designed by Satzartz Tamil Nadu",
    banner2Alt: "Power House Gym fitness brand identity full hero — gym branding designed by Satzartz Tamil Nadu",
    designHeroAlt: "Power House Gym logo construction and brand system — fitness identity design by Satzartz India"
  },
  boosync: {
    id: "boosync",
    title: "Boo-sync",
    titleHtml: "<span style='color: #00BC83;'>Boo</span>-sync",
    description: "I designed a playful yet modern brand identity for Boo-Sync — a smart dog translator that turns barks into stories. From a friendly logo design to a vibrant colour system, every element is built around connecting pets and people in style.",
    logo: "boosync/logo.svg",
    primaryBackgroundColor: "#EEE5D4",
    banner1: "boosync/banner-1.webp",
    banner2: "boosync/banner-2.webp",
    labels: ['Branding', 'Logo'],
    images: [
      {
        src: "boosync/tile-1.webp",
        cssClass: "contain-mobile",
        alt: "Boo-Sync typography and colour palette — MODERNIZ font pet tech branding by Satzartz India",
        styles: {
          "background-image": "url('/boosync/tile-1.webp')",
          "background-size": "85% 85%",
          "background-position": "left bottom",
          "background-repeat": "no-repeat",
          "width": "55%",
          "height": "320px"
        }
      },
      {
        src: "boosync/tile-2.webp",
        cssClass: "contain-mobile",
        alt: "Boo-Sync mobile app UI design mockup — pet tech brand identity by Satzartz India",
        styles: {
          "background-image": "url('/boosync/tile-2.webp')",
          "background-size": "75% 75%",
          "background-position": "center",
          "background-repeat": "no-repeat",
          "width": "45%",
          "height": "320px"
        }
      },
      {
        src: "boosync/tile-3.webp",
        cssClass: "contain-mobile",
        alt: "Boo-Sync icon set design — dog activity icons for pet tech brand by Satzartz India",
        styles: {
          "background-image": "url('/boosync/tile-3.webp')",
          "background-size": "cover",
          "background-position": "center",
          "background-repeat": "no-repeat",
          "width": "35%"
        }
      },
      {
        src: "boosync/tile-4.webp",
        cssClass: "contain-mobile",
        alt: "Boo-Sync 3D retail display and product packaging mockup — pet brand identity by Satzartz",
        styles: {
          "background-image": "url('/boosync/tile-4.webp')",
          "background-size": "cover",
          "background-position": "center",
          "background-repeat": "no-repeat",
          "width": "65%"
        }
      }
    ],
    links: [
      { label: 'Home', path: '/home'},
      { label: 'Work', path: '/home'},
      { label: 'Boo-sync', path: ''},
    ],
    industry: "Pet Tech / Consumer Electronics",
    goals: "To design a friendly, futuristic brand identity for Boo-Sync — a smart pet tech device — that communicates trust, innovation, and emotional connection between dogs and their owners. The brief was to develop a logo, colour palette, and visual identity system that resonates with both pet lovers and tech-savvy users worldwide.",
    results: [
        "The final brand identity for Boo-Sync strikes the perfect balance between technology and emotion. The logo design is playful yet modern — symbolising connection and communication between dogs and humans. A warm, vibrant colour palette evokes trust, friendliness, and innovation, making the product feel both intelligent and approachable.",
        "This cohesive brand identity system was extended across app interfaces, packaging design concepts, and marketing visuals — ensuring consistency and instant recognition. The overall pet tech branding positions Boo-Sync as a standout in its category: inviting, easy to use, and emotionally resonant for modern pet parents."
    ],
    designHero: "boosync/design-hero.webp",
    typographyFont: "MODERNIZ-REGULAR",
    colorSwatch: ["#FFD251", "#2DBA88", "#EFE6D4", "#FF90CB"],
    metaTitle: "Boo-Sync Pet Tech Brand Identity Design · Satzartz",
    metaDescription: "How Satzartz built a playful, modern brand identity for Boo-Sync — a smart dog translator startup. Logo design, colour system, and packaging by Satzartz, Tamil Nadu, India.",
    logoAlt: "Boo-Sync pixel heart logo design — playful pet tech brand identity by Satzartz India",
    banner1Alt: "Boo-Sync brand identity packaging mockup — Connecting Barks yellow box design by Satzartz",
    banner2Alt: "Boo-Sync pet tech brand hero — dog translator brand identity designed by Satzartz Tamil Nadu",
    designHeroAlt: "Boo-Sync logo lockup with dogs — pet tech brand identity visual system by Satzartz India"
  },
  ezhumin: {
    id: "ezhumin",
    title: "Ezhumin",
    titleHtml: "<span style='color: #000000;'>Ezhumin</span><img src='/ezhumin/badge.svg' style='height: 60px;' alt='Ezhumin 1st Runner-Up badge — Tamil Nadu Government EV Branding Competition award'/>",
    description: "EzhuMin (எழுமின்) is a Tamil-led brand identity for Tamil Nadu’s EV revolution — uniting regional culture, language, and clean energy into one visual system. Awarded 1st Runner-Up in the Tamil Nadu Government EV Branding Competition. A bold, future-focused identity for sustainable mobility.",
    logo: "ezhumin/logo.svg",
    primaryBackgroundColor: "#FFE800",
    banner1: "ezhumin/banner-1.webp",
    labels: ['Branding', 'Logo'],
    typoImage: "ezhumin/typo.webp",
    images: [
      {
        src: "ezhumin/tile-1.webp",
        cssClass: "contain-mobile",
        alt: "Ezhumin EV charging station signage mockup — government brand identity by Satzartz India",
        styles: {
          "background-color": "#08D308",
          "background-image": "url('/ezhumin/tile-1.webp')",
          "background-size": "auto 77%",
          "background-position": "44% center",
          "background-repeat": "no-repeat",
          "width": "35%",
          "height": "650px"
        }
      },
      {
        src: "ezhumin/tile-2.webp",
        cssClass: "contain-mobile",
        alt: "Ezhumin social media post mockups — Tamil Nadu EV brand identity by Satzartz India",
        styles: {
          "background-color": "#08D308",
          "background-image": "url('/ezhumin/tile-2.webp')",
          "background-size": "73%",
          "background-position": "center",
          "background-repeat": "no-repeat",
          "width": "65%",
          "height": "650px"
        }
      },
      {
        src: "ezhumin/tile-3.webp",
        alt: "Ezhumin charging station outdoor signage — EV brand by Satzartz Tamil Nadu",
        styles: {
          "background-color": "#08D308",
          "background-image": "url('/ezhumin/tile-3.webp')",
          "background-size": "cover",
          "background-position": "center",
          "background-repeat": "no-repeat",
          "width": "52%",
          "height": "490px"
        }
      },
      {
        src: "ezhumin/tile-4.webp",
        cssClass: "contain-mobile",
        alt: "Ezhumin EV vehicle illustrations — auto rickshaw and bike brand identity by Satzartz India",
        styles: {
          "background-color": "#08D308",
          "background-image": "url('/ezhumin/tile-4.webp')",
          "background-size": "75%",
          "background-position": "center",
          "background-repeat": "no-repeat",
          "width": "48%",
          "height": "490px"
        }
      }
    ],
    links: [
      { label: 'Home', path: '/home'},
      { label: 'Work', path: '/home'},
      { label: 'Ezhumin', path: ''},
    ],
    industry: "Energy / Sustainability / EV / Power Solutions",
    goals: "The goal was to design a government brand identity that feels authentically Tamil while clearly communicating electric vehicle mobility and clean energy. The identity system needed to work across public infrastructure and mass communication platforms — balancing government authority with a modern, tech-forward optimism. A key objective was to make the EV brand instantly recognisable through bold visual forms, minimal illustration, and strong cultural symbolism visible in busy urban environments.",
    results: [
      "The final outcome — எழுமின் (EzhuMin) — is a government brand identity that unites Tamil language, culture, and technology into one cohesive visual system. The name, derived from எழு (rise) and மின் (electricity), reinforces progress powered by clean energy. A bold Tamil logotype with an integrated lightning stroke was designed to symbolise motion, transformation, and forward momentum — a signature mark for Tamil Nadu's EV movement.",
      "The colour palette performs across both digital and physical environments. Deployed across EV charging station mockups, hoardings, vehicles, and social media, the system demonstrates strong real-world adaptability. This project proves that regional language-led brand identity design can be modern, scalable, and impactful — particularly for public-sector and government branding initiatives in India."
    ],
    designHero: "ezhumin/design-hero.webp",
    colorSwatch: ["#FEEC24", "#08D308", "#47CAFF"],
    colorBackgroundColor: "#08D308",
    typographyBackgroundColor: "#08D308",
    metaTitle: "Ezhumin EV Brand Identity — Tamil Nadu Government Project · Satzartz",
    metaDescription: "Award-winning EV brand identity for Tamil Nadu's government EV initiative. 1st Runner-Up in the Tamil Nadu EV Branding Competition. Designed by Satzartz, brand identity designer, India.",
    logoAlt: "Ezhumin எழுமின் Tamil EV brand logo — bold Tamil logotype with lightning stroke by Satzartz",
    banner1Alt: "Ezhumin EV brand identity hoarding mockup — Tamil Nadu street billboard designed by Satzartz",
    designHeroAlt: "Ezhumin logo construction breakdown — abstract electric spark and Tamil typography by Satzartz",
    typoImageAlt: "Ezhumin brand typography and colour palette — TAU Elango Mahatam font EV branding by Satzartz"

  },
  majesty: {
    id: "majesty",
    title: "Your Majesty",
    titleHtml: "<span style='color: #F20A55;'>Your</span>&nbsp;<span style='color: #000000;'>Majesty</span>",
    description: "Your Majesty is a fashion brand identity built around bold elegance — for people who wear their confidence like a crown. The brief called for a luxury brand identity that felt commanding without losing warmth, and premium without feeling cold or distant.",
    logo: "majesty/logo.svg",
    primaryBackgroundColor: "#002E34",
    banner1: "majesty/banner-1.webp",
    banner2: "majesty/banner-2.webp",
    labels: ['Branding', 'Logo'],
    images: [
      {
        src: "majesty/tile-1.webp",
        cssClass: "contain-mobile",
        alt: "Your Majesty brand colour palette — deep teal fuchsia pink gold fashion branding by Satzartz",
        styles: {
          "background-image": "url('/majesty/tile-1.webp')",
          "background-size": "60%",
          "background-position": "center",
          "background-repeat": "no-repeat",
          "width": "50%",
          "height": "500px"
        }
      },
      {
        src: "majesty/tile-2.webp",
        cssClass: "contain-mobile",
        alt: "Your Majesty swing tag and apparel branding mockup — luxury fashion identity by Satzartz India",
        styles: {
          "background-image": "url('/majesty/tile-2.webp')",
          "background-size": "60%",
          "background-position": "bottom",
          "background-repeat": "no-repeat",
          "width": "50%",
          "height": "500px"
        }
      },
      {
        src: "majesty/tile-3.webp",
        cssClass: "contain-mobile",
        alt: "Your Majesty social media brand visuals — fashion brand identity system by Satzartz India",
        styles: {
          "background-image": "url('/majesty/tile-3.webp')",
          "background-size": "60%",
          "background-position": "top",
          "background-repeat": "no-repeat",
          "width": "35%",
          "height": "500px"
        }
      },
      {
        src: "majesty/tile-4.webp",
        cssClass: "contain-mobile",
        alt: "Your Majesty packaging and label design mockup — luxury brand identity by Satzartz India",
        styles: {
          "background-image": "url('/majesty/tile-4.webp')",
          "background-size": "75%",
          "background-position": "center",
          "background-repeat": "no-repeat",
          "width": "65%",
          "height": "500px"
        }
      }
    ],
    links: [
      { label: 'Home', path: '/home'},
      { label: 'Work', path: '/home'},
      { label: 'Your Majesty', path: ''},
    ],
    industry: "Fashion & Luxury",
    goals: "Design a luxury brand identity that signals authority and elegance instantly — the kind that makes people feel something before they read a single word. Create a logomark that functions as a standalone icon — recognisable across apparel tags, social media, packaging design, and signage. Build a fashion brand colour system using bold contrast that feels ownable and forward-thinking in a competitive market.",
    results: [
      "The final fashion brand identity for Your Majesty is anchored by a bold crown logomark — a symbol of authority and self-expression placed at the heart of every touchpoint. The logo design was built to stay legible at any size, from embroidered clothing tags to large-format outdoor hoardings.",
      "The colour palette delivers a striking, premium contrast that feels modern and fashion-forward. Applied across swing tags, apparel mockups, and social media visuals, this luxury brand identity system gives Your Majesty a genuine, commanding presence. The result is a cohesive fashion identity that communicates sophistication without losing edge — a brand its customers wear with pride."
    ],
    designHero: "majesty/design-hero.webp",
    typographyFont: "",
    colorSwatch: ["#F20A55", "#002E34", "#FFBF02"],
    metaTitle: "Your Majesty Fashion Brand Identity Design · Satzartz",
    metaDescription: "How Satzartz designed a bold crown-inspired luxury brand identity for Your Majesty — logo, colour palette, and fashion branding by a brand identity designer in Tamil Nadu, India.",
    logoAlt: "Your Majesty crown logomark — luxury fashion brand identity designed by Satzartz India",
    banner1Alt: "Your Majesty fashion brand identity hero — bold elegant crown logo by Satzartz Tamil Nadu",
    banner2Alt: "Your Majesty luxury brand visual identity — fashion branding designed by Satzartz India",
    designHeroAlt: "Your Majesty logo system and brand construction — fashion identity design by Satzartz India"
  }
};
