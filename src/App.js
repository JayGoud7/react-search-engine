import { useState } from "react";
import Switchcar from "./components/searchcar";
import ImageList from "./components/imagesList";
import searchimages from "./Api";

function App() {
  const [image, setimage] = useState([]);

  async function handleclick(term) {
    const results = await searchimages(term);
    setimage(results);
  }

  return (
    <>
      <Switchcar onSubmit={handleclick} />
      <ImageList images={image} />
    </>
  );
}

export default App;
