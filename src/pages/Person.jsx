import React from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';

export default function Person() {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const url = `http://sefdb02.qut.edu.au:3000/people/${id}`


      const rolesData = [
        { movie: 'example1', role: 'actor' , character: 'examplecharacter1'},
        { movie: 'example2', role:'actor' , character: 'examplecharacter2'},
        { movie: 'example3', role: 'director' , character: ''},
      ];
      const columnDefs = [
        { headerName: 'Movie', field: 'movie' },
        { headerName: 'Role', field: 'role' },
        { headerName: 'Character', field: 'character' }
      ];
    

    
      const data = [
        {rating: '1-2', movies: 0},
        {rating: '2-3', movies: 0},
        {rating: '3-4', movies: 3},
        {rating: '4-5', movies: 7},
        {rating: '5-6', movies: 16},
        {rating: '6-7', movies: 28},
        {rating: '7-8', movies: 23},
        {rating: '8-9', movies: 31},
        {rating: '9-10', movies: 19}
      ];
      
    return(
        <div className="searchApp">
          <div className="mainContainer">
            <div className = 'plotclass'>

            
            <h1>Patrick Stewart</h1>
            <p><strong>1940 - </strong></p>
            


            <p><strong>Roles:</strong></p>
            <div className="ag-theme-alpine" style={{ height: '200px', width: '50%' }}>
              <AgGridReact 
              columnDefs={columnDefs}
              rowData={rolesData}></AgGridReact>
            </div>
            
            

            <p><strong>Patrick Stewart IMDB ratings graph</strong></p>
            <BarChart width={600} height={600} data={data}>
              <Bar dataKey="movies" fill='#7A1500'  />
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="rating" />
              <YAxis />
            </BarChart>
            </div>
          </div>
        </div>
        
    )

}

