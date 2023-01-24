import './App.css';
import {useState} from "react";

function App() {

  function deleteIP() {
    // To do: 
  }

  function okIP() {
    // To do: 
  }

  return (
    <div className="App">
      <main>
        <section>
          <div>
            <label htmlFor="cidr">CIDR:</label>
            <input type="text" id="cidr" placeholder="CIDR" />
          </div>
          <div>
            <label htmlFor="gateway">Gateway (Optional):</label>
            <input type="text" id="gateway" placeholder="Gateway" />
          </div>
        </section>
        <section>
          <div>
            <label>Allocation Pools:</label>
            <button className="btn-add">Add</button>
          </div>
          <div>
            <input type="text" placeholder="Starting IP Address" />
            <input type="text" placeholder="Ending IP Address" />
            <div className="btns">
              <svg className="btn1" onClick={deleteIP} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
              <svg className="btn2" onClick={okIP} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
