document.getElementById("myForm").addEventListener("submit", function(e) {
  e.preventDefault(); // cegah reload halaman

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let alertBox = document.getElementById("alertBox");

  // cek semua input sudah terisi
  if (name !== "" && email !== "" && message !== "") {
    alertBox.innerHTML = `
      <div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Berhasil!</strong> Semua data sudah terisi dengan benar.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    `;
  } else {
    alertBox.innerHTML = ""; // tidak ada alert jika belum lengkap
  }
});
