 
    // script.js
    document.addEventListener("DOMContentLoaded", () => {
      const listItems = document.querySelectorAll("#tour li");

      listItems.forEach((item, index) => {
        setTimeout(() => {
          item.style.opacity = "1";
          item.style.transform = "translateY(0)";
        }, index * 500); // Delay each item by 500ms
      });
    });
    
ocument.addEventListener("DOMContentLoaded", () => {
      const listItems = document.querySelectorAll("#tour-list");

      listItems.forEach((item, index) => {
        setTimeout(() => {
          item.style.opacity = "1";
          item.style.transform = "translateY(0)";
        }, index * 500); // Delay each item by 500ms
      });
    });


    const list = document.querySelector('.tour-list');
const items = list.children;

// Clone the list items to create a seamless loop
for (let i = 0; i < items.length; i++) {
  const clone = items[i].cloneNode(true);
  list.appendChild(clone);
}

  

