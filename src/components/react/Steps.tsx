import { motion, type MotionStyle, type MotionTransform, type Variants } from "framer-motion"

type StepsProps = {
    steps: Array<{
        number: number,
        title: string,
        description?: string,
        step_data?: {
            isCompleted: boolean
        }
    }>
}

const containerVariants: Variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            ease: 'spring',
        }
    }
}

const itemVariants: Variants  = {
    hidden: {
        opacity: 0,
        scale: 0.5,
        transform: 'translateX(-200px) translateY(150px) rotate(30deg)',
    },
    visible: {
        opacity: 1,
        scale: 1,
        transform: 'translateX(0px) translateY(0px) rotate(0deg)',
    }
}

function Steps({ steps }: StepsProps) {
    return (
        <motion.ul className="relative flex flex-col sm:flex-row gap-8" variants={containerVariants} initial="hidden" animate="visible">
            {
                steps.map((step, i) => (
                    <motion.li
                        variants={itemVariants}
                        key={i}
                        className="md:shrink md:basis-0 flex-1 group flex gap-x-10 md:block">
                        <div className="min-w-7 min-h-7 flex flex-col items-center w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle">
                            {step.step_data?.isCompleted ? (
                                <span className="size-16 text-4xl text-white flex justify-center font-bold items-center shrink-0 bg-green-600  rounded-full">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon icon-tabler icon-tabler-check"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        stroke-width="4"
                                        stroke="currentColor"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M5 12l5 5l10 -10" />
                                    </svg>
                                </span>
                            ) : (
                                <span className=" size-16 text-4xl text-white flex justify-center font-bold items-center shrink-0 bg-primary rounded-full">
                                    {step.number}
                                </span>
                            )}
                            {/* <div className="w-full md:h-px bg-gray-00 "></div> */}
                            <div className="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden dark:bg-neutral-700 8" />
                        </div>
                        <div className="grow md:grow-0 md:mt-3 pb-5 w-full ">
                            <span className="block text-lg font-medium text-gray-800">
                                {step.title}
                            </span>
                            <p className="text-sm text-gray-500 dark:text-neutral-500">
                                {step.description}
                            </p>
                        </div>
                    </motion.li>
                ))
            }
        </motion.ul>
    )
}

export default Steps
