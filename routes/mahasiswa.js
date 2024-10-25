import express, {Router} from "express"
const router = express.Router();

const mahasiswa = [
    {
        nama : "Asep Balon",
        nim : "20220140060",
        alamat : "Jalan Mana kek, Kab. Mana Juga Kek, Prov. Bebas deh",
        jenisKelamin : "coba Tebak"
    },
    {
        nama : "Agus Las Abadi",
        nim : "20220140050",
        alamat : "Jalan Tebak, Kab. Tebak juga hayo, Prov. Tebak deh",
        jenisKelamin : "Apa hayo"
    }
];
    router.get("/", (req, res) => {
        res.send(mahasiswa)
    });


export default router;