import Header from "../../components/Header"
import Lego from "../../components/Lego"
import Button from "../../components/Button"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import "./style.css"
import { useContext } from "react"
import { GlobalContext } from "../../App"


const Step2 = () => {
  // states
  const navigate = useNavigate()
  const { colors, setColors } = useContext(GlobalContext)
  
  const [code, setCode] = useState(`
.hair {
    background-color: ${colors['hair']};
}
.skin {
    background-color: ${colors['skin']};
}
.eyes {
    background-color: ${colors['eyes']};
}
.shirt {
    background-color: ${colors['shirt']};
}
.pants {
    background-color: ${colors['pants']};
}
`)

  // mount style tags
  useEffect(() => {
    const style = document.createElement('style')
    style.id = "addedStyle"
    document.head.appendChild(style);
  }, [])

  // when update code
  useEffect(() => {
    const style = document.querySelector('#addedStyle')
    style.textContent = code;

    const newColors = {}
    const elements = ['hair', 'skin', 'eyes', 'shirt', 'pants']
    elements.forEach(e => {
      let node = document.querySelector(`.${e}`)
      let css = getComputedStyle(node)
      newColors[e] = css.backgroundColor
    });
    setColors(newColors)
  }, [code, setColors])


  // on change
  const handleChange = (e) => {
    const val = e.target.value
    setCode(val)
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
          Step 2 : Personnalize&nbsp;your&nbsp;LEGO!
        </h3>
        <h4 className="font-normal text-lg lg:text-xl">
          Congrats ! Your lego is now in place. Now, use your coding skills to make it unique !
        </h4>
      </section>


      {/* game */}
      <div className="bg-gree-300 w-full max-w-[850px] mx-auto
            border-solid border-2 border-black px-[20px] py-[30px]
            flex justify-center items-center">
        <Lego
          skin={colors['skin']}
          hair={colors['hair']}
          shirt={colors['shirt']}
          pants={colors['pants']}
          eyes={colors['eyes']} />
      </div>

      {/* text box */}
      <div className="w-full my-[60px] lg:my-[100px] h-[600px] flex justify-center items-center">
        <textarea type='text'
          className='w-full max-w-[500px] h-full px-[30px] py-[10px]
                bg-gray-800 border border-gray-700 rounded-md
                resize-none focus:outline-none 
                focus:ring focus:ring-blue-500 placeholder-gray-500 
                font-courier lg:text-[20px]
                text-green-500'
          placeholder="Select a row to start !"
          value={code}
          onChange={handleChange}
        />
      </div>

      {/* stock colors */}
      <div className="hair"></div>
      <div className="skin"></div>
      <div className="eyes"></div>
      <div className="shirt"></div>
      <div className="pants"></div>

      {/* buttons */}
      <div className="lg:flex justify-center items-center">
        <Button onClick={() => navigate('/congrats')} content="Next" className="bg-yellow-300 mx-auto lg:mx-[20px] mb-[20px] lg:mb-[50px]" />
        <Button onClick={() => navigate('/step1')} content="Prev" className="bg-red-400 mx-auto lg:mx-[20px] my-[0]" />
      </div>



    </main>
  )
}

export default Step2