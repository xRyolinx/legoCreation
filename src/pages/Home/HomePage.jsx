import lego from "../../Assets/img/preview1.svg"
import Button from "../../components/Button"
import Header from "../../components/Header"
import { useNavigate } from "react-router-dom"

const HomePage = () => {
    const navigate = useNavigate()
    return (
        <main className="px-[20px]">
            {/* Header */}
            <Header/>            

            {/* lego complet */}
            <div className="py-[50px] lg:py-[60px] w-full
            flex justify-center items-center">
                <img src={lego} className="w-full max-w-[500px] lg:max-w-[1000px]" alt="" />
            </div>

            {/* button */}
            <Button className="bg-yellow-400 mb-[50px]" content={'Start Now !'}
                onClick={() => navigate('/step1')} />
        </main>
    )
}

export default HomePage