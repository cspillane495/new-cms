const TableImg = (props) => {
  const noData = "No image data";

  switch (props.type) {
    case "audio/mpeg":
      return noData;
    case "video/mp4":
      return noData;
    default:
      return (
        <div className="table-item-image">
          Show image
          {/* <img src={props.src} /> */}
        </div>
      );
  }
};

export default TableImg;
