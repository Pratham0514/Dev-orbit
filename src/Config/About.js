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
  role: "UI/UX Designer",
  image: Boy1,
  description: "Designs intuitive and user-friendly interfaces, creates wireframes and prototypes, and ensures an excellent user experience across web and mobile applications."
},
{
  id: 2,
  name: "Jane Smith",
  role: "Full Stack Developer, Front End, Back End",
  image: Boy2,
  description: "Develops and maintains complete web applications, handling both frontend user interfaces and backend server logic, APIs, and database integration."
},
{
  id: 3,
  name: "Bob Johnson",
  role: "Data Science, Cyber Security",
  image: Girl1,
  description: "Analyzes complex data to generate insights and implements security measures to protect systems, networks, and sensitive information from cyber threats."
},
{
  id: 4,
  name: "Alice Brown",
  role: "Machine Learning, Artificial Intelligence",
  image: Girl2,
  description: "Builds intelligent systems using machine learning models and AI algorithms to automate processes, enhance decision-making, and improve business solutions."
},
{
  id: 5,
  name: "Mark Davis",
  role: "Blockchain, Cloud Computing",
  image: Boy1,
  description: "Designs secure blockchain-based solutions and manages scalable cloud infrastructure to ensure high availability, performance, and data security."
}
  ],
};