const HiddenToggle = props => {
    if (props.show) {
        return props.children;
    }return null;
};

export default HiddenToggle;