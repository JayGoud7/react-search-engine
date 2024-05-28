function imageShow({ imagess }) {
  return (
    <div className="img-div">
      <img src={imagess.urls.small} alt={imagess.alt_description} />
    </div>
  );
}

export default imageShow;
