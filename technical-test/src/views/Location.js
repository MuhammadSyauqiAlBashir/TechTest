import { Link } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import ModalResidents from "../components/ModalResidents";

const Query = gql`
  query ($page: Int) {
    locations(page: $page) {
      info {
        pages
        count
        next
        prev
      }
      results {
        id
        name
        type
        dimension
        type
        residents {
            id
        name
        status
        species
        type
        origin {
          name
        }
        location {
          name
        }
        gender
        image
        }
      }
    }
  }
`;

function Location() {
  const [page, setPage] = useState(1);
  const [modal, setModal] = useState([]);
  const { data, loading, error } = useQuery(Query, {
    variables: { page },
  });
  if (loading) return <p>Loading...</p>;
  return (
    <div className="flex flex-col">
      <div className="justify-center">
        <div className="">
          <table className="w-9/12 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  No.
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Type
                </th>
                <th scope="col" className="px-6 py-3">
                  Dimension
                </th>
                <th scope="col" className="px-6 py-3">
                  Residents
                </th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.locations.results.map((item, index) => {
                  return (
                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {item.id}
                      </th>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {item.name}
                      </th>
                      <td className="px-6 py-4">{item.type}</td>
                      <td className="px-6 py-4">{item.dimension}</td>
                      <td className="px-6 py-4">
                        <button onClick={()=> setModal(item.residents)}>
                            View Residents
                        </button>
                        </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex space-x-5 items-center justify-center mb-14">
        <button
          className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          onClick={() => (page > 1 ? setPage(page - 1) : setPage(1))}
        >
          Previous
        </button>
        <p className="border border-spacing-2 border-black w-8 text-center">
          {page}
        </p>
        <button
          className="flex items-center justify-center px-3 h-8 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          onClick={() =>
            page >= data.locations.info.pages
              ? setPage(data.locations.info.pages)
              : setPage(page + 1)
          }
        >
          Next
        </button>
      </div>
      <ModalResidents Modal={modal} toggleModal={setModal}/>
    </div>
  );
}
export default Location;
