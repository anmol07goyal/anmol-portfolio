import Head from "next/head";
import About from "../components/About";
import Contact from "../components/contactComponent/Contact";
import Main from "../components/Main";
import Projects from "../components/projectsComponent/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Anmol | Unity Developer</title>
        <meta
          name="description"
          content="I’m a game developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
