import { motion, type Variants } from 'framer-motion'
import React from 'react';

type ContentSectionProps = {
    title: string,
    orientation?: 'ltr' | 'rtl'
    content: {
        subtitle?: string
        images?: string[] | { src: string, alt: string }[]
        words?: string[]
    }
}
// Función para generar puntos de la curva de Lissajous en forma de infinito
function generateInfinityPathPoints(steps: number, amplitudeX: number, amplitudeY: number) {
    const points = [];
    for (let i = 0; i < steps + 1; i++) {
        const t = (i / steps) * 2 * Math.PI;
        const x = amplitudeX * Math.sin(2 * t); // Frecuencia doble en x para forma de infinito
        const y = amplitudeY * Math.sin(t);
        points.push({ x, y });
    }
    return points;
}

function ContentSection(props: ContentSectionProps) {


    const infinityPoints = generateInfinityPathPoints(50, 5, 5);
    const floatingPoints = infinityPoints.map(point => `translateX(${point.x}px) translateY(${point.y}px)`);
    // console.log(floatingPoints)





    return (
        <section className="section">


            <div className={"flex flex-col gap-8 w-full " + (props.orientation === 'rtl' ? 'md:flex-row-reverse' : 'md:flex-row')}>
                <div className={"flex-1 content-center " + (props.orientation === 'rtl' ? 'md:text-left' : 'md:text-right')}>
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">{props.title}</h1>
                    {props.content.subtitle?.startsWith('<') ? <div dangerouslySetInnerHTML={{ __html: props.content.subtitle }} /> : <h2 className="text-lg text-gray-800">{props.content.subtitle}</h2>}
                </div>
                <div className="flex-1">

                    <div className="grid grid-rows-2 grid-cols-2">
                        {/* {props.content.images?.map((image, i) => {

                            const src = typeof image === 'string' ? image : image.src
                            const alt = typeof image === 'string' ? undefined : image.alt
                            const self = i % 2 === 0 ? 'self-start' : 'self-end'
                            const justify = i < 2 ? 'justify-end' : 'justify-start'

                            const randomStartIndex = Math.floor(Math.random() * infinityPoints.length)

                            const floatingPointsAtRandomStart = []

                            for (let j = 0; j < infinityPoints.length; j++) {
                                floatingPointsAtRandomStart.push(floatingPoints[(randomStartIndex + j) % floatingPoints.length])
                            }

                            return (


                                <div className={`flex ${justify} items-center`}>
                                    <motion.img animate={{
                                        transform: floatingPointsAtRandomStart,
                                        transition: {
                                            repeat: Infinity,
                                            repeatType: 'loop',
                                            ease: 'linear',
                                            duration: 5,
                                            delay: i * 0.1
                                        }
                                    }} drag dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }} draggable={false} className={`rounded-xl shadow-md shadow-gray-500 w-auto h-auto object-cover ${self} ${justify}`}
                                        src={src} alt={alt} />

                                </div>



                            )

                        })} */}
                        {props.content.words?.map((word, i) => {

                            const self = i >= 2 ? 'self-start' : 'self-end'
                            const justify = i % 2 === 0 ? 'justify-end' : 'justify-start'
                            const bg = i % 3 === 0 ? 'bg-primary' : 'bg-primary-dark'
                            const randomStartIndex = Math.floor(Math.random() * infinityPoints.length)
                            const floatingPointsAtRandomStart = []

                            for (let j = 0; j < infinityPoints.length; j++) {
                                floatingPointsAtRandomStart.push(floatingPoints[(randomStartIndex + j) % floatingPoints.length])
                            }

                            return (
                                <div className={`flex ${justify} items-center p-1`}>
                                    <motion.div animate={{
                                        transform: floatingPointsAtRandomStart,
                                        transition: {
                                            repeat: Infinity,
                                            repeatType: 'loop',
                                            ease: 'linear',
                                            duration: 5,
                                            delay: i * 0.1
                                        }
                                    }} className={`rounded-full shadow-md shadow-gray-500 w-auto h-auto object-cover ${self} ${justify} ${bg}`}>
                                        <p className="text-base md:text-2xl font-bold text-white p-4">{word}</p>
                                    </motion.div>

                                </div>



                            )

                        })}




                    </div>

                </div>
            </div>

        </section>
    )
}

export default ContentSection
