function Basics({ id, weight, height, types, abilities, species }) {
  const pokeTypes = [];
  types?.map((t) => pokeTypes.push(t.type.name));

  return (
    <div className="flex flex-col items-center py-5 px-4 h-full w-full overflow-hidden">
      <div className="flex justify-center items-center w-full mt-8 flex-col lg:flex-row h-full">
        <div className="w-3/4 lg:w-4/12 h-full flex justify-center lg:block">
          <div className="divTable text-gray-700 gl">
            <div className="divTableBody">
              <div className="divTableRow flex mb-5">
                <div className="divTableCell w-20 text-[#00302E] text-right mr-6">
                  ID
                </div>
                <div className=" text-white bg-[#5bb0ca] divTableCell">
                  #{id}
                </div>
              </div>
              <div className="divTableRow flex mb-5">
                <div className="divTableCell w-20 text-[#00302E] text-right mr-6">
                  Species
                </div>
                <div className="  bg-[#5bb0ca] text-white divTableCell">
                  {species}{" "}
                </div>
              </div>
              <div className="divTableRow flex mb-5">
                <div className="divTableCell w-20 text-[#00302E] text-right mr-6">
                  Height
                </div>
                <div className=" bg-[#5bb0ca] text-white divTableCell">
                  {height / 10} m
                </div>
              </div>
              <div className="divTableRow flex mb-5">
                <div className="divTableCell w-20 text-[#00302E] text-right mr-6">
                  Weight
                </div>
                <div className="  text-white bg-[#5bb0ca]  divTableCell">
                  {weight / 10} kgs
                </div>
              </div>
              <div className="divTableRow flex mb-4">
                <div className="divTableCell w-20 text-[#00302E] text-right mr-6">
                  Type
                </div>
                <div className=" divTableCell w-2/3">
                  <div className="flex flex-wrap">
                    {pokeTypes.map((type) => (
                      <div
                        className={`flex items-center  bg-[#5bb0ca] capitalize mb-2 mr-2 ${type} justify-center text-white rounded px-1`}
                        key={type}
                      >
                        <span className="icon mr-2 h-5 stroke-2">
                          <img
                            src={`/assets/icons/${type}.svg`}
                            className="h-4"
                            alt="type"
                          />
                        </span>
                        <span className="">{type}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="divTableRow flex mb-4">
                <div className="divTableCell w-20 text-[#00302E] text-right mr-6">
                  Ability
                </div>
                <div className=" w-2/3  divTableCell flex justify-start flex-wrap">
                  {abilities?.map((x) => (
                    <span
                      className=" bg-[#5bb0ca] text-white rounded p-1  mb-2 mr-2"
                      key={x.ability?.name}
                    >
                      {x.ability?.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-4/12 h-full fade-in mt-8 lg:mt-0 px-4 lg:px-0">
          <img
            width={300}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon//${id}.png`}
            alt="mainImage"
          />
        </div>
      </div>
    </div>
  );
}

export default Basics;
