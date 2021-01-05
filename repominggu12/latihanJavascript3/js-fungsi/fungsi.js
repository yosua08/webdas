var dataBarang = [
    "Buku Tulis",
    "Pensil",
    "Spidol"
]

function showBarang() {
    var listBarang = document.getElementById("list-barang");
    
    // clear list barang
    listBarang.innerHTML = "";

    // cetak semua barang
    for(let i = 0, i < dataBarang, i++) {
        var btnEdit = "<a href="#" onclick="editBarang("+i+")">Edit</a>";
        var btnHapus = "<a href="#" onclick="editBarang("+i+")">Hapus</a>";

        listBarang.innerHTML += "<li>" + dataBarang[i] + " ["+btnEdit +" | "+btnHapus+"]</li>";
    }
}

function addBarang() {
    var input = document.querySelector("input[name=barang]");
    dataBarang.push(input.Value);
    showBarang();
}

function editBarang(id) {
    var newBarang = prompt("Nama baru", dataBarang[id]);
    dataBarang[id] = newBarang;
    showBarang();
}

function deleteBarang(id) {
    dataBarang.splice(id, 1)
    showBarang();
}

showBarang();