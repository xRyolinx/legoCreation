import logoEtic from "../Assets/img/LogoEtic.png"
import logoLego from "../Assets/img/LogoLego.png"
import { useNavigate } from "react-router-dom"

const NavExtreme = ({src, alt, className}) => {
    const navigate = useNavigate()
    return (
        <div onClick={()=>navigate('/')} className="w-[20%] py-1 bg-gren-200
        flex items-center lg:justify-center ">
            <img className={`${className} w-full max-w-[100px] aspect-square
            lg:max-w-[120px] cursor-pointer`}
            src={src} alt={alt}/>
        </div>
    )
}

const Navbar = () => {
  return (
    <nav className="bg-re-100 flex justify-between items-center w-full
    px-[10px] lg:px-[40px] min-h-[80px] lg:min-h-[130px]">
        <NavExtreme src={logoEtic} alt="Logo Etic" />

        <h1 className="m-0 px-2 py-[5px] text-lg font-athletic font-bold tracking-tight text-center
        lg:text-4xl">
            <span className="text-red-500">LEGO</span> LAB : 
            <span className="text-yellow-300"> C</span>ODE YOUR 
            <span className="text-green-600"> C</span>HARA<span className="text-blue-700">C</span>TER&nbsp;
            <span className="text-white">!</span>
        </h1>

        <NavExtreme src={logoLego} alt="Logo Lego" className="ml-auto lg:ml-0" />
    </nav>
  )
}

export default Navbar