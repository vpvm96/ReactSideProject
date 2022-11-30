import { authService } from "./firebase.js";

const routes = {
  404: "/pages/404.html",
  "/": "/pages/login.html",
  join: "/pages/join.html",
  mainpage: "/pages/mainpage.html",
  mypage: "/pages/mypage.html",
};
import { getCommentList, creatSwiper } from "./pages/mainpage.js";
import { myPageGetCommentList } from "./pages/mypage.js";

export const handleLocation = async () => {
  let path = window.location.hash.replace("#", "");
  const pathName = window.location.pathname;

  // Live Server를 index.html에서 오픈할 경우
  if (pathName === "/index.html") {
    window.history.pushState({}, "", "/");
  }
  if (path.length == 0) {
    path = "/";
  }

  const route = routes[path] || routes[404];
  const html = await fetch(route).then((data) => data.text());
  document.getElementById("root").innerHTML = html;

  // 특정 화면 렌더링 되자마자 DOM 조작 처리
  if (path === "mainpage") {
    getCommentList();
    creatSwiper();
  }

  if (path === "mypage") {
    // 프로필 관리 화면 일 때 현재 프로필 사진과 닉네임 할당
    document.getElementById("profileView").src =
      authService.currentUser.photoURL ?? "/assets/blankProfile.webp";
    document.getElementById("profileNickname").placeholder =
      authService.currentUser.displayName ?? "닉네임 없음";
    myPageGetCommentList();
  }
};
