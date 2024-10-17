import Button from "../../components/Button"
import { useNavigate } from "react-router-dom";
import card from '../../Assets/guide/Card.png'
import card1 from '../../Assets/guide/Card(1).png'
import card2 from '../../Assets/guide/Card(2).png'
import card3 from '../../Assets/guide/Card(3).png'
import card4 from '../../Assets/guide/Card(4).png'

const GuidePage = () => {
    const navigate = useNavigate();

    return (
        <main className="px-[10px]">
            <header className="px-4">
                <h4 className="font-athletic font-semibold tracking-tight text-2xl 
                   text-center">
                    Introduction to
                    <span className="text-green-600"> HTML</span> / <span className="text-blue-700">CSS </span>:
                </h4>
            </header>


            <section className='w-full max-w-[800px] mx-auto h-full flex flex-col justify-between items-center'>
                <div className="content w-full">
                    <p className="p-3 block font-medium">
                        <span className="font-bold text-green-600">HTML </span>
                        (<span className="font-bold text-green-600">H</span>yper
                        <span className="font-bold text-green-600">T</span>ext
                        <span className="font-bold text-green-600">M</span>arkup
                        <span className="font-bold text-green-600">L</span>anguage)
                        is the basic code used to build the structure of a webpage. It creates
                        things like text, images, and buttons.
                    </p>
                    <p className="p-3 block font-medium">In <span className="font-bold text-green-600">HTML</span>, different parts of a website are different elements. To define an element we use {'“<”'} followed by <br /> the element name then {'“>”'}, this opens up the element, and to close it we use {'“</”'} then the element name and then {'“>”'}.</p>
                    <p className="p-3 block font-medium">One of these elements is the {'<'}<span className="font-bold text-green-600">div</span>{'>'} element. It is simply a container that holds something.</p>
                    <img src={card} className="w-full max-w-[500px] " />
                    
                    
                    <p className="p-3 block font-medium">HTML elements by themselves aren’t very good looking, so we need to give them some styles, and that is by using <span className="font-bold text-blue-600">CSS</span></p>
                    <p className="p-3 block font-medium">
                        <span className="font-bold text-blue-600">CSS</span>
                        (<span className="font-bold text-blue-600">C</span>ascading
                        <span className="font-bold text-blue-600">S</span>tyle
                        <span className="font-bold text-blue-600">S</span>heets)
                        is the code that styles the webpage. It changes how things look, like the colors, fonts, and layout.
                    </p>
                    <p className="p-3 block font-medium">
                        In order for us to style a specific <span className="font-bold text-green-600">HTML</span>
                        element, this element needs to have a className name, which is a name that differentiates it from other elements so we can target that specific one in <span className="font-bold text-blue-600">CSS</span>
                    </p>
                    <img src={card1} className="w-full max-w-[500px]" />
                    <p className="p-3 block font-medium">Now to target that element in CSS, we simply use the following syntax:</p>
                    <img src={card2} className=" w-full max-w-[500px] " />
                    <p className="p-3 block font-medium">To change the color of an element, we use the following syntax</p>
                    <img src={card3} className='w-full max-w-[500px] ' />
                    <p className="p-3 block font-medium">Sometimes, we end up having so many elements on the page that are not well aligned. One way to align those elements is to use <br />what’s called: flexbox and that is with the following syntax:</p>
                    <img src={card4} className='w-full max-w-[500px] ' />
                    <p className="p-3 block font-medium">
                        <b>align-items</b> aligns the items according to the main axis (horizontal or vertical),<br />
                        and some possible values are: <b>flex-start</b> (start of the element), <b>flex-end</b> (end of the element), <b>center</b> (center of the element).
                    </p>
                    <p className="p-3 block font-medium"><b>justify-content</b> aligns the items according to the other axis (horizontal or vertical), and its possible values are the same as align-items.</p>
                    <p className="p-3 block font-medium mb-[40px]"><b>Gap</b> controls the space between the items, and it is a numeric value.</p>
                </div>

                {/* <!-- Button centered at the bottom --> */}
                <Button content={'Go back'} className={"bg-yellow-400 mb-[50px]"}
                onClick={()=>navigate(-1)}></Button>
            </section>

        </main>
    )
}

export default GuidePage