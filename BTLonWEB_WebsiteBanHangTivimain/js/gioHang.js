document.addEventListener("DOMContentLoaded", function() {
    var cartItems = localStorage.getItem('cartItems');
    cartItems = JSON.parse(cartItems);

    var cartItemsDiv = document.getElementById('cartItems');
    if (cartItems && cartItems.length > 0) {
        var html = '';
        var totalAmount = 0;
        for (var i = 0; i < cartItems.length; i++) {
            var item = cartItems[i];
            html += '<div class="cart-item">';
            html += '<img src="' + item.hinhAnh + '" alt="' + item.tenSp + '">';
            html += '<div>';
            html += '<p><strong>Tên sản phẩm:</strong> ' + item.tenSp + '</p>';
            html += '<p><strong>Giá:</strong> ' + item.giaBan + '</p>';
            html += '</div>';
            html += '</div>';
            totalAmount += parseFloat(item.giaBan);
        }
        cartItemsDiv.innerHTML = html;

        var tongTienSpan = document.getElementById('tongTien');
        tongTienSpan.innerText = totalAmount + ' VND'
    } else {
        cartItemsDiv.innerHTML = '<p>Giỏ hàng của bạn đang trống</p>';
    }

    document.getElementById('xoaGioHang').addEventListener('click', function() {
        localStorage.removeItem('cartItems');
        alert('Giỏ hàng đã được xóa thành công!');
        location.reload();
    });

    document.getElementById('datHang').addEventListener('click', function() {
        localStorage.removeItem('cartItems');
        alert('Đặt hàng thành công');
        location.reload();
    });
});
