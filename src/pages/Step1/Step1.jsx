import Header from "../../components/Header"
import { useEffect, useState } from "react"
import { isLarge } from "../../utils/isLarge"

import head from "../../Assets/lego/head.svg"
import body from "../../Assets/lego/body.svg"
import legs from "../../Assets/lego/legs.svg"
import Button from "../../components/Button"
import { useNavigate } from "react-router-dom"
import LegoPart from "./LegoPart"

const Step1 = () => {
    // when resize
    const [large, setLarge] = useState(isLarge())
    useEffect(() => {
        const handleResize = () => {
            if (isLarge() != large) {
                setLarge(isLarge())
            }
        }
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [large])
    
    // states
    const navigate = useNavigate()
    const [svgDim, setSvgDim] = useState({
        'height': '',
        'width': '',
        'marginTop': '',
    })
    const [selected, setSelected] = useState(null)
    const [rows, setRows] = useState({
        "1": {
            id: 1,
            style: document.createElement('style'),
            code:`
.head {
    justify-content: center;
}
            `,
        },
        "2": {
            id: 2,
            style: document.createElement('style'),
            code:`
.body {
    justify-content: flex-start;
}
            `,
        },
        "3": {
            id: 3,
            style: document.createElement('style'),
            code:`
.legs {
    justify-content: flex-end;
}
            `,
        },
    })

    // Lego Row Component
    const LegoRow = ({ state, src, alt, className, classNameImg = "" }) => {
        // hover
        const handleMouseEnter = (e) => {
            let row = e.target
            if (row.nodeName == 'IMG') { row = row.parentElement }
            row.style.borderColor = '#888888'
        }
        const handleMouseLeave = (e) => {
            let row = e.target
            if (row.nodeName == 'IMG') { row = row.parentElement }
            row.style.borderColor = 'transparent'
        }
        // click
        const handleClick = () => {
            setSelected(`${state['id']}`)
        }

        // component
        return (
            <div className={`${className} cursor-pointer w-full flex items-center
                border-2 border-transparent lg:px-[20px]`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
                style={{backgroundColor: selected == state['id'] ? '#BBBBBB' : 'transparent'}}>
                    <LegoPart large={large} src={src} alt={alt} classNameImg={classNameImg} />
            </div>
        )
    }

    // mount style tags
    Object.keys(rows).forEach((row)=>{
        rows[row].style.textContent = rows[row].code
        document.head.appendChild(rows[row].style);
    })


    // handleChange
    const handleChange = (e) => {
        // set values
        const val = e.target.value
        setRows((old) => {
            const newRows = {
                ...old,
            }
            newRows[selected].code = val
            newRows[selected].style.textContent = newRows[selected].code;
            return newRows
        })
    }

    // component
    return (
        <main className="px-[20px]">
            {/* Header */}
            <Header showFirst={false} />

            {/* instruction */}
            <section className="bg-ed-200 pt-[20px] pb-[40px] w-full flex flex-col justify-center items-center
            font-athletic  text-center">
                <h3 className="font-semibold text-[30px] lg:text-[50px]">
                    Step 1 : Assemble&nbsp;the&nbsp;LEGO!
                </h3>
                <h4 className="font-normal text-lg lg:text-xl">
                    Your lego is dismembered... Use your coding skills to reassemble it !
                </h4>
            </section>

            {/* game */}
            <div className="bg-gree-300 w-full max-w-[850px] mx-auto
            border-solid border-2 border-black px-[20px] py-[30px]">
                {/* row 1 */}
                <LegoRow state={rows["1"]} src={head} alt="head" className={"head"} classNameImg="mb-[-5px]" />

                {/* row 2 */}
                <LegoRow state={rows["2"]} src={body} alt="body" className={"body"} />

                {/* row 3 */}
                <LegoRow state={rows["3"]} src={legs} alt="legs" className={"legs"} classNameImg="mt-[-45px]" />
            </div>

            {/* text box */}
            <div className="w-full my-[100px] h-[200px] flex justify-center items-center">
                <textarea type='text'
                className='w-full max-w-[400px] h-full p-[30px] py-[20px]
                bg-gray-800 border border-gray-700 rounded-md
                resize-none focus:outline-none 
                focus:ring focus:ring-blue-500 placeholder-gray-500 
                font-courier lg:text-[20px]
                text-green-500'
                placeholder="Select a row (or a part of your lego) to start !"
                value={rows[selected]?.code || ''}
                onChange={handleChange}/>
            </div>

            {/* button */}
            <Button onClick={()=>navigate('/step2')} content="Next" className="bg-yellow-300"/>
        </main>
    )
}

export default Step1