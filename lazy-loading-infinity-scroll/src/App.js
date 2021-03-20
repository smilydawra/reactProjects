import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import { getLocations } from './API';

function App() {
  const [page, setPage] = useState(0);
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchLocations();
    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (
      Math.ceil(window.innerHeight + document.documentElement.scrollTop) !== document.documentElement.offsetHeight || loading
    )
      return;
    setLoading(true);
    console.log(loading);
  };

  const fetchLocations = () => {
    const loadLocations = async () => {
      // setLoading(true);
      const newLocations = await getLocations(page);
      setPage(page + 1);
      setLocations((prev) => [...prev, ...newLocations]);
      setLoading(false);
    }
    setTimeout(loadLocations(), 2000);
  }

  useEffect(() => {
    if (!loading) return;
    fetchMoreLocations();
  }, [loading]);

  const fetchMoreLocations = () => {
    fetchLocations();
    setLoading(false);
  };

  return (
    <div class="container my-4">
      <h1>Location List View</h1>
      <div class="d-flex flex-wrap justify-content-md-around">
        {locations && locations.map((location, i) => <Card key={i} location={location} />)}
      </div>
      <div class="my-4 p-4 border border-dark bg-dark">
        <span>{loading && <h4 class="text-light">Loading....</h4>}</span>
      </div>
    </div>
  );
}

export default App;
