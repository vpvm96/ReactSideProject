export function createInnerHtml(htmlStr) {
  return htmlStr;
}

export function handleClickEdit(e) {
  const temp_html =
    createInnerHtml(`<input type="text" class="form-control" id="editComment" />
                        <input type="text" class="form-control" id="editName" />
                        <button type="button" onclick="update_comment(event)" class="btn btn-outline-primary">완료</button>`);
  $("#" + e.target.parentElement.parentElement.id).append(temp_html);
}

export function save_comment() {
  const uuid = Math.floor(Math.random() * 10000000);
  const name = $("#name").val();
  const comment = $("#comment").val();
  customFetch("POST", "/comment", {
    uuid_give: uuid,
    name_give: name,
    comment_give: comment,
  });
}

export function update_comment(e) {
  const uuid = e.target.parentElement.id;
  const name = $("#editName").val();
  const comment = $("#editComment").val();
  customFetch("PATCH", "/comment", {
    uuid_give: uuid,
    name_give: name,
    comment_give: comment,
  });
}

export function delete_comment(uuid) {
  customFetch("DELETE", "/comment", {
    uuid_give: uuid,
  });
}

function customFetch(type, url, data) {
  try {
    $.ajax({
      type: type,
      url: url,
      data: data,
      success: function (response) {
        alert(response["msg"]);
        window.location.reload();
      },
    });
  } catch (e) {
    throw new Error(e);
  }
}
