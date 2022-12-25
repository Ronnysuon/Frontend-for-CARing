import React from 'react'
import DashSymbols from './DashSymbols';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
<link 
rel="stylesheet" 
href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" 
integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" 
crossorigin="anonymous">   
</link>

export default function Dash() {
  return (
    <div class="ms-1 my-1 w-100">
    <span class="badge bg-primary rounded-pill">Select a Warning Light:</span>

    <DashSymbols/>
    </div>
  )
}
