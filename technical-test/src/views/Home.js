import { Link } from "react-router-dom";

function ListCharacter() {
  const data = [
    {
      img: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/09/Rick--Morty-Cast-and-Character-Guide-feature.jpg",
      name: "See List Character",
      to : "/character"
    },
    {
      img: "https://static1.srcdn.com/wordpress/wp-content/uploads/2021/02/Unitys-Planet-Rick-and-Morty.jpg",
      name: "Locations",
      to : "/locations"
    },
  ];
  return (
    <div className="flex flex-1  justify-center items-center h-screen w-screen bg-[url('https://wallpapers.com/images/featured/rick-and-morty-pc-4k-ks9x4010rl0fycrb.jpg')] bg-cover">
      <div className="flex flex-row space-x-6">
        {data &&
          data.map((item, index) => {
            return (
              <Link to={item.to} key={index}>
                <div className="relative flex w-80 mb-5 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-2xl">
                  <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                    <img
                      src={item.img}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-2 flex items-center justify-center">
                      <p className="text-center font-sans text-base font-medium text-blue-gray-900">
                        {item.name}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}
export default ListCharacter;
