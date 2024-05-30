import { Link } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import Card from "../components/Card";
import { useEffect, useState } from "react";

const Query = gql`
  query ($page: Int) {
    characters(page: $page) {
      info {
        pages
        count
      }
      results {
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
`;

function ListCharacter() {
  const [page, setPage] = useState(1);
  const { data, loading, error } = useQuery(Query, {
    variables: { page },
  });
  if (loading) return <p>Loading...</p>;
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-4 p-16 justify-center max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3">
        {data.characters.results &&
          data.characters.results.map((item, index) => {
            return <Card data={item} key={index} />;
          })}
      </div>
      <div className="flex space-x-5 items-center justify-center mb-14">
        <button
          className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        onClick={() => page > 1 ?  setPage(page - 1) : setPage(1) }
        >
          Previous
        </button>
        <p className="border border-spacing-2 border-black w-8 text-center">
          {page}
        </p>
        <button
          className="flex items-center justify-center px-3 h-8 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          onClick={() => page >= data.characters.info.pages ?  setPage(data.characters.info.pages) : setPage(page + 1) }
        
        >
          Next
        </button>
      </div>
    </div>
  );
}
export default ListCharacter;
