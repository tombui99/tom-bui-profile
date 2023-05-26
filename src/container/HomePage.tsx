import "../App.css";
import personalDetails from "../data/personalDetails.json";
import techSkills from "../data/techSkills.json";
import experiences from "../data/experiences.json";
import references from "../data/references.json";
import ProgressBar from "@ramonak/react-progress-bar";

const HomePage = () => {
  return (
    <section>
      <div className="mb-12 font-mono">
        <div className="text-4xl font-bold">{personalDetails.Name}</div>
        <div className="text-2xl mt-4">
          {personalDetails.JobTitle} in {personalDetails.Location}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <img
            className="h-96"
            src="https://github.com/SSWConsulting/SSW.CodeAuditor/assets/67776356/68a157d2-3ad3-4f55-ac40-ca6e9b67f907"
            alt="Profile"
          />
        </div>
        <div className="col-span-2">
          <div className="text-2xl font-bold text-left text-stone-700">
            About Me
          </div>
          <div className="text-left mt-3">
            Motivated software engineer with more than 2 years of experience in
            the field. Driven to learn quickly with excellent programming
            proficiency. Offering excellent collaboration and organizational
            abilities along with technical skills. Eager to apply learned
            competencies in practical, business setting.
          </div>
          <div className="grid grid-cols-3">
            <div className="col-span-1 text-left text-lg text-stone-700 font-bold">
              <div className="mt-7">Name:</div>
              <div className="mt-3">Date of Birth:</div>
              <div className="mt-3">Location:</div>
              <div className="mt-3">Email:</div>
              <div className="mt-3">Phone:</div>
              <div className="mt-3">Linkedin:</div>
            </div>
            <div className="text-lg text-left">
              <div className="mt-7">{personalDetails.Name}</div>
              <div className="mt-3">22nd August 1999</div>
              <div className="mt-3">{personalDetails.Location}</div>
              <div className="mt-3">{personalDetails.Email}</div>
              <div className="mt-3">{personalDetails.Phone}</div>
              <a
                className="mt-3 link underline"
                href={personalDetails.LinkedIn}
              >
                {personalDetails.LinkedIn}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className="text-left mt-8 col-span-3">
          <div className="text-2xl font-bold text-stone-700">Education</div>
          <div className="text-xl font-bold mt-5 ">
            2017 - 2020 | Bachelor of Information Technology
          </div>
          <div className="text-lg">
            Double Majors in Software Development & Business Information System
          </div>
          <div className="text-lg">Monash University</div>
          <div className="text-2xl font-bold mt-12 text-stone-700">
            Work Experiences
          </div>
          <div className="grid grid-cols-1 text-left">
            {experiences.map((item) => (
              <>
                <div className="text-xl font-bold mt-3">
                  {item.From} - {item.To} | {item.JobTitle}
                </div>
                <div className="text-lg mt-2">
                  {item.Company}, {item.Location}
                </div>
                <div className="whitespace-pre-wrap">{item.Description}</div>
              </>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 mt-8 text-lg text-left">
          <div className="text-2xl font-bold text-stone-700">
            Skills and Tools
          </div>
          <div className="text-xl font-bold">Frontend</div>
          {techSkills.Frontend.map((item) => (
            <>
              <div>{item.tech}</div>
              <ProgressBar
                completed={item.level}
                customLabel=" "
                baseBgColor="#ffffff"
                bgColor="#f0ebc5"
                animateOnRender
              />
            </>
          ))}
          <div className="text-xl font-bold mt-5">Backend</div>
          {techSkills.Backend.map((item) => (
            <>
              <div>{item.tech}</div>
              <ProgressBar
                completed={item.level}
                customLabel=" "
                baseBgColor="#ffffff"
                bgColor="#f0ebc5"
                animateOnRender
              />
            </>
          ))}
        </div>
      </div>
      <div className="text-2xl font-bold text-left mt-12">
        Professional References
      </div>
      {references.map((item) => (
        <>
          <div className="text-lg text-left mt-2">
            <span className="font-bold">{item.Name}</span> - {item.JobTitle}
          </div>
          <div className="text-lg text-left">
            Contact: {item.Contact}, {item.Email}
          </div>
        </>
      ))}
    </section>
  );
};

export default HomePage;
