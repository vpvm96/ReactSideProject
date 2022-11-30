import { handleAuth, logout } from "./pages/auth.js";
import { changeProfile, onFileChange } from "./pages/mypage.js";
import { socialLogin } from "./pages/auth.js";
import { handleLocation } from "./router.js";
import { authService } from "./firebase.js";
import {
  save_comment,
  update_comment,
  onEditing,
  delete_comment,
  updateCancelbutton,
} from "./pages/mainpage.js";

// url 바뀌면 handleLocation 실행하여 화면 변경
window.addEventListener("hashchange", handleLocation);
window.addEventListener("hashchange", function () {
  authService.onAuthStateChanged((user) => {
    const hash = window.location.hash;
    if (user) {
      if (hash === "" || hash === "join") {
        window.location.replace("#mainpage");
      }
    } else {
      if (hash !== "") {
        window.location.replace("#join");
      }
    }
  });
});

// 첫 랜딩 또는 새로고침 시 handleLocation 실행하여 화면 변경
document.addEventListener("DOMContentLoaded", function () {
  // Firebase 연결상태를 감시
  authService.onAuthStateChanged((user) => {
    // Firebase 연결되면 화면 표시
    handleLocation();
    const hash = window.location.hash;
    if (user) {
      // 로그인 상태이므로 항상 팬명록 화면으로 이동
      if (hash === "" || hash === "#" || hash === "#join") {
        // 로그인 상태에서는 로그인 화면으로 되돌아갈 수 없게 설정
        window.location.replace("#mainpage");
      }
    } else {
      // 로그아웃 상태이므로 로그인 화면으로 강제 이동
      if (hash !== "") {
        window.location.replace("");
      }
    }
  });
});

// onclick, onchange, onsubmit 이벤트 핸들러 리스트
window.handleAuth = handleAuth;
window.socialLogin = socialLogin;
window.logout = logout;
window.onFileChange = onFileChange;
window.changeProfile = changeProfile;
window.save_comment = save_comment;
window.update_comment = update_comment;
window.onEditing = onEditing;
window.delete_comment = delete_comment;
window.updateCancelbutton = updateCancelbutton;
