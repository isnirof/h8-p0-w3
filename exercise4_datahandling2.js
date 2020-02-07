function dataHandling2(input) {

    //modifikasi array
    input.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
    input.splice(4, 1, "Pria", "SMA Internasional Metro")
    console.log(input);

    //split tanggal lahir
    let ttl=input[3].split('/')
    let bulan = ttl[1]

    // switch bulan lahir
    switch (bulan) {
        case ('01'):
            console.log(`Januari`);
            break;

        case ('02'):
            console.log(`Februari`);
            break;

        case ('03'):
            console.log(`Maret`);
            break;

        case ('04'):
            console.log(`April`);
            break;

        case ('05'):
            console.log(`Mei`);
            break;

        case ('06'):
            console.log(`Juni`);
            break;

        case ('07'):
            console.log(`Juli`);
            break;

        case ('08'):
            console.log(`Agustus`);
            break;

        case ('09'):
            console.log(`September`);
            break;

        case ('10'):
            console.log(`Oktober`);
            break;

        case ('11'):
            console.log('November');
            break;

        case ('12'):
            console.log(`Desember`);
            break;
    }

    //sort ttl
    let sorted = ttl.slice(0).sort((value1, value2)=> Number(value1) < Number(value2));
    console.log(sorted);

    //join array to string
    let join = ttl.join("-");
    console.log(join);

    // display nama (15char)
    let nama = input[1].slice(0, 15);
    console.log(nama);
}

var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */
