$(document).ready(function () {
  show_comment();
});

function show_comment() {
  $.ajax({
    type: "GET",
    url: "/comment",
    data: {},
    success: function (response) {
      const rows = response["post"];
      rows.forEach((item) => {
        const uuid = item.uuid;
        const name = item.name;
        const comment = item.comment;

        const temp_html = `<div id="card" class="card">
                                        <div id=${uuid} class="card-body">
                                            <blockquote class="blockquote mb-0">
                                                <p>${comment}</p>
                                                <footer class="blockquote-footer">${name}</footer>
                                            </blockquote>
                                            <div class="card-button">
                                            <button type="button" onclick="handleClickEdit(event, ${uuid})" class="btn btn-outline-primary">수정</button>
                                            <button type="button" onclick="delete_comment(${uuid})" class="btn btn-outline-primary">삭제</button>
                                            </div>
                                        </div>
                                    </div>`;
        $("#commentList").append(temp_html);
      });
    },
  });
}
