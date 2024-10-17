import { useRef, useEffect } from "react"


const LegoPart = ({ large, src, alt, classNameImg }) => {
    // ref
    // const ref = useRef(null);

    // // on load svg¸
    // useEffect(() => {
    //     if (! ref.current) {
    //         return
    //     }

    //     const img = ref.current
    //     const scale = large ? 1 : 0.8
    //     let height = img.naturalHeight * scale
    //     let width = img.naturalWidth * scale

    //     const oldMarginTop = parseFloat(window.getComputedStyle(img).marginTop);
    //     const marginTop = oldMarginTop * scale

    //     img.style.height = `${height}px`
    //     img.style.width = `${width}px`
    //     img.style.marginTop = `${marginTop}px`
    // }, [ref, large])

    return (
        <img src={src} alt={alt} className={`${classNameImg} h-full`}
            style={{}} />
    )
}

export default LegoPart