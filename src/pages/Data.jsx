import React from "react";
import {useSearchParams} from "react-router-dom";
import { useState, useEffect } from 'react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

export default function Data() {
  
  const [searchParams] = useSearchParams();
  const imdbID = searchParams.get("imdbID");
  const [data, setData] = useState(null);


     
    async function fetchData() {
      const response = await fetch(`http://sefdb02.qut.edu.au:3000/movies/data/${imdbID}`);
      const jsonData = await response.json();
      setData(jsonData);
      console.log(jsonData);
      return;
    }
  
    useEffect(() => {
      fetchData();
    }, []);

    return (
      
      <div>
      {data ? (
        <div className="searchApp">
          <div className="mainContainer">
            <h2>{data.title} ({data.year})</h2>
            
            <p className="plotclass"><strong>Plot:</strong> {data.plot}</p>
            <table>
              <tr>
                
                <td><p><strong>Runtime:</strong> {data.runtime} minutes</p>
                <p><strong>Genres:</strong> {data.genres.join(', ')}</p>
                <p><strong>Country:</strong> {data.country}</p>
                <p><strong>Box Office:</strong> ${data.boxoffice.toLocaleString()}</p>
                
                <p><strong>Ratings</strong></p>
                <ul>
                    {data.ratings.map(rating => (
                    <p key={rating.source}>{rating.source}: {rating.value}</p>
                    ))}
                </ul>
                <p><strong>Principals</strong></p>
            <ul>
              {data.principals.map(item => (
                <li className="principalLink" key={item.id}>
                  <a href={`/People?${item.id}`}>{item.name}</a>
                </li>
              ))}
            </ul></td>
                <td><div className="imagePad"><img src={data.poster} alt={data.title} /></div></td>

              </tr>
            </table>
            
            

            

          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      </div>
      );


}  