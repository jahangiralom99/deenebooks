import { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";

export const ItemContext = createContext([]);


function App() {

  const { items } = useLoaderData();
  console.log(items);

  return (
    <div>
      <ItemContext.Provider value={items}>
      <Outlet/>
     </ItemContext.Provider>
    </div>
  );
}

export default App;
