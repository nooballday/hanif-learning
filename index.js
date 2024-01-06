fetch("http://localhost:3002/data-diri").then(res => {
    res.json().then(data => {
        //dapet text
        //tampilkan text
        const namaDiv = document.querySelector("#nama");
        const umurDiv = document.querySelector("#umur");
        const dobDiv = document.querySelector("#dob");
        namaDiv.textContent = "Nama : " + data.nama;
        umurDiv.textContent = "Umur : " + data.umur;
        dobDiv.textContent = "DOB : " + data.dob;

    });
}).catch(error => {
    console.error(error);
})

