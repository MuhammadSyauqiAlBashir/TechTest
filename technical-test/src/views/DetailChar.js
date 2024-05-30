import { Link, useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import Card from "../components/Card";
import { useState } from "react";

const Query = gql`
  query ($id: ID!) {
    character(id: $id) {
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
      episode {
        name
        air_date
        episode
      }
    }
  }
`;

function DetailChar() {
  const [page, setPage] = useState(1);
  const { id } = useParams();
  const { data, loading, error } = useQuery(Query, {
    variables: { id },
  });
  console.log(data);
  if (loading) return <p>Loading...</p>;
  return (
    <div className="flex flex-row h-screen p-4 items-center justify-center bg-[url('https://i.redd.it/spooky-rick-morty-wallpapers-v0-u7tr4bnw6pxb1.jpg?width=1792&format=pjpg&auto=webp&s=74fca656cbfa77054c5e08281dcac346d633f2d1')]">
      <div className="bg-slate-600 flex flex-row h-5/6 p-4 items-center justify-center bg-opacity-80 rounded-lg">
        <img src={data.character.image} style={{ width: 800, height: 600 }} />
        <div className="sticky flex w-96 ml-10 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <img
            src={
              "https://i5.walmartimages.com/seo/Rick-and-Morty-Metal-Wall-Art_bcc4085e-c311-4886-a7a4-aa58127883d7.5958f8a36f96aa4c08dbc4a8a580e57c.png?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
            }
            style={{ width: 150, height: 130 }}
          />
          <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-bold leading-snug tracking-normal text-black antialiased">
              {data.character.name}
            </h5>
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              {data.character.status}
            </p>
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              {data.character.gender} {data.character.species}
            </p>
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              Origin : {data.character.origin.name}
            </p>
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              Current Location : {data.character.location.name}
            </p>
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              Episodes :
            </p>
            <div className="flex h-60 flex-col overflow-y-scroll">
              {data.character.episode.map((item, index) => {
                return (
                  <div key={index} className="border border-gray-950 mb-6">
                    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                      Name :{item.name}
                    </p>
                    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                      Air Date : {item.air_date}
                    </p>
                    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                      Episode : {item.episode}
                    </p>
                    <br />
                    <br />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DetailChar;
