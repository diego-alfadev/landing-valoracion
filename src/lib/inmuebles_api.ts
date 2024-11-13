import type { Inmueble } from "@/types/inmueble.types"

const HOST = import.meta.env.PUBLIC_NM_API_HOST
const BASE_PATH = import.meta.env.PUBLIC_NM_API_BASE

const API_URL = new URL(BASE_PATH, HOST).toString()

export class InmueblesApi {

    private static BASE_RESOURCE = 'inmuebles'

    static async getLastInsertions(limit?: number): Promise<Inmueble[]> {

        if (import.meta.env.MODE === 'development') {
            const data = await (await fetch('/assets/mocks/ultimas_inserciones.mock.json')).json()
            if (limit) return data.slice(0, limit)
            return data
        }

        const url = new URL(API_URL + this.BASE_RESOURCE + '/last_insertions')
        if (limit) url.searchParams.set('limit', limit.toString())

        console.log(url.toString())
        const response = await fetch(url, {method: 'GET', headers: { 'Api-Key': import.meta.env.PUBLIC_NM_API_KEY }})
        return await response.json()
    }

    static getPrice(inmueble: Inmueble): string {
		let precio=0;
		if(inmueble.a_consultar==1) return "A Consultar";
		switch(inmueble.gestion){
			case 1: precio=inmueble.precio_compra; break;
			case 3: precio=inmueble.precio_traspaso; break;
			case 4: precio=inmueble.precio_alquiler_opcion_compra; break;
			case 2:
			case 5: precio=inmueble.precio_alquiler; break;
		}

		let number = Intl.NumberFormat('es-ES', {style: 'currency', currency: 'EUR'}).format(precio);
		if(inmueble.gestion==2 || inmueble.gestion==5 || inmueble.gestion==4) number+='/mes';
		return number;
	}
}
