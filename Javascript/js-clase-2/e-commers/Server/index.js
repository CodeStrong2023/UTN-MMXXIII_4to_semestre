import express from "express";
import cors from "cors";

// SDK de Mercado Pago
import { MercadoPagoConfig, Preference } from 'mercadopago';
// Agrega credenciales
const client = new MercadoPagoConfig({ accessToken: 'APP_USR-5295391635691082-091118-0901f289138fe97e534144965b8f5a7d-1988322990' });

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Soy el server :)");
});

app.post("/create_preference", async (req, res) => {
    try {
        const body = {
            items: [
                {
                    title: req.body.title,
                    quantity: Number(req.body.quantity),
                    unit_price: Number(req.body.price),
                    currency_id: "ARS",
                },
            ],
            back_urls: {
                success: "http://127.0.0.1:5500/Javascript/js-clase-2/e-commers/Client/media/index.html",
                failure: "http://127.0.0.1:5500/Javascript/js-clase-2/e-commers/Client/media/index.html",
                pending: "http://127.0.0.1:5500/Javascript/js-clase-2/e-commers/Client/media/index.html",
            },
            auto_return: "approved",
        };

        const preference = new Preference(client);
        const result = await preference.create({body});
        res.json({
            id: result.id,
        });
    } catch (error) {
        res.status(500).json({
            error: "Error al crear preferencia",
        });
    }
});

app.listen(port, () => {
    console.log(`El servidor esta corriendo en el puerto ${port}`);
});
    