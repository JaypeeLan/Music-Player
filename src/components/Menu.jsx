import React, { useEffect } from "react";

const Menu = ({ title, menuObject }) => {
  useEffect(() => {
    const allListTags = document
      .querySelector(".menuContainer ul")
      .querySelectorAll("li");

    // to remove active class from all the list tags when they are clicked
    function changeMenuActive() {
      allListTags.forEach((elem) => elem.classList.remove("active"));

      // add active class to only the element currently clicked
      // so the active class is removed from the previously clicked tag
      this.classList.add("active");
    }

    allListTags.forEach((elem) =>
      elem.addEventListener("click", changeMenuActive)
    );
  }, []);

  return (
    <div className="menuContainer">
      <p className="title">{title}</p>

      <ul>
        {menuObject &&
          menuObject.map((menu) => (
            <li key={menu.id}>
              <a href="#">
                <i>{menu.icon}</i>
                <span>{menu.name}</span>
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Menu;
