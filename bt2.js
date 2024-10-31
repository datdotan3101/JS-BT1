let btnTongAve = document.getElementById("btnTongAve");
btnTongAve.onclick = function (){
    let numb1 = document.getElementById("numb1").value *1;
    let numb2 = document.getElementById("numb2").value *1;
    let numb3 = document.getElementById("numb3").value *1;
    let numb4 = document.getElementById("numb4").value *1;
    let numb5 = document.getElementById("numb5").value *1;
    let trungBinh = 0;
    trungBinh = (numb1 + numb2 + numb3 + numb4 + numb5) /5;

    let average = trungBinh;
    console.log(average);

    let tongTrungBinh = document.getElementById("tongTrungBinh")
    tongTrungBinh.innerText = average;
    
}