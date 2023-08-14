import SearchFilter from "../../../Components/SearchFilter/SearchFilter";
import ResultsFilter from "../ResultsFilter/ResultsFilter";
import ShortingFlight from "../ShortingFlight/ShortingFlight";

const Flights = () => {
  return (
    <div className="mt-16 max-w-7xl mb-[250px] mx-auto">
      <SearchFilter />
      <div className=" grid md:grid-cols-3 gap-5 mt-32 px-5 sm:px-10">
        <div className="col-span-1">
          <ResultsFilter />
        </div>
        <div className="col-span-2">
          <ShortingFlight />
        </div>
      </div>
    </div>
  );
};

export default Flights;
