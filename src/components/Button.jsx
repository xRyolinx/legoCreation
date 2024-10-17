
const Button = ({content, className, ...rest}) => {
  return (
    <button {...rest} className={`
    w-[180px] py-[10px] mx-auto block
    lg:w-[200px] lg:py-[12px]
    border-solid border-black border-[3px] rounded-lg
    text-lg tracking-[0.5px] font-semibold
    lg:text-2xl
    ${className}
    `}>
        {content}
    </button>
  )
}

export default Button