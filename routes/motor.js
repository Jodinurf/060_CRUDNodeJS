import express, {Router} from "express"
const router = express.Router();

const motor = [
    {
        Merk : "Honda ZBR",
        cc : "150cc",
        tahunProduksi : "1250SM",
        warna : "Ungu"
    },
    {
        Merk : "Suzuki EP U",
        cc : "100cc",
        tahunProduksi : "2120",
        warna : "Pink"
    }
];

router.get("/", (req, res) => {
    res.send(motor)
});

export default router;