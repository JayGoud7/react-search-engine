import ImageShow from "./imageShow";

function ImageList({ images }) {
  const renderedImages = images.map((image, index) => {
    return <ImageShow key={index} imagess={image} />;
  });
  console.log(renderedImages);

  return (
    <>
      <div className="aaa">{renderedImages}</div>
    </>
  );
}

export default ImageList;
