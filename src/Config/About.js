// ================= IMPORT IMAGES =================
import Boy1 from "../assets/Boy1.jpg";
import Boy2 from "../assets/Boy2.jpg";
import Girl1 from "../assets/girl1.jpg";  // make sure file name is correct
import Girl2 from "../assets/girl2.jpg";  // make sure file name is correct


// ================= ABOUT SECTION =================
export const AboutContent = {
  headline: "We are dedicated to building developers for tomorrow’s technology",

  description:
    "Our mission is to empower students with practical coding skills that help them solve real-world problems, build innovative ideas, and create successful careers in technology.",

  differencesHeadline: "What Makes Us Different",

  differences: [
    "Beginner-friendly approach with step-by-step guidance",
    "Real-world projects and practical assignments",
    "Industry-focused curriculum",
    "Online, flexible, and project-based learning",
    "Guidance from experienced mentors",
  ],

  visionHeadline: "Our Vision",

  vision: [
    "To empower students with practical coding skills that help them solve real-world problems and build successful careers.",
    "To provide a supportive and inclusive learning environment that fosters creativity and problem-solving.",
  ],

  compactHeadline: "Short Version",

  compactDescription:
    "We help students learn through practical, project-based learning. Our goal is to turn beginners into confident developers ready for real-world challenges.",
};


// ================= TEAM SECTION =================
export const TeamContent = {
  headline: "Our Team",

  members: [
    {
      id: 1,
      name: "John Doe",
      role: "CEO",
      image: Boy1,
      description: "Founder and visionary leader of the company.",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "CTO",
      image: Boy2,
      description: "Leads the technical strategy and innovation.",
    },
    {
      id: 3,
      name: "Bob Johnson",
      role: "CFO",
      image: Girl1,
      description: "Manages financial planning and operations.",
    },
    {
      id: 4,
      name: "Alice Brown",
      role: "COO",
      image: Girl2,
      description: "Oversees daily business operations.",
    },
    {
      id: 5,
      name: "Mark Davis",
      role: "CIO",
      image: Boy1,
      description: "Handles information systems and IT management.",
    },
  ],
};