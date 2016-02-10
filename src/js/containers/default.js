/**
 * Provides default props at App-level
 * - To be digested in App container
 */

const defaultProps = {
  name: 'Jimmy Gong',
  selectionItems: [
    // { 
    //   itemName: 'About',
    //   onClick: () => {
    //     console.log('About');
    //   }
    // },
    {
      itemName: 'Blog',
      onClick: () => {
        // Refine when blog becomes subdomain
        window.location.href = 'http://jimandtonic.azurewebsites.net';
      }
    },
    // {
    //   itemName: 'Connect',
    //   onClick: () => {
    //     console.log('Connect');
    //   }
    // },
    // {
    //   itemName: 'Demos',
    //   onClick: () => {
    //     console.log('Demos');
    //   }
    // }
  ]
};

export default defaultProps;
