
import CustomProgressBar from "./CustomProgressBar";

function Stats({ stats }) {
  return (
    <div className="flex flex-col ml-2   mt-10 h-full w-full overflow-hidden">
      <div className=" w-20 text-[#00302E] ">Stats</div>
      <div className=" divTableCell w-100">
        <div className="flex flex-col">
          {stats.map((statData) => (
            <div
              className={`flex flex-grow capitalize mb-2 mr-4  text-white rounded px-1`}
              key={statData.stat.name}
            >
              <div className=" pt-1 bg-[#5bb0ca] w-full pr-4 pl-4">
                <div className="flex mb-2 ">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white ">
                      {statData.stat.name}
                    </span>
                  </div>
                  <div className="text-right ">
                    <span className="text-xs font-semibold inline-block text-white">
                      {statData.base_stat}%
                    </span>
                  </div>
                </div>
                <div className=" relative flex flex-shrink overflow-hidden  h-2 mb-4 text-xs  rounded">
                  <CustomProgressBar value={statData.base_stat} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stats;
