$(document).ready(() => {
  $("#vn_flag").click(() => {
    if (window.location.href.split("/").pop() === "") {
      window.location.href = window.location.href + "vn";
    } else {
      if (window.location.href.indexOf("/vn") === -1) {
        window.location.href = window.location.href.replace(
          window.location.href.split("/").pop(),
          "vn/" + window.location.href.split("/").pop()
        );
      }
    }
  });

  $("#us_flag").click(() => {
    if (window.location.href.indexOf("/vn") !== -1) {
      window.location.href = window.location.href.replace("/vn", "");
    }
  });
});
