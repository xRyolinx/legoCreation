
const Button = ({content, className, ...rest}) => {
  return (
    <button {...rest} className={`${className}
    w-[180px] py-[10px] mx-auto block mb-[50px]
    lg:w-[300px] lg:py-[15px]
    border-solid border-black border-[3px] rounded-lg
    text-lg tracking-[0.5px] font-semibold
    lg:text-3xl`}>
        {content}
    </button>
  )
}

export default Button