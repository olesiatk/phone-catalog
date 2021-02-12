import React, { useEffect, useState } from 'react';
import { PhoneCatalog } from './components/PhoneCatalog'
import { Card } from './components/Card'
import './App.css';

function App() {
  const [products, setProducts ] = useState([]);
  const [phoneId, setPhoneId] = useState('');
  const [onCatalog, setOnCatalog] = useState(true);
  const [onCard, setOnCard] = useState(false);
  const [phone, setPhone] = useState({});

  const getCatalog = () => fetch('/api/phones.json')
    .then(responce => responce.json())
      .then(result => {
        setProducts(result);
      })


  const getPhone = (phoneId) => fetch(`/api/phones/${phoneId}.json`)
  .then(responce => responce.json())
    .then(result => {
      setPhone(result);
    })

  const showCard = (phoneId) => {
    setOnCatalog(false);
    setOnCard(true);
    setPhoneId(phoneId);
  }

  const backToCatalog = () => {
    setOnCatalog(true);
    setOnCard(false)
  }

  console.log(phone);

  useEffect(()=>{
    getCatalog();
  }, [])

  useEffect(()=>{
    getPhone(phoneId);
  }, [phoneId])

  return (
    <div className="container-fluid">
    <div className="row">
      <div className="col-md-2">
        <section>
          <p>
            Search:
            <input type="text" />
          </p>

          <p>
            Sort by:
            <select>
              <option value="name">Alphabetical</option>
              <option value="age">Newest</option>
            </select>
          </p>
        </section>

        <section>
          <p>Shopping Cart</p>
          <ul>
            <li>Phone 1</li>
            <li>Phone 2</li>
            <li>Phone 3</li>
          </ul>
        </section>
      </div>

      <div className="col-md-10">
        {onCatalog && (
          <PhoneCatalog 
            products={products}
            showCard={showCard}
          />
        )}
        {onCard && phone.name && (
          <Card 
            phone={phone}
            backToCatalog={backToCatalog}
          />
        )}
      </div>
    </div>
  </div>
  );
}

export default App;
