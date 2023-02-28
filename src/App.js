import './App.css';
import Heading from './components/Heading';
import MetalMeta from './components/MetalMeta';
import Band from './components/Band';
import data from './metal.json';

function App() {
  const bands = data.map(({ 
    band_name, 
    origin,
    formed,  
    split,
    style,
    fans
  }, i) => {
    return (
      <Band 
        id={i} 
        key={band_name} 
        band_name={band_name} 
        formed={formed} 
        origin={origin} 
        fans={fans} 
        split={split} 
        style={style} 
      />
    );
  });
  return (
    <div className='all-page-container'>
      <Heading />
      <MetalMeta />
      <div className='all-bands-container'>
        {bands}
      </div>
    </div>
  );
}

export default App;
