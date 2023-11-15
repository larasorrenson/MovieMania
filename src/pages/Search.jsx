import {AgGridReact} from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-alpine.css"
import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Button} from "reactstrap";
import { useNavigate } from 'react-router-dom';



function App() {

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    console.log("searchhh");
    const url = `http://sefdb02.qut.edu.au:3000/movies/search?title=${searchTerm}&year=${selectedYear}`;

    fetch(url)
    .then(response => response.json())
    .then(data1 => setRowData(data1.data))
    .catch(error => console.error(error));
  };

  const [rowData, setRowData] = useState([]);

  const columnDefs = [
    { headerName: "Title", field: "title" },
    { headerName: "Year", field: "year" },
    { headerName: "IMDB rating", field: "imdbRating"},
    { headerName: "Rotten Tomatoes Rating", field: "rottenTomatoesRating"},
    { headerName: "Media Critic Rating", field: "metacriticRating" },
    { headerName: "Classification", field: "classification" }
  ];

  const years = Array.from({ length: 34 }, (_, i) => 1990 + i);

  return (
    <div className="searchApp">
      <div className="mainContainer">
        <h2>Search the movie database</h2>
        <p className="textBox">Use the search bar and/or the drop down menu to search for movies</p>
        <input
          className="inputBox"
          type="text"
          placeholder="Search movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="dropBox"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="">Select a year</option>
          {years.map((year) => (
            <option value={year} key={year}>
              {year}
            </option>
          ))}
        </select>
        <Button onClick={handleSearch}>Search</Button>
      </div>
      <div
        className="ag-theme-alpine"
        style={{ height: "500px", width: "100%" }}
      >
        <AgGridReact
          columnDefs={columnDefs}
          rowData={rowData}
          onRowClicked={(row)=> navigate(`/Data?imdbID=${row.data.imdbID}`)}
        />
      </div>
    </div>
  );
}

export default App;