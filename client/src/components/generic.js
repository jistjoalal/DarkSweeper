const HiddenToggle = props => {
  if (props.show) {
      return props.children;
  }return null;
};

// number range helper
const range = n => [...Array(n).keys()];

export { HiddenToggle, range };