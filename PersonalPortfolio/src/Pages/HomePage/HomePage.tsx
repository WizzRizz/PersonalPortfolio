import { Card } from "../../components";
import {
  DiscordLogo,
  GitHubLogo,
  LinkedIn,
  RoundCircle,
} from "../../components";

import ourspa from "../../assets/ourspa.png";
import niomUI from "../../assets/niomUI.png";
import DiscordDashlink from "../../assets/DiscordLink.png";
import niomParts from "../../assets/niomParts.png";
import profilePic from "../../assets/profilePic.png";

const goDiscord = () => {
  window.open("https://discord.com/users/353953706384818177", "_blank");
};
const goGitHub = () => {
  window.open("https://github.com/WizzRizz", "_blank");
};
const goLinkedIn = () => {
  window.open("https://www.linkedin.com/in/harsh-hemraz-38317b2b1/", "_blank");
};

function Home() {
  return (
    <>
      <main className="hero">
        <nav className="flex items-center justify-between p-2 text-left">
          <p className="header text-white">Harsh Hemraz</p>
          <div className="flex flex-row items-center gap-4">
            <button className="hover:scale-110" onClick={goDiscord}>
              <DiscordLogo />
            </button>
            <button className="hover:scale-110" onClick={goGitHub}>
              <GitHubLogo className="size-6" />
            </button>
            <button className="hover:scale-110" onClick={goLinkedIn}>
              <LinkedIn className="size-6" />
            </button>
            <button className="flex flex-row items-center gap-1 rounded-lg border border-white px-4 py-1 text-xs text-white transition-colors hover:bg-gray-700">
              <RoundCircle className="size-2.5" color="green" />
              <span>Let's Talk</span>
            </button>
          </div>
        </nav>

        <div
          className="
          absolute inset-x-0 bottom-0
          flex flex-col
          px-6 pb-10
          sm:px-8 sm:pb-12
          lg:px-10 lg:pb-16
          textsection
          
        "
        >
          <p className="text-primary/40 text-sm sm:text-base ">
            -Creative Developer
          </p>
          <p className="hero-name text-primary glitch">
            <span className="glitch" data-text="Harsh Hemraz">
              Harsh
            </span>
          </p>
          <p className="hero-name text-yellow glitch">
            <span className="glitch" data-text="Harsh Hemraz">
              Hemraz
            </span>
          </p>
          <p className="text-primary/90 text-sm sm:text-base font-semibold">
            - Fullstack Developer / AI Enthusiast
          </p>
          <p className="text-sm text-primary/70 mt-3 w-full sm:w-172 mb-10 lg:mb-1">
            {" "}
            Software Engineering student passionate about building modern web
            apps and AI-driven solutions. Skilled in Java, C#, React,
            TypeScript, and Python, I enjoy turning ideas into clean, practical
            software while growing as a developer.
          </p>
        </div>
      </main>

      <section className="card-container textsection">
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 mb-4">
          <p className="text-yellow whitespace-nowrap">Featured Projects</p>
          <p className="text-primary/70 text-base sm:text-[10px] ">
            -- A section of recent projects, from idea to interactive experience
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 pb-10 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            title="Our Spa"
            description="Built and deployed a live spa website for a Mauritian wellness business.
"
            link="https://our-spa-mu.com"
            img={ourspa}
            avatars={[
              {
                src: "https://avatars.githubusercontent.com/u/240051129?s=64&v=4",
                link: "https://github.com/WizzRizz",
              },
              {
                src: "https://avatars.githubusercontent.com/u/122863540?v=4",
                link: "https://github.com/Nomekuma",
              },
            ]}
          />
          <Card
            title="Niom UI"
            description="A focused set of accessible React components for building consistent product interfaces without starting from zero.
"
            link="https://docs.niomparts.com"
            img={niomUI}
            avatars={[
              {
                src: "https://avatars.githubusercontent.com/u/240051129?s=64&v=4",
                link: "https://github.com/WizzRizz",
              },
              {
                src: "https://avatars.githubusercontent.com/u/122863540?v=4",
                link: "https://github.com/Nomekuma",
              },
            ]}
          />
          <Card
            title="Discord Dashlink"
            description="Built and deployed Dashlink, a personal link hub that brings my social profiles and online presence together in one place.
"
            link="https://hxrsh.is-a.dev"
            img={DiscordDashlink}
            avatars={[
              {
                src: "https://avatars.githubusercontent.com/u/240051129?s=64&v=4",
                link: "https://github.com/WizzRizz",
              },
            ]}
          />

          <Card
            title="Niom Parts"
            description="An e-commerce website is under construction. More products and features are coming soon!
"
            link="hshsh"
            img={niomParts}
            avatars={[
              {
                src: "https://avatars.githubusercontent.com/u/240051129?s=64&v=4",
                link: "https://github.com/WizzRizz",
              },
              {
                src: "https://avatars.githubusercontent.com/u/122863540?v=4",
                link: "https://github.com/Nomekuma",
              },
              {
                src: "https://avatars.githubusercontent.com/u/249419605?v=4",
                link: "https://github.com/Victorien-noobie?tab=overview&from=2026-08-01&to=2026-08-31",
              },
            ]}
          />
        </div>
      </section>

      <section>
        <img src={profilePic} className="p-10 h-100 w-100"></img>
      </section>
    </>
  );
}

export default Home;
