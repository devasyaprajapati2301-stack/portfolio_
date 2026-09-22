// category values used for filtering: "FULL STACK" | "AI / ML" | "DATA SCIENCE" | "DSA"

export const projects = [
  {
    id: "health-plus",
    name: "Health-Plus",
    category: "FULL STACK",
    description:
      "A healthcare web application focused on appointment management, built to make booking and tracking doctor appointments simple for patients and clinics.",
    problem:
      "Manual appointment booking is slow and error-prone. Health-Plus digitizes the flow with a queue-management concept so patients know where they stand and staff can manage load in real time.",
    tech: ["React", "Node.js", "MongoDB", "Express.js"],
    features: [
      "Appointment booking & scheduling",
      "Queue-management system for live appointment handling",
      "Patient & doctor dashboards",
      "REST API-driven backend",
    ],
    github: "https://github.com/devasyaprajapati2301-stack/Health-plus", // PLACEHOLDER
    demo: "", // leave empty if no live demo
  },
  {
    id: "ecommerce",
    name: "E-Commerce Website",
    category: "FULL STACK",
    description:
      "A full-stack e-commerce project covering the full shopping experience — from product catalog to checkout — backed by a database-driven API.",
    problem:
      "Building a complete commerce flow end-to-end: product management, authentication, cart/checkout experience, and a persistent backend.",
    tech: ["React", "Node.js", "MongoDB", "Express.js"],
    features: [
      "Product management & catalog",
      "User authentication",
      "Shopping cart & checkout experience",
      "Backend APIs with database integration",
    ],
    github: "", // PLACEHOLDER
    demo: "",
  },
  {
    id: "sorting-visualizer",
    name: "Sorting Visualization",
    category: "DSA",
    description:
      "An interactive tool that visualizes how classic sorting algorithms operate, step by step, to make algorithmic behavior and complexity tangible.",
    problem:
      "Algorithms are easier to internalize when you can see them move. This project animates comparisons and swaps in real time across multiple algorithms.",
    tech: ["JavaScript", "React"],
    features: [
      "Bubble Sort, Merge Sort, and Quick Sort visualizations",
      "Step-by-step animation of comparisons & swaps",
      "Time complexity callouts per algorithm",
      "Adjustable array size & speed",
    ],
    github: "https://github.com/devasyaprajapati2301-stack/dsa_project.git", // PLACEHOLDER
    demo: "https://sorting-algo-dsa.vercel.app/",
  },
  {
    id: "ds-ml-projects",
    name: "Data Science & ML Explorations",
    category: "DATA SCIENCE",
    description:
      "An evolving collection of data science and machine learning projects — including exploratory data analysis and predictive modeling — built while learning the field hands-on.",
    problem:
      "Applying ML fundamentals to real datasets: cleaning data, exploring patterns, and building models like house price prediction to test the full pipeline from raw data to prediction.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"],
    features: [
      "Exploratory Data Analysis (EDA) notebooks",
      "House Price Prediction model",
      "Data visualization & insight generation",
      "Ongoing — new models added as I learn",
    ],
    github: "https://github.com/devasyaprajapati2301-stack/OIBSIP", // PLACEHOLDER
    demo: "",
  },
];

export const projectCategories = ["ALL", "FULL STACK", "AI / ML", "DATA SCIENCE", "DSA"];
