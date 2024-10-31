let quyDoi = document.getElementById("quyDoi");
quyDoi.onclick = function() {
    const vnd = 23500;
    let usd = document.getElementById("usd").value *1;
    let doiTien = 0;
    doiTien = vnd * usd;
    let formatDoiTien = doiTien.toLocaleString("vi-VN")
    let quyDoiTien = formatDoiTien + "    đồng";
    console.log(quyDoiTien);

    let tienQuyDoi = document.getElementById("doiTien");
    tienQuyDoi.innerText = quyDoiTien;
}

/**
 * - Input: nhập số tiền usd
 * - Progress: số tiền vnd là 23500 * số tiền usd
 * - Ouput: in kết quả qua màn hình
 */