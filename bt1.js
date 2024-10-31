let tongLuong = document.getElementById("tongLuong");
tongLuong.onclick = function (){
    const luongNgay = 100000;
    let soNgay = document.getElementById("soNgay").value *1;
    let tong = 0;
    tong = luongNgay * soNgay;
    let formattedTong = tong.toLocaleString('vi-VN');
    let result = formattedTong + " đồng";
    console.log(result);
    let pInform = document.getElementById("pInform");
    pInform.innerText = result;
}

