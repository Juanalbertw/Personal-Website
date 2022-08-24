// Show more & show less content
$(document).on("click", (event) => {
  const $this = $(event.target);
  const $content = $this.parent().prev("div.content");
  const linkText = $this.text().trim().toUpperCase();

  try {
    if ($content[0].classList.contains("content")) {
      // Switch show more and show less
      if (linkText === "SHOW MORE") {
        $content.toggleClass("hide-content");
        $content.toggleClass("show-content");
        $this.text("Show less");
      } else {
        $content.toggleClass("show-content");
        $content.toggleClass("hide-content");
        $this.text("Show more");
      }
    }
  } catch (err) {}
});
