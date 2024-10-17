import { useRef, useEffect } from "react"


const LegoPart = ({large, src, alt, classNameImg}) => {
    // ref
    const ref = useRef(null);

    // states
    // const [height, setHeight] = useState(0)
    // const [width, setWidth] = useState(0)
    // const [marginTop, setMarginTop] = useState(0)


    // on load svg
    useEffect(() => {
        if (ref.current) {
            const img = ref.current
            console.log(img)
            const scale = large ? 1 : 0.7

            const height = img.height * scale
            const width = img.width * scale

            const oldMarginTop = (window.getComputedStyle(img).marginTop).slice(0, -2)
            const marginTop = oldMarginTop * scale

            img.style.height = `${height}px`
            img.style.width = `${width}px`
            img.style.marginTop = `${marginTop}px`
        }
    }, [ref, large])

  return (
    <img src={src} alt={alt} className={`${classNameImg} h-full`}
    style={{}}/>
  )
}

export default LegoPart