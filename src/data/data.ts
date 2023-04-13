export type Level = "newbie" | "junior" | "intermediate" | "advanced" | "guru";

export type Project = {
  title: string;
  description: string;
  image: string;
  level: Level;
};

export const projects: Project[] = [
  {
    image: "portfolio.png",
    description: "This challenge will be perfect practice for anyone wanting to test their CSS Grid skills. Grid is such a powerful addition to CSS, so it&apos;s worth getting to grips with it!",
    title: "Testiomonial grid section",
    level: "junior",
  },
  {
    image: "portfolio_2.png",
    description: "In this challenge, you'll be building out an early access landing page that includes custom form validation.",
    title: "Pod request access landing page",
    level: "newbie",
  },
  {
    image: "portfolio_3.png",
    description: "This challenge has something for everyone. It’s a HTML and CSS only project, but we’ve also provided a JSON file of the test results for anyone wanting to practice JS.",
    title: "Results summary component",
    level: "newbie",
  },
  {
    image: "portfolio_4.png",
    description: "This HTML & CSS only challenge is perfect for anyone just starting out or anyone wanting a small project to play around with.",
    title: "NFT preview card component",
    level: "newbie",
  },
  {
    image: "portfolio_5.png",
    description: "This is a nice, small project to practice handling user interactions and updating the DOM. Perfect for anyone who has learned the basics of JavaScript!",
    title: "Interactive rating component",
    level: "newbie",
  },
  {
    image: "portfolio_6.png",
    description: "A nice layout-based challenge for beginners. This will test anyone who is new to multi-column and responsive layouts.",
    title: "Four card feature section",
    level: "newbie",
  },
  {
    image: "portfolio_7.png",
    description: "This project will test your layout skills. If you're starting to get confident with Flexbox or Grid, this will provide a nice challenge!",
    title: "Social proof section",
    level: "newbie",
  },
  {
    image: "portfolio_8.png",
    description: "In this challenge, you will build out the pricing component to the designs provided. This is perfect for beginners and people who want to complete a smaller challenge.",
    title: "Single price grid component",
    level: "newbie",
  },
  {
    image: "portfolio_9.png",
    description: "This challenge is designed to sharpen your JavaScript and form validation skills. Working with dates in JavaScript can be tricky, so this will be a nice test!",
    title: "Age calculator app",
    level: "junior",
  },
];