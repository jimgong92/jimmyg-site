/**
 * Provides default props at App-level
 * - To be digested in App container
 */

const defaultProps = {
  name: 'Jimmy Gong',
  selectionItems: [
    { 
      itemName: 'About',
      handleSelect: () => {}
    },
    {
      itemName: 'Blog',
      handleSelect: () => {
        // Refine when blog becomes subdomain
        window.location.href = 'http://jimandtonic.azurewebsites.net';
      }
    },
    // {
    //   itemName: 'Connect',
    //   handleSelect: () => {
    //     console.log('Connect');
    //   }
    // },
    // {
    //   itemName: 'Demos',
    //   handleSelect: () => {
    //     console.log('Demos');
    //   }
    // }
  ]
};

export default defaultProps;
