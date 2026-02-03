require("./src/components/prism-coldark-dark.css");
require("./src/styles/dark-mode.css");

const React = require("react");
const { ThemeProvider } = require("./src/context/theme-context");

exports.wrapRootElement = ({ element }) => {
    return React.createElement(ThemeProvider, null, element);
};
