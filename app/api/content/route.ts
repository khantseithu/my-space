import { NextResponse } from "next/server";

const posts = [
  {
    title: "5 Tips for Staying Productive While Working From Home",
    slug: "5-tips-for-staying-productive-while-working-from-home",
    content:
      "With remote work becoming more common, it can be tough to stay productive when you’re not in the office. In this post, we’ll share five tips to help you stay on task and make the most of your workday while working from home.",
  },
  {
    title: "The Benefits of a Balanced Diet",
    slug: "the-benefits-of-a-balanced-diet",
    content:
      "Eating a balanced diet is important for your overall health and well-being. In this post, we’ll explore the many benefits of a balanced diet, including improved energy levels, better sleep, and a reduced risk of chronic diseases.",
  },
  {
    title: "How to Start a Successful Blog in 2023",
    slug: "how-to-start-a-successful-blog-in-2023",
    content:
      "Blogging can be a great way to share your thoughts and ideas with the world, but it can be hard to know where to start. In this post, we’ll walk you through the steps to starting a successful blog in 2023, including choosing a niche, setting up your website, and promoting your content.",
  },
  {
    title: "10 Affordable Ways to Upgrade Your Home Decor",
    slug: "10-affordable-ways-to-upgrade-your-home-decor",
    content:
      "You don’t need to break the bank to give your home a fresh new look. In this post, we’ll share 10 affordable ways to upgrade your home decor, from painting an accent wall to adding plants and accessories.",
  },
  {
    title: "The Importance of Regular Exercise",
    slug: "the-importance-of-regular-exercise",
    content:
      "Regular exercise is essential for your physical and mental health. In this post, we’ll explore the many benefits of exercise, including improved cardiovascular health, increased strength and endurance, and reduced stress and anxiety.",
  },
  {
    title: "5 Simple Ways to Reduce Your Carbon Footprint",
    slug: "5-simple-ways-to-reduce-your-carbon-footprint",
    content:
      "Reducing your carbon footprint is an important way to help combat climate change. In this post, we’ll share five simple ways to reduce your carbon footprint, including using public transportation, reducing meat consumption, and using energy-efficient appliances.",
  },
  {
    title: "How to Improve Your Public Speaking Skills",
    slug: "how-to-improve-your-public-speaking-skills",
    content:
      "Public speaking can be a nerve-wracking experience, but it’s a skill that can be learned and improved with practice. In this post, we’ll share tips for improving your public speaking skills, from preparing your content to mastering your delivery.",
  },
  {
    title: "The Benefits of Meditation",
    slug: "the-benefits-of-meditation",
    content:
      "Meditation is a powerful tool for reducing stress and improving mental clarity. In this post, we’ll explore the many benefits of meditation, including reduced anxiety and depression, improved focus and concentration, and increased self-awareness.",
  },
  {
    title: "How to Travel on a Budget",
    slug: "how-to-travel-on-a-budget",
    content:
      "Traveling can be expensive, but there are ways to explore the world without breaking the bank. In this post, we’ll share tips for traveling on a budget, including finding affordable accommodations, saving on transportation, and taking advantage of free activities and attractions.",
  },
];

export async function GET() {
  return NextResponse.json(posts);
}
