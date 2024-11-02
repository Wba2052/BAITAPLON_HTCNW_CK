document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('themVaoGioHang').addEventListener('click', function() {
        var hinhAnh = document.getElementById('hinhAnhSP').src;
        var giaBan = document.getElementById('giaBan').innerText;
        var tenSp = document.getElementById('tenSP').innerText;

        var product = {
            hinhAnh: hinhAnh,
            giaBan: giaBan,
            tenSp: tenSp
        };

        var cartItems = localStorage.getItem('cartItems');
        if (!cartItems) {
            cartItems = [];
        } else {
            cartItems = JSON.parse(cartItems);
        }
        cartItems.push(product);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        alert('Sản phẩm đã được thêm vào giỏ hàng!');
    });
});