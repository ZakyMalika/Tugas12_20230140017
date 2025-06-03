function kirimData() {
    var nama = document.getElementById("nama").value
    var NIM = document.getElementById("nim").value
    var peminatan = document.querySelector("input[name=peminatan]:checked").value
    var alamat = document.getElementById("alamat").value
     var jurusan = document.getElementById("jurusan").value
    var tanggalLahir = document.getElementById("tanggalLahir").value

    alert(
        "nama : " + nama +
        "\nnim : " + NIM +
        "\npeminatan : " + peminatan+
        "\nalamat : " + alamat +
        "\njurusan : " + jurusan +
        "\ntanggal lahir : " + tanggalLahir
    )
}