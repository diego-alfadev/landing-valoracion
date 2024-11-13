

export type LoadingProps = {
    size?: number,
    color?: string
}

function Loading(props: LoadingProps) {

    props = { ...{ size: 12, color: 'black' }, ...props }

    return (
        <span
            className={`animate-spin inline-block size-${props.size} border-[3px] border-current border-t-transparent text-${props.color} rounded-full`}
            role="status"
            aria-label="loading" ></span>
    )
}

export default Loading
