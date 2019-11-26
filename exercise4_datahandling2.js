function dataHandling2 (input) {

    //modifikasi array
    input.splice(1,2,"Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
    input.splice(4,1, "Pria", "SMA Internasional Metro")
    console.log(input);

    //split tanggal lahir
    data =input;
    ttl = data.slice(3,4);
    ttl = ttl[0].split("/");

    //switch bulan lahir
    switch (ttl[1]) {
        case('01'):
            console.log(`Januari`);
            break;
      
        case('02'):
            console.log(`Februari`);
            break;
      
        case('03'):
            console.log(`Maret`);
            break;
      
        case('04'):
            console.log(`April`);
            break;
      
        case('05'):
            console.log(`Mei`);
            break;
      
        case('06'):
            console.log(`Juni`);
            break;
        
        case('07'):
            console.log(`Juli`);
            break;
        
        case('08'):
            console.log(`Agustus`);
            break;
        
        case('09'):
            console.log(`September`);
            break;
        
        case('10'):
            console.log(`Oktober`);
            break;
        
        case('11'):
            console.log('November');
            break;
        
        case('12'):
            console.log(`Desember`);
            break;
    }

    //sort ttl
    sort = ttl.slice(0);
    sort=sort.sort(function(value1,value2){return Number(value1)<Number(value2)});
    console.log(sort);

    //join array to string
    join=ttl.join("-");
    console.log(join);

    // display nama (15char)
    nama= input[1].slice(0,15);
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
