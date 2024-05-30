import { Link } from "react-router-dom";

export default function Card({ data }) {
  return (
    <>
      <div className="relative flex w-80 mb-5 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-2xl">
        <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <Link to={`/character/${data.id}`}>
            <img src={data.image} className="h-full w-full object-cover" />
          </Link>
        </div>
        <div className="p-6">
          <div className="mb-2 flex items-center justify-between">
            <p className="block font-sans text-center text-base font-extrabold leading-relaxed text-blue-gray-900 antialiased">
              {data.name}
            </p>
            <div className="flex flex-row space-x-3">
              <p className="block font-sans text-base font-extrabold leading-relaxed text-blue-gray-900 antialiased">
                {data.gender}
              </p>
              <p className="block font-sans text-base font-extrabold leading-relaxed text-blue-gray-900 antialiased">
                {data.species}
              </p>
            </div>
          </div>
          <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
            Current Location :
          </p>
          <p className="block font-sans text-center text-base font-extrabold leading-relaxed text-blue-gray-900 antialiased">
            {data.location.name}
          </p>
          <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
            Origin Location :
          </p>
          <p className="block font-sans text-center text-base font-extrabold leading-relaxed text-blue-gray-900 antialiased">
            {data.origin.name}
          </p>
          <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
            Current Status :
          </p>
          <p className="block font-sans text-center text-base font-extrabold leading-relaxed text-blue-gray-900 antialiased">
            {data.status}
          </p>
        </div>
      </div>
    </>
  );
}
