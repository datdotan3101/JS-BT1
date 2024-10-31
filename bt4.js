let tinhTong = document.getElementById("btnTinhTong");
tinhTong.onclick = function (){
    let chieuDai = document.getElementById("chieuDaiInput").value *1;
    let chieuRong = document.getElementById("chieuRongInput").value *1;

    // Chu vi 
    let chuVi = 0;
    chuVi = (chieuDai + chieuRong) *2;
    let dienTich = 0;
    dienTich = chieuDai * chieuRong;

    let result1 = chuVi;
    console.log(result1);
    let resultChuVi = document.getElementById("pChuVi");
    resultChuVi.innerText = result1

    // Dien tich 
    let result2 = dienTich;
    console.log(result2);
    let resultDienTich = document.getElementById("pDienTich");
    resultDienTich.innerText = result2
}

/**
 * - input: nhập chiều dài và chiều rộng;
 * - progress: 
 *      + chu vi: (chiều dài + chiều rộng) *2
 *      + diện tích: chiều dài * chiều rộng
 * - output: in kết quả của chu vi và diện tích
 * 
 */