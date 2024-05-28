import axios from "axios";

async function searchimages(term) {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID rnEfVUq-Cwen8jVHQkbGcminywZga28R-vaU-X_X9AM",
    },
    params: {
      query: term,
    },
  });
 

  return response.data.results;
}

export default searchimages;
