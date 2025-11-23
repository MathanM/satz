export const workDetailInfo: Record<string, {
  id: string;
  title: string;
  titleHtml: string;
  description: string;
  logo: string;
  primaryBackgroundColor: string;
  banner1: string;
  banner2: string;
  labels: string[];
  images: Array<{
    src: string;
    styles?: Record<string, string>;
  }>;
  links: { label: string, path: string }[];
  industry: string;
  goals: string;
  results: string[];
  designHero: string;
  typographyFont: string;
  colorSwatch: string[];
}> = {
  gym: {
    id: "gym",
    title: "Power House GYM",
    titleHtml: "Power House <span style='color: #FF0000;'>GYM</span>",
    description: "Power House Gym is a fitness brand that embodies strength, energy, and motivation. The goal was to create a dynamic and visually impactful brand identity that resonates with fitness enthusiasts and motivates them to achieve their goals.",
    logo: "gym/logo.svg",
    primaryBackgroundColor: "#FFE800",
    banner1: "gym/banner-1.png",
    banner2: "gym/banner-1.png",
    labels: ['Branding', 'Logo'],
    images: [
      {
        src: "gym/tile-1.png",
        styles: {
          "background-image": "url('/gym/tile-1.png')",
          "background-size": "auto 130%",
          "background-position": "center",
          "background-repeat": "no-repeat",
          "width": "55%"
        }
      },
      {
        src: "gym/tile-2.png",
        styles: {
          "background-image": "url('/gym/tile-2.png')",
          "background-size": "contain",
          "background-position": "center",
          "background-repeat": "no-repeat",
          "width": "45%"
        }
      },
      {
        src: "gym/tile-3.png",
        styles: {
          "background-image": "url('/gym/tile-3.png')",
          "background-size": "auto",
          "background-position": "center",
          "background-repeat": "no-repeat",
          "width": "35%"
        }
      },
      {
        src: "gym/tile-4.png",
        styles: {
          "background-image": "url('/gym/tile-4.png')",
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
    goals: "Create a Bold Identity: Develop a striking logo and visual system to represent the gym's energy and power. Inspire Action: Use vibrant colors and motivational messaging to drive engagement and action. Ensure Versatility: Design assets adaptable to various touchpoints, from gym interiors to marketing materials.",
    results: [
      "Power House Gym's branding was crafted to reflect its core values of strength, energy, and motivation. The dynamic logo, featuring bold typography and weight-inspired visuals, symbolizes power and fitness. A vibrant color palette of red, yellow, and black was chosen to evoke energy and passion while ensuring high visibility across all branding touchpoints.",
      "The branding was applied seamlessly across apparel, marketing materials, and digital platforms, including gym wear with motivational slogans like \"Do It Now\" and bold billboard designs showcasing fitness-focused imagery. This cohesive identity not only inspires members but also establishes Power House Gym as a vibrant and action-driven fitness brand."
    ],
    designHero: "gym/design-hero.png",
    typographyFont: "RUSHFORD CLEAN - REGULAR",
    colorSwatch: ["#EC1C24", "#FFE800", "#000000"]
  },
  boosync: {
    id: "boosync",
    title: "Boo-sync",
    titleHtml: "<span style='color: #00BC83;'>Boo</span>-sync",
    description: "I created a playful yet modern brand identity for Boo-Sync, the dog translator that turns barks into stories. From a friendly logo to vibrant colors, it's all about connecting pups and people in style!",
    logo: "boosync/logo.svg",
    primaryBackgroundColor: "#EEE5D4",
    banner1: "boosync/banner-1.png",
    banner2: "boosync/banner-2.png",
    labels: ['Branding', 'Logo'],
    images: [
      {
        src: "boosync/tile-1.png",
        styles: {
          "background-image": "url('/boosync/tile-1.png')",
          "background-size": "85% 85%",
          "background-position": "left bottom",
          "background-repeat": "no-repeat",
          "width": "55%"
        }
      },
      {
        src: "boosync/tile-2.png",
        styles: {
          "background-image": "url('/boosync/tile-2.png')",
          "background-size": "75% 75%",
          "background-position": "center",
          "background-repeat": "no-repeat",
          "width": "45%"
        }
      },
      {
        src: "boosync/tile-3.png",
        styles: {
          "background-image": "url('/boosync/tile-3.png')",
          "background-size": "auto",
          "background-position": "center",
          "background-repeat": "no-repeat",
          "width": "35%"
        }
      },
      {
        src: "boosync/tile-4.png",
        styles: {
          "background-image": "url('/boosync/tile-4.png')",
          "background-size": "auto 90%",
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
    goals: "To create a friendly and futuristic brand identity for Boo-Sync, a smart dog translator device, that communicates trust, innovation, and emotional connection between pets and their owners. The aim was to develop a logo, color palette, and visual system that resonate with both pet lovers and tech-savvy users.",
    results: [
        "The final brand identity for Boo-Sync captures the perfect balance between technology and emotion. The logo design is playful yet modern, symbolizing connection and communication between dogs and humans. A warm, vibrant color palette was chosen to evoke trust, friendliness, and innovation, making the product feel both smart and approachable.",
        "This cohesive branding was extended across app interfaces, packaging concepts, and marketing visuals, ensuring consistency and recognition. The overall identity positions Boo-Sync as a standout in the pet tech space—inviting, easy to use, and emotionally resonant for modern pet parents."
    ],
    designHero: "boosync/design-hero.png",
    typographyFont: "MODERNIZ-REGULAR",
    colorSwatch: ["#FFD251", "#2DBA88", "#EFE6D4", "#FF90CB"]
  },
  majesty: {
    id: "majesty",
    title: "Your Majesty",
    titleHtml: "Your <span style='color: #D4AF37;'>Majesty</span>",
    description: "Developed a bold, elegant brand identity with a crown-inspired logo for Your Majesty fashion brand and a refined color palette, reflecting sophistication and luxury.",
    logo: "",
    primaryBackgroundColor: "#00BC83",
    banner1: "",
    banner2: "",
    labels: ['Branding', 'Logo'],
    images: [],
    links: [
      { label: 'Home', path: '/home'},
      { label: 'Work', path: '/home'},
      { label: 'Your Majesty', path: ''},
    ],
    industry: "",
    goals: "",
    results: [],
    designHero: "",
    typographyFont: "",
    colorSwatch: []
  }
};
