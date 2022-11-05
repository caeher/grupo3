import { Router} from "express";
import {prueba} from "../utils/datos";


const router = Router();


// Rutas Modulo 5
router.get("/", (req, res) => {
	res.render('listarRespuestas', {
		layout: "dashboard",
		data: prueba[0]
	});
});

router.get("/:id", (req, res) => {
	const {id} = req.params;
	
	res.render("verRespuesta", {
		layout:"Dashboard",
		id,
		data: prueba[0]
		
	});	
});

/*
router.get("/prueba", (req, res) =>{
	res.render("verRespuesta", {
		layout: "dashboard",
		data: prueba[0]
	})

});
*/
export default router;
