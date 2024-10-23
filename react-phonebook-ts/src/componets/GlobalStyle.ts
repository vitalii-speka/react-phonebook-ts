import { createGlobalStyle } from "styled-components";
import "modern-normalize";

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  background-color:#5f6369;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
#root {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
a {
  text-decoration: none;
}

ul,
li {
  list-style: none;
  padding: 0;
  margin: 0;
}
img {
  display: block;
}
h1,
h2,
h3,
h4,
h5,
h6,
p
 {
  padding: 0;
  margin: 0;
}

`;
