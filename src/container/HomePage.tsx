import "../App.css";
import personalDetails from "../data/personalDetails.json";

const HomePage = () => {
  return (
    <section>
      <div className="mb-5">
        <div className=""> Hey there! I am</div>
        <div className="">{personalDetails.Name}</div>
        <div className="">
          {personalDetails.JobTitle} in {personalDetails.Location}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <img
            className="h-96"
            src="https://github.com/SSWConsulting/SSW.CodeAuditor/assets/67776356/68a157d2-3ad3-4f55-ac40-ca6e9b67f907"
            alt="Profile"
          />
        </div>
        <div>About Me</div>
      </div>
    </section>
  );
};

export default HomePage;
