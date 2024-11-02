function kiemTraHoTen() {
    //Ô này là bắt buộc nhập, Họ tên phải bắt đầu bằng chữ cái viết hoa, có thể viết dấu và không được chứa ký tự đặt biệt

    var hoten = document.forms["forml"]["txtHoTen"].value;
    var pattern = /^([A-ZÀ-Ỹ][a-zà-ỹ]*)( [A-ZÀ-Ỹ][a-zà-ỹ]*)*$/;


    if (hoten == "") {
        document.getElementById("error-message-hoTen").innerHTML = "Không được rỗng";
        return flase;
    }
    if (!pattern.test(hoten)) {
        document.getElementById("error-message-hoTen").innerHTML = "Họ và tên bắt đầu bằng chữ viết hoa và không chứa ký tự đặt biệt";
        return false;
    } else {
        document.getElementById("error-message-hoTen").innerHTML = "";
        return true;
    }
}

function kiemTraDienThoai() {
    //Ô này bắt buộc nhập, số điện thoại phải bắt đầu bằng 2 số thuộc các đôi sau (03,04,05,06,07,09) và số điện thoại chỉ được 10 số
    var dienthoai = document.forms["forml"]["txtDienThoai"].value;
    var pattern = /^(09|03|07|06|05|04)\d{8}$/;
    if (dienthoai == "") {
        document.getElementById("error-message-sdt").innerHTML = "Không được rỗng";
        return flase;
    }
    if (!pattern.test(dienthoai)) {
        document.getElementById("error-message-sdt").innerHTML = "Số điện thoại phải 10 số và bắt đầu các đôi sau (03,04,05,06,07,09)";
        return false;
    } else {
        document.getElementById("error-message-sdt").innerHTML = "";
        return true;
    }
}

function kiemTraTenDN() {
    //Ô này bắt buộc nhập, tên đăng nhập phải từ 6 ký tự trở lên và không được chứa ký tự đặt biệt
    var tendn = document.forms["forml"]["txtTenDangNhap"].value;
    var pattern = /[a-zA-Z0-9]{6}/;
    if (tendn == "") {
        document.getElementById("error-message-tdn").innerHTML = "Không được rỗng";
        return flase;
    }
    if (!pattern.test(tendn)) {
        document.getElementById("error-message-tdn").innerHTML = "Tên đăng nhập phải từ 6 kí tự trở lên và không được chứa kí tự đặc biệt";
        return false;
    } else {
        document.getElementById("error-message-tdn").innerHTML = "";
        return true;
    }
}

function kiemTraPassWord() {
    //Ô Này bắt buộc nhập, mật khẩu phải chứa ít nhất 1 ký tự chữ và 1 ký tự số, mật khẩu phải từ 6 ký tự trở lên
    var mk = document.forms["forml"]["txtMatKhau"].value;
    var pattern = /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (mk == "") {
        document.getElementById("error-message-mk").innerHTML = "Không được rỗng";
        return flase;
    }
    if (!pattern.test(mk)) {
        document.getElementById("error-message-mk").innerHTML = "Mật khẩu chứa ít nhất 1 ký tự chữ và 1 ký tự số, mật khẩu phải từ 6 ký tự trở lên";
        return false;
    } else {
        document.getElementById("error-message-mk").innerHTML = "";
        return true;
    }
}

function kiemTraXacNhanPassWord() {
    var xnmk = document.forms["forml"]["txtXacNhanMK"].value;
    var mk = document.forms["forml"]["txtMatKhau"].value;
    if (xnmk !== mk) {
        document.getElementById("error-message-xnmk").innerHTML = "Mật khẩu xác nhận không khớp";
        return false;
    } else {
        document.getElementById("error-message-xnmk").innerHTML = "";
        return true;
    }
}


function kiemTraEmail() {
    var email = document.forms["forml"]["txtEmail"].value;
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email == "") {
        document.getElementById("error-message-email").innerHTML = "Không được rỗng";
        return flase;
    }
    if (!pattern.test(email)) {
        document.getElementById("error-message-email").innerHTML = "Địa chỉ email không hợp lệ";
        return false;
    } else {
        document.getElementById("error-message-email").innerHTML = "";
        return true;
    }
}

function kiemTraFormDK() {
    kiemTraHoTen(); kiemTraDienThoai(); kiemTraTenDN(); kiemTraPassWord(); kiemTraXacNhanPassWord(); kiemTraEmail();
    if (kiemTraHoTen() && kiemTraDienThoai() && kiemTraTenDN() && kiemTraPassWord() && kiemTraXacNhanPassWord() && kiemTraEmail()) {
        return true;
    }
    return false;
}

function luuThongTinDangKy() {
    if (kiemTraFormDK()) {
        var hoTen = document.getElementById("txtHoTen").value;
        var dienThoai = document.getElementById("txtDienThoai").value;
        var tenDangNhap = document.getElementById("txtTenDangNhap").value;
        var matKhau = document.getElementById("txtMatKhau").value;
        var email = document.getElementById("txtEmail").value;

        var khachhangList = JSON.parse(localStorage.getItem("khachhangList")) || [];
        var khachhang = {
            hoTen: hoTen,
            dienThoai: dienThoai,
            tenDangNhap: tenDangNhap,
            matKhau: matKhau,
            email: email
        };
        khachhangList.push(khachhang);
        localStorage.setItem("khachhangList", JSON.stringify(khachhangList));

        window.location.href = "../html/dangNhap.html";
    }
}

