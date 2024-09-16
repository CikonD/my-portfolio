import React from "react";
import {
  Navbar,
  Hero,
  About,
  Projects,
  SkillsAndExperience,
  Education,
  Achievements,
  BlogPosts,
  Footer,
  Stats,
  ExtraCurricular,
} from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className="sm:px-16 px-6 flex justify-center items-center">
      <div className="xl:max-w-[1280px] w-full">
        <Navbar />
      </div>
    </div>

    <div className="bg-primary flex justify-center items-start">
      <div className="xl:max-w-[1280px] w-full">
        <Hero />
      </div>
    </div>

    <div className="bg-primary sm:px-16 px-6 flex justify-center items-start">
      <div className="xl:max-w-[1280px] w-full">
        <About />
        <Stats />
        <Projects />
        <SkillsAndExperience />
        <Education />
        <Achievements />
        <BlogPosts />
        <ExtraCurricular />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
