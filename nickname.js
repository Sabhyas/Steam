window.addEventListener("DOMContentLoaded", () => {
  const nicknameForm = document.getElementById("nickform-r3");
  const nicknameInput = document.getElementById("nickinput-g7");
  const avatarInput = document.getElementById("avatarinput-h4");

  nicknameForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nickname = nicknameInput.value.trim();
    const avatar = avatarInput.files[0];

    if (!nickname) {
      alert("Please enter a nickname.");
      return;
    }

    if (!avatar) {
      alert("Please upload an avatar image.");
      return;
    }

    const reader = new FileReader();
    reader.onload = function () {
      const avatarURL = reader.result;

      localStorage.setItem("nickname", nickname);
      localStorage.setItem("avatarURL", avatarURL);

      window.location.href = "index.html";
    };

    reader.readAsDataURL(avatar);
  });
});
