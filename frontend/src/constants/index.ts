import { acme, apex, avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8, avatar9, celestial, echo, instagram, linkedin, pin, pulse, quantum, x, youtube } from "@/assets/images";

/**
 * An array of navigation items, each with an id, title, and href.
 * These items are used to build the main navigation menu of the application.
 */

// ========================= NAVIGATION =========================

export const navigationItems = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    title: "Features",
    href: "/features",
  },
  {
    id: 3,
    title: "Visualizer",
    href: "/visualizer",
  },
  {
    id: 4,
    title: "AI Coach",
    href: "/ai-coach",
  },
  {
    id: 5,
    title: "Start",
    href: "/start",
  },
];

// ========================= PRICING =========================

export const pricingTiers = [
  {
    id: 1,
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Start Learning",
    popular: false,
    inverse: false,
    features: [
      "Practice unlimited basic problems",
      "Step-by-step code visualization",
      "Java & C++ support",
      "Basic AI hints",
      "Progress tracking",
    ],
  },
  {
    id: 2,
    title: "Pro",
    monthlyPrice: 12,
    buttonText: "Upgrade to Pro",
    popular: true,
    inverse: true,
    features: [
      "Everything in Free",
      "Unlimited AI coaching",
      "Advanced execution visualization",
      "Complexity analysis",
      "Personalized learning roadmap",
      "Premium problem sets",
      "Interview preparation",
    ],
  },
  {
    id: 3,
    title: "Ultimate",
    monthlyPrice: 25,
    buttonText: "Go Ultimate",
    popular: false,
    inverse: false,
    features: [
      "Everything in Pro",
      "Company interview tracks",
      "Weekly coding reports",
      "Mock interviews",
      "Performance analytics",
      "Priority AI responses",
      "Unlimited submissions",
      "Early access features",
    ],
  },
];

// ========================= TESTIMONIALS =========================

export const testimonials = [
  {
    id: 1,
    text: "Watching every variable change finally made recursion click for me.",
    src: avatar1,
    name: "Aarav Mehta",
    username: "@aaravcodes",
  },
  {
    id: 2,
    text: "The AI coach doesn't give away answers—it teaches you how to think.",
    src: avatar2,
    name: "Priya Shah",
    username: "@priyadev",
  },
  {
    id: 3,
    text: "This visualizer helped me crack coding interviews much faster than traditional practice sites.",
    src: avatar3,
    name: "Rohan Patel",
    username: "@rohancodes",
  },
  {
    id: 4,
    text: "Seeing BFS and DFS animate made graph algorithms incredibly easy to understand.",
    src: avatar4,
    name: "Emily Carter",
    username: "@emcodes",
  },
  {
    id: 5,
    text: "I finally understand dynamic programming instead of memorizing patterns.",
    src: avatar5,
    name: "Daniel Kim",
    username: "@dkim",
  },
  {
    id: 6,
    text: "The execution timeline is my favorite feature. Debugging has never been easier.",
    src: avatar6,
    name: "Noah Wilson",
    username: "@nowilson",
  },
  {
    id: 7,
    text: "Learning data structures visually is a complete game changer.",
    src: avatar7,
    name: "Sophia Brown",
    username: "@sophiadev",
  },
  {
    id: 8,
    text: "The AI hints pushed me toward the solution without spoiling it.",
    src: avatar8,
    name: "Lucas Anderson",
    username: "@lucascodes",
  },
  {
    id: 9,
    text: "This feels like having a personal DSA mentor available 24/7.",
    src: avatar9,
    name: "Olivia Taylor",
    username: "@oliviat",
  },
];

// ========================= LOGO MARQUEE =========================
// Replace with your own logos later.

export const logoMarqueeItems = [
  { id: 1, src: apex },
  { id: 2, src: acme },
  { id: 3, src: celestial },
  { id: 4, src: echo },
  { id: 5, src: pulse },
  { id: 6, src: quantum },
];

// ========================= FOOTER =========================

export const footerItems = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    title: "Features",
    href: "/features",
  },
  {
    id: 3,
    title: "Visualizer",
    href: "/visualizer",
  },
  {
    id: 4,
    title: "AI Coach",
    href: "/ai-coach",
  },
  {
    id: 5,
    title: "Pricing",
    href: "/pricing",
  },
  {
    id: 6,
    title: "Contact",
    href: "/contact",
  },
];

// ========================= SOCIALS =========================

export const footerSocialsItems = [
  {
    id: 1,
    src: instagram,
    href: "https://instagram.com",
  },
  {
    id: 2,
    src: linkedin,
    href: "https://linkedin.com",
  },
  {
    id: 3,
    src: pin,
    href: "https://github.com", // Replace GitHub icon later
  },
  {
    id: 4,
    src: x,
    href: "https://x.com",
  },
  {
    id: 5,
    src: youtube,
    href: "https://youtube.com",
  },
];

// ========================= PRICING CARDS =========================

export const pricingItems = [
  {
    id: 1,
    title: "Free",
    price: 0,
    btn: "Start Learning",
    features: [
      { id: 1, feature: "Unlimited practice problems" },
      { id: 2, feature: "Java & C++ support" },
      { id: 3, feature: "Step-by-step visualization" },
      { id: 4, feature: "Basic AI guidance" },
      { id: 5, feature: "Learning dashboard" },
    ],
  },
  {
    id: 2,
    title: "Pro",
    price: 12,
    btn: "Upgrade",
    features: [
      { id: 1, feature: "Everything in Free" },
      { id: 2, feature: "Unlimited AI coaching" },
      { id: 3, feature: "Complexity analysis" },
      { id: 4, feature: "Interview preparation" },
      { id: 5, feature: "Advanced visualizations" },
      { id: 6, feature: "Learning roadmap" },
      { id: 7, feature: "Premium challenges" },
    ],
  },
  {
    id: 3,
    title: "Ultimate",
    price: 25,
    btn: "Go Ultimate",
    features: [
      { id: 1, feature: "Everything in Pro" },
      { id: 2, feature: "Mock coding interviews" },
      { id: 3, feature: "Company-specific DSA tracks" },
      { id: 4, feature: "Unlimited submissions" },
      { id: 5, feature: "Priority AI responses" },
      { id: 6, feature: "Performance analytics" },
      { id: 7, feature: "Early access features" },
      { id: 8, feature: "Dedicated mentor sessions" },
    ],
  },
];