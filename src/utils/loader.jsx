/*
  Function: loader
  Add a gray div with some transparency ontop of everything.
  Object is fixed and will cover the whole window.  
*/
export default function Loader() {
  return (
    <div className='loader'>
      <div className='loaderText'>Loading ...</div>
    </div>
  );
}
