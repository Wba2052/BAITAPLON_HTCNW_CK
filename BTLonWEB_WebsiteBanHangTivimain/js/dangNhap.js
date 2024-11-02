document.addEventListener("DOMContentLoaded", function() {
    var khachhangListJSON = localStorage.getItem("khachhangList");
    if (khachhangListJSON) {
        var khachhangList = JSON.parse(khachhangListJSON);
        var khachhang = khachhangList[khachhangList.length-1];
        document.getElementById("login-tendangnhap").value = khachhang.tenDangNhap;
        document.getElementById("login-matkhau").value = khachhang.matKhau;   
    }
});

function kiemTraLoginTDN() {
    var login_tendangnhap = document.getElementById("login-tendangnhap").value;
    var khachhangListJSON = localStorage.getItem("khachhangList");
    if (khachhangListJSON) {
        var khachhangList = JSON.parse(khachhangListJSON);
        for (var i = 0; i < khachhangList.length; i++) {
            var khachhang = khachhangList[i];
            if (khachhang.tenDangNhap && login_tendangnhap === khachhang.tenDangNhap) {
                return true;
            }
        }
    }
    document.getElementById("error-message-tdn").innerHTML = "Tên đăng nhập không tồn tại";
    return false;
}

function kiemTraLoginMK() {
    var login_matkhau = document.getElementById("login-matkhau").value;
    var khachhangListJSON = localStorage.getItem("khachhangList");
    if (khachhangListJSON) {
        var khachhangList = JSON.parse(khachhangListJSON);
        for (var i = 0; i < khachhangList.length; i++) {
            var khachhang = khachhangList[i];
            if (khachhang.matKhau && login_matkhau === khachhang.matKhau) {
                return true;
            }
        }
    }
    document.getElementById("error-message-mk").innerHTML = "Mật khẩu không chính xác";
    return false;
}

function kiemTraFormDN(){
    if(kiemTraLoginTDN() && kiemTraLoginMK()){
        window.location.href = "../html/index.html";
        return true;
    }
    return false;
}
