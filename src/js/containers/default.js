/**
 * Provides default props at App-level
 * - To be digested in App container
 */

const defaultProps = {
  name: 'Jimmy Gong',
  selectionItems: [
    { 
      itemName: 'About',
      handleSelect: () => {},
      href: null
    },
    {
      itemName: 'Blog',
      handleSelect: () => {},
      href: 'http://jimandtonic.azurewebsites.net'
    },
    {
      itemName: 'Connect',
      handleSelect: () => {},
      href: null
    },
    // {
    //   itemName: 'Demos',
    //   handleSelect: () => {
    //     console.log('Demos');
    //   },
    //   href: null
    // }
  ]
};

export default defaultProps;
