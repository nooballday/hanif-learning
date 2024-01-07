fetch("http://localhost:3002/data-diri").then(res => {
    res.json().then(data => {
        //dapet text
        //tampilkan text
    
        const namaDiv = document.querySelector("#nama"); //<-- tag <span id="nama">
        namaDiv.textContent = "Nama : " + data.nama;

        const umurDiv = document.querySelector("#umur");
        umurDiv.textContent = "Umur : " + data.umur;

        const dobDiv = document.querySelector("#dob");
        dobDiv.textContent = "DOB : " + data.dob;

    });
}).catch(error => {
    console.error(error);
})

