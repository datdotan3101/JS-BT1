let tinhHaiTong = document.getElementById("tongHaiSo");
tinhHaiTong.onclick = function (){
    let so = document.getElementById("haiKySoInput").value *1;
    so = parseInt(so);
    let donVi = so % 10;
    let hangChuc = Math.floor(so /10);
    let ketQuaTong = donVi + hangChuc;
    
    let ketQua = ketQuaTong;
    console.log(ketQua);

    let pKetQua = document.getElementById("pKetQua");
    pKetQua.innerText = ketQua;
}