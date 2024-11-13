import { InmueblesApi } from "@/lib/inmuebles_api";
import type { Inmueble } from "@/types/inmueble.types";
import { motion } from "framer-motion";

type CardInmuebleProps = { inmueble: Inmueble, index?: number };

const CardInmueble = ({ inmueble, index }: CardInmuebleProps) => {

  return (
    <motion.article
      initial={{ opacity: 0, transform: 'translateX(-100px)' }}
      animate={{ opacity: 1, transform: 'translateX(0px)' }}
      transition={{ duration: 0.5, delay: index ? index * 0.1 : 0 }}
      className="relative flex flex-row rounded-lg border-2 border-[#1f2c47] overflow-hidden mb-2"
    >
      <div className="w-20">
        <img
          src={"https://nuevomilenio-inmo.com/" +
            inmueble.fotos_inmueble?.[0].thumbnail}
          alt={inmueble.fotos_inmueble?.[0].descripcion_corta}
          className="object-cover h-full"
        />
      </div>

      <div className="flex-5 flex-grow flex-col justify-between py-3 px-4">
        <div className="flex flex-row items-center">
          <h3 className="text-base font-semibold text-gray-200">
            {inmueble.zona_inmueble?.nombre}, {inmueble.poblacion_inmueble?.nombre}
          </h3>
        </div>
        <p className="text-sm text-gray-400">
          {InmueblesApi.getPrice(inmueble)}
        </p>
        <div className="flex flex-row justify-between justify-items-center">
          <p className="text-sm text-gray-600">{inmueble.referencia}</p>
          <a
            href={"https://nuevomilenio-inmo.com/inmueble/" + inmueble.referencia}
            target="_blank"
            className="text-sm font-semibold text-primary hover:text-primary-dark"
          >
            Ver más
          </a>
        </div>
      </div>
    </motion.article>
  )

};

export default CardInmueble;
