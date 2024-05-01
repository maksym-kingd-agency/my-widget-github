// import React from "react";

console.log("my-widget-github 1 !!!");

(() => {
  console.log("my-widget-github 2 !!!");

  //   const InputWidget = ({ placeholder }) => (
  //     <input type="text" placeholder={placeholder} />
  //   );

  //   render(<InputWidget placeholder="Test" />);

  //   return "111";

  const element = document.getElementById("root");
  console.log("element", element);
  element.innerHTML = "Goodbye world!";
})();

// export default InputWidget;
