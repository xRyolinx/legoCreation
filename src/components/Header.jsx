
const Header = ({showFirst = true}) => {
    return (
        <section className="pt-[20px] w-full flex flex-col justify-center items-center
         font-athletic font-normal text-lg lg:text-xl text-center">
            {showFirst ? 
            <h4>
                Your objective is to customize your character using HTML/CSS.
            </h4>
            : null
            }
            <h4>
                If you don’t know what HTML/CSS is<br /> <a
                    href="./introHTML-CSS.html" className="underline text-blue-600 hover:text-blue-800">
                    This is for you
                </a>

            </h4>
        </section>
    )
}

export default Header