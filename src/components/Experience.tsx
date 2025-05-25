import Hyperlink from "./Hyperlink";
import arista from "../assets/arista.jpeg";
import hp from "../assets/hp.png";
import sfu from "../assets/sfu.jpeg";
import comptia from "../assets/comptia-aplus.png";
import ExperienceCard from "./ExperienceCard";

function Experience() {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      <section className="flex flex-col gap-10 w-150 p-10 rounded-2xl sm:shadow-gray-400 sm:shadow-lg">
        <ExperienceCard
          icon={arista}
          iconLink="https://www.arista.com"
          date="January 2025 - Present"
          title="Software Engineer"
          type="work"
          organization="Arista Networks"
        >
          Maintainer of{" "}
          <Hyperlink text="EOS" link="https://www.arista.com/en/products/eos" />{" "}
          and active contributor to{" "}
          <Hyperlink text="SONiC" link="https://sonicfoundation.dev/" />
        </ExperienceCard>
        <ExperienceCard
          icon={arista}
          iconLink="https://www.arista.com"
          date="September 2023 - December 2023"
          title="Software Engineer Intern"
          type="work"
          organization="Arista Networks"
        >
          Designed and implemented a new feature related to{" "}
          <Hyperlink
            text="PTP"
            link="https://www.arista.com/assets/data/pdf/Whitepapers/Technical_Solution_Guide___Precision_Time_Protocol.pdf"
          />{" "}
          on Arista cloud networking switches
        </ExperienceCard>
        <ExperienceCard
          icon={hp}
          iconLink="https://www.hp.com"
          date="May 2023 - August 2023"
          title="Software Developer Co-op"
          type="work"
          organization="HP"
        >
          Developed and tested software for{"  "}
          <Hyperlink
            text="Poly"
            link="https://www.hp.com/ca-en/poly/phones.html"
          />{" "}
          conference phones. Contributed to jenkins CI pipeline.
        </ExperienceCard>
      </section>
      <section className="flex flex-col gap-10 w-150 p-10 rounded-2xl sm:shadow-gray-400 sm:shadow-lg">
        <ExperienceCard
          icon={sfu}
          iconLink="https://www.sfu.ca"
          date="September 2019 - December 2024"
          title="Bachelor of Applied Science - Computer Engineering"
          type="education"
          organization="Simon Fraser University"
        ></ExperienceCard>
        <ExperienceCard
          icon={comptia}
          iconLink="https://www.comptia.org/certifications/a"
          date="August 2019"
          title="CompTIA A+ Certification"
          type="education"
          organization="CompTIA"
        ></ExperienceCard>
      </section>
    </div>
  );
}

export default Experience;
