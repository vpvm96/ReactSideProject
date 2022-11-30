import { dbService, authService, storageService } from "../firebase.js";
import {
  ref,
  uploadString,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-storage.js";
import { updateProfile } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import {
  collection,
  orderBy,
  query,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

export const changeProfile = async (event) => {
  event.preventDefault();
  document.getElementById("profileBtn").disabled = true;
  const imgRef = ref(
    storageService,
    `${authService.currentUser.uid}/${uuidv4()}`
  );

  const newNickname = document.getElementById("profileNickname").value;
  // 프로필 이미지 dataUrl을 Storage에 업로드 후 다운로드 링크를 받아서 photoURL에 저장.
  const imgDataUrl = localStorage.getItem("imgDataUrl");
  let downloadUrl;
  if (imgDataUrl) {
    const response = await uploadString(imgRef, imgDataUrl, "data_url");
    downloadUrl = await getDownloadURL(response.ref);
  }
  await updateProfile(authService.currentUser, {
    displayName: newNickname ? newNickname : null,
    photoURL: downloadUrl ? downloadUrl : null,
  })
    .then(() => {
      alert("프로필 수정 완료");
      window.location.hash = "#mainpage";
    })
    .catch((error) => {
      alert("프로필 수정 실패");
      console.log("error:", error);
    });
};

export const onFileChange = (event) => {
  const theFile = event.target.files[0]; // file 객체
  const reader = new FileReader();
  reader.readAsDataURL(theFile); // file 객체를 브라우저가 읽을 수 있는 data URL로 읽음.
  reader.onloadend = (finishedEvent) => {
    // 파일리더가 파일객체를 data URL로 변환 작업을 끝났을 때
    const imgDataUrl = finishedEvent.currentTarget.result;
    localStorage.setItem("imgDataUrl", imgDataUrl);
    document.getElementById("profileView").src = imgDataUrl;
  };
};

export const myPageGetCommentList = async () => {
  let cmtObjList = [];
  const q = query(
    collection(dbService, "comments"),
    orderBy("createdAt", "desc")
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    const commentObj = {
      id: doc.id,
      ...doc.data(),
    };
    cmtObjList.push(commentObj);
  });
  const commnetList = document.getElementById("all_post_list");
  const currentUid = authService.currentUser.uid;
  commnetList.innerHTML = "";
  cmtObjList.forEach((cmtObj) => {
    const isOwner = currentUid === cmtObj.creatorId;
    if (isOwner === true) {
      const temp_html = ` 
                        <div class="all_post_list">
                          <div class="profile">
                            <div class="profile_img">
                              <img src="${
                                cmtObj.profileImg ?? "/assets/blankProfile.webp"
                              }"  alt="profile_img"/>
                            </div>

                            <div class="line_1">
                              <p>
                                <span class="profile_name">${
                                  cmtObj.nickname ?? "닉네임 없음"
                                }</span>님이 글을
                                공유하셨습니다.
                              </p>

                              <p class="time">${new Date(cmtObj.createdAt)
                                .toString()
                                .slice(0, 25)}</p>
                            </div>

                            <p class="follow">팔로우</p>
                          </div>

                          <div class="see_posting">
                            <div class="text_wrap">
                              <p>${cmtObj.text}</p>
                            </div>
                            <div class="${isOwner ? "buttons" : "noDisplay"}">
                              <button onclick="onEditing(event)" class="editBtn btn btn-dark">
                                수정
                              </button>
                              <button
                                name="${cmtObj.id}"
                                onclick="delete_comment(event)"
                                class="deleteBtn btn btn-dark"
                              >
                                삭제
                              </button>
                            </div>
                          </div>
                      </div>
    `;

      const div = document.createElement("div");
      div.classList.add("mycards");
      div.innerHTML = temp_html;
      commnetList.appendChild(div);
    }
  });
};
