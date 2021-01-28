const mhs = [
    {
        nama: `Fadli`,
        email: `stupidlearner0407@gmail.com`
    },
    {
        nama: `Fadli`,
        email: `stupidlearner0407@gmail.com`
    },
    {
        nama: `Fadli`,
        email: `stupidlearner0407@gmail.com`,
        kekuatan: 100
    },
];

const el = `<div>
                <ul>
                    ${mhs.map(a => `<li >${a.nama}</li>
                    <li>${a.email}${a.kekuatan ? `<br>kekuatan: ${a.kekuatan}` : ''}</li>`)}
                </ul>
            </div>`;

document.body.innerHTML = el;