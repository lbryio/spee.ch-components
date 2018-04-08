import { connect } from 'react-redux';
import View from './view';

const mapStateToProps = ({site: {assetDefaults: { thumbnail }}}) => {
  return {
    defaultThumbnail: thumbnail,
  };
};

export default connect(mapStateToProps, null)(View);
