import React from 'react';
import { Link } from 'react-router-dom';
// components
import SEO from '../../components/SEO';
// containers
import AssetDisplay from '../AssetDisplay';

class ShowLite extends React.Component {
  render () {
    const { asset } = this.props;
    if (asset) {
      const { name, claimId } = asset.claimData;
      return (
        <div className='row row--tall flex-container--column flex-container--center-center show-lite-container'>
          <SEO pageTitle={name} asset={asset} />
          <AssetDisplay />
          <div className={'fine-print'}>hosted on <Link id='asset-boilerpate' className='link--primary' to={`/${claimId}/${name}`}>Spee.ch</Link> via <Link id='asset-boilerpate' className='link--primary' to={`/${claimId}/${name}`}>LBRY</Link>
          </div>
        </div>
      );
    }
    return (
      <div className='row row--tall row--padded flex-container--column flex-container--center-center'>
        <p>loading asset data...</p>
      </div>
    );
  }
};

export default ShowLite;
