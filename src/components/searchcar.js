import { useState } from "react";

function Searchcar({ onSubmit }) {
  const [term, setvalue] = useState("");

  function handlechange(e) {
    return setvalue(e.target.value);
  }

  const handleclick = (e) => {
    e.preventDefault();
    onSubmit(term);
  };

  return (
    <div className="nav">
      <h2>pentrest</h2>
      <form onSubmit={handleclick}>
        <div>
          <input value={term} placeholder='search imgs' onChange={handlechange} />
          <i class="ri-search-line"></i>
        </div>
      </form>
    </div>
  );
}

export default Searchcar;
