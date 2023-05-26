import "../App.css";
import personalDetails from "../data/personalDetails.json";

const HomePage = () => {
  return (
    <section>
      <div className="mb-12 font-mono">
        <div className="text-2xl"> Hey! I am</div>
        <div className="text-4xl font-bold mt-4">{personalDetails.Name}</div>
        <div className="text-2xl mt-4">
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
        <div>
          <div className="text-2xl font-bold">About Me</div>
          <div className="grid grid-cols-2">
            <div>
              <div className="font-bold text-left mt-3">Name:</div>
              <div className="font-bold text-left mt-3">Date of Birth:</div>
              <div className="font-bold text-left mt-3">Location:</div>
              <div className="font-bold text-left mt-3">Email:</div>
              <div className="font-bold text-left mt-3">Phone:</div>
            </div>
            <div>
              <div className="text-left mt-3">placeholder</div>
              <div className="text-left mt-3">placeholder</div>
              <div className="text-left mt-3">placeholder</div>
              <div className="text-left mt-3">placeholder</div>
              <div className="text-left mt-3">placeholder</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
