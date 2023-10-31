const container = document.querySelector(".container");
const align_items_inputs = document.getElementsByName("align_items");
const justify_content_inputs = document.getElementsByName("justify_items");
const align_items_classes = ["align_start", "align_center", "align_end"];
const justify_content_classes = [
  "justify_center",
  "justify_space_between",
  "justify_space_around",
  "justify_space_evenly",
];

align_items_inputs.forEach((input) => {
  input.addEventListener("click", () => {
    const value = input.value;
    align_items_classes.forEach((class_item) => {
      container.classList.remove(class_item);
    });
    container.classList.add(`${value}`);
  });
});

justify_content_inputs.forEach((input) => {
  input.addEventListener("click", () => {
    const value = input.value;
    justify_content_classes.forEach((class_item) => {
      container.classList.remove(class_item);
    });
    container.classList.add(`${value}`);
  });
});
