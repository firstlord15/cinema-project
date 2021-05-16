import React, { useState } from 'react';
import './App.css'
import { Route } from 'react-router';
import { connect } from 'react-redux'
import Navbar from '../components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Detail from '../components/Detail';
import Card from '../components/Card';
import About from '../components/About'
import Contacts from '../components/Contancts';
import Footer from '../components/Footer'

const App = ({ state }) => {

  const [info] = useState(state)

  const [value, setValue] = useState('')

  const FilterInfo = info.filter(info => {
    return info.title.toLowerCase().includes(value.toLowerCase())
  })

  return (
    <div className="back">
      <header>
        <Navbar info={info} />
      </header>
      <div className="container p-relative">
        <main>
          <Route path="/" exact>
            <div className="slider">
              <div className="opacity">
                <div className="slider-text">
                  <h1 className="text">Cinema</h1>
                </div>
              </div>
            </div>
            <div className="container con-card" style={{
              border: "1px solid #ff6a50"
            }}>
              <div className="col-3 mx-auto my-3">
                <div class="d4">
                  <form>
                    <input type="text" onChange={(event) => setValue(event.target.value)} aria-label="Search" placeholder="Shearch" />
                  </form>
                </div>
              </div>
              <div className="row">
                {FilterInfo.map((item) => (
                  <div className="col-md-3 animate-link mb-2 mt-2">
                    <Card item={item} />
                  </div>
                ))}
              </div>
            </div>
          </Route>
          <Route path="/items/:id">
            <Detail state={state} />
          </Route>
          <Route path="/about">
            <div>
              <About />
            </div>
          </Route>
          <Route path="/contacts">
            <div>
              <Contacts />
            </div>
          </Route>
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};


const msp = (state) => {
  return { state }
}

export default connect(msp)(App);