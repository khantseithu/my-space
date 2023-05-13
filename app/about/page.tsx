import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "About Us",
  description: "We are a social media company.",
};

function About() {
  return (
    <div>
      <h1>About</h1>
      <p>We are a social media company. </p>
    </div>
  );
}
export default About;
