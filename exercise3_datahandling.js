function DataHandling (input){            
    hasil='';
    for (i=0;i<input.length;i++) {
        for(j=0;j<=input[i].length;j++) {
            if(j==0) {
                id=`Nomor ID: ${input[i][j]}`;
            }
            else if (j==1) {
                nama=`Nama Lengkap: ${input[i][j]}`;
            }
            else if (j==2) {
                ttl=`TTL: ${input[i][j]} ${input[i][j+1]}`;
            }
            else if (j==3) {
                hobi=`Hobi: ${input[i][j+1]}`;
            } 
        }
        hasil+= `${id}\n ${nama}\n ${ttl}\n ${hobi}\n\n`;
    }
    return hasil;
}
    

//contoh input
var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

console.log(DataHandling(input));