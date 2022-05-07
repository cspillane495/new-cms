import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchMediaItems, uploadMediaItem } from "../../actions/media";
import { Container } from "../../components/Grid";
import Upload from "../../components/Upload";

const UploadMedia = (props) => {
  const [media, setMedia] = useState({});
  useEffect(() => {
    props.fetchMediaItems();
  }, []);

  function renderMediaItems(media) {
    return media.map((item, i) => {
      return <li key={i}>{item.name}</li>;
    });
  }

  return (
    <div>
      <h3>Media</h3>
      <Upload history={props.history} loading={props.loading} multiple />
    </div>
  );
};

function mapStateToProps({ mediaItems, loading }) {
  return { mediaItems, loading };
}

export default connect(mapStateToProps, { fetchMediaItems, uploadMediaItem })(
  UploadMedia
);
