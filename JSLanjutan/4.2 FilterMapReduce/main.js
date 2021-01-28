let angka = [-6,-1,7,-4,11,1,3,2,6,5];

// for (let i = 0; i < angka.length; i++) {
//     if (angka[i]>=3) {
//         arrayBaru.push(angka[i]);
//     }
    
// }
// filter == filter
//const newAngka = angka.filter((a) => a>=5 );

// map
// for (let i = 0; i < angka.length; i++) {
//     if(angka[i]<0){
//        angka[i]*=-2;
//     }
//     else{
//         angka[i]*=2;
//     }
    
// }



// const newAngka = angka.map(a => a*2);












//////////TEST




























//Latihan Random
for (let i = 0; i <= angka.length; i++) {
    for (let j = angka.length; j > i ; j--) {
        if(angka[j+1]<angka[j]){
            [angka[j+1],angka[j]] = [angka[j],angka[j+1]];
        }
    }
    
}

