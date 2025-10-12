function customRender(ele, container) {
  const newEle = document.createElement(ele.type);
  console.log(ele);
  newEle.innerHTML = ele.childern;
  for (const prop in ele.props) {
    if (prop === "children") continue;
    console.log(prop);
    newEle.setAttribute(prop, ele.props.prop);
  }
  container.appendChild(newEle);
}

const mainContainer = document.querySelector("#root");

const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  childern: "Click me to visit google",
};
customRender(reactElement, mainContainer);
