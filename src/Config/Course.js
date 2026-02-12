import React from 'react'
import FullStack from "../assets/full-stack.png";
import FrontEnd from "../assets/front-end.png";
import BackEnd from "../assets/back-end.png";
import UiUx from "../assets/ui-ux.png";
import DataScience from "../assets/data-science.png";
import CyberSecurity from "../assets/cyber-security.png";
import MachineLearning from "../assets/machine-learning.png";
import Blockchain from "../assets/blockchain.png";
import CloudComputing from "../assets/cloud-computing.png";
import Ai from "../assets/ai.png";

const Items = [
  {
    id: 1,
    name: "Full Stack",
    cimage: FullStack,
    oldPrice: "15000",
    price: "10000",
    duration: "3 Months",
    description:
      "Learn complete web development from front-end to back-end using HTML, CSS, JavaScript, React, Node.js, databases, APIs, and real-world projects."
  },
  {
    id: 2,
    name: "Front End",
    cimage: FrontEnd,
    oldPrice: "12000",
    price: "8000",
    duration: "2 Months",
    description:
      "Master user interface development with HTML, CSS, JavaScript, React, responsive design, modern UI libraries, and best front-end practices."
  },
  {
    id: 3,
    name: "Back End",
    cimage:  BackEnd,
    oldPrice: "12000",
    price: "8000",
    duration: "2 Months",
    description:
      "Build powerful server-side applications using Node.js, databases, REST APIs, authentication, and backend architecture concepts."
  },
  {
    id: 4,
    name: "UI/UX",
    cimage: UiUx,
    oldPrice: "10000",
    price: "6000",
    duration: "1 Month",
    description:
      "Learn UI/UX fundamentals including user research, wireframing, prototyping, design systems, usability testing, and real-world design tools."
  },
  {
    id: 5,
    name: "Data Science",
    cimage: DataScience,
    oldPrice: "12000",
    price: "8000",
    duration: "2 Months",
    description:
      "Understand data analysis, data visualization, statistics, Python, data cleaning, and real-world data science case studies."
  },
  {
    id: 6,
    name: "Cyber Security",
    cimage: CyberSecurity,
    oldPrice: "10000",
    price: "6000",
    duration: "1 Month",
    description:
      "Learn cyber security fundamentals including network security, ethical hacking basics, threats, vulnerabilities, and security best practices."
  },
  {
    id: 7,
    name: "Machine Learning",
    cimage: MachineLearning,
    oldPrice: "12000",
    price: "8000",
    duration: "2 Months",
    description:
      "Learn machine learning concepts such as supervised and unsupervised learning, algorithms, model training, and real-world applications."
  },
  {
    id: 8,
    name: "Artificial Intelligence",
    cimage:  Ai,
    oldPrice: "12000",
    price: "8000",
    duration: "2 Months",
    description:
      "Explore artificial intelligence concepts including intelligent systems, neural networks, AI models, and practical AI use cases."
  },
  {
    id: 9,
    name: "Blockchain",
    cimage: Blockchain,
    oldPrice: "10000",
    price: "6000",
    duration: "1 Month",
    description:
      "Learn blockchain fundamentals including decentralized systems, smart contracts, cryptocurrencies, and blockchain applications."
  },
  {
    id: 10,
    name:  "Cloud-computing",
    cimage: CloudComputing,
    oldPrice: "10000",
    price: "6000",
    duration: "1 Month",
    description:
      "Understand cloud computing concepts such as cloud services, deployment models, AWS basics, scalability, and cloud security."
  }
];
const Headline = "Learn New Skills and Grow Your Career "

export { Items, Headline};
