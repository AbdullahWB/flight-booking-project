import FareSummary from "../FareSummary/FareSummary";
import TravelerDetailsForm from "../TravelerDetailsForm/TravelerDetailsForm";

const Review = () => {
  return (
    <div className="m-16 max-w-7xl mx-auto px-5 sm:px-10 pb-20">
      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <div>Tracking Navigation </div>
          <div className="mt-8">
            <TravelerDetailsForm />
          </div>
        </div>
        <div className="md:col-span-1 mt-14">
          <FareSummary />
        </div>
      </div>
    </div>
  );
};

export default Review;
