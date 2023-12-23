import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
function App() {

  //PrelineUI reinitialization helper
  const location = useLocation();

  useEffect(() => {
    import('preline/preline');
  }, []);

  useEffect(() => {
    // @ts-ignore
    HSStaticMethods.autoInit();
  }, [location.pathname]);


  return (
    <>
    <Routes>
      <Route>
      </Route>
    </Routes>
    </>
  )
}

export default App
