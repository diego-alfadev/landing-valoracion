


import { InmueblesApi } from '@/lib/inmuebles_api'
import type { Inmueble } from '@/types/inmueble.types'
import React from 'react'
import CardInmueble from '@/components/react/CardInmueble'
import Loading from '@/components/react/Loading'

function UltimasInserciones(props: React.PropsWithChildren<{}>) {
    const [loading, setLoading] = React.useState(true)
    const [ultimas_inserciones, setUltimasInserciones] = React.useState<Inmueble[]>([])

    React.useEffect(() => {
        InmueblesApi.getLastInsertions(3)
            .then((data) => { setUltimasInserciones(data); setLoading(false) })
            .catch((error) => { console.error(error); setLoading(false) })
    }, [])


    return (
        loading ? <Loading color='white' /> :
            <>
                <h4 className="font-semibold text-gray-100">Últimas Inserciones</h4>
                <div className="mt-3">
                    {
                        ultimas_inserciones.length === 0 ?
                            <p className="text-gray-400">No hay inmuebles para mostrar</p> :
                            ultimas_inserciones.map((inmueble, i) => <CardInmueble key={inmueble.referencia} inmueble={inmueble} index={i}/>)
                    }
                </div>
            </>
    )
}

export default UltimasInserciones
