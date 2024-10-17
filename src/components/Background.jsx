import bg from "../Assets/img/background.png"

const Background = () => {
  return (
    <img
    className="fixed top-0 left-0 w-full h-[100vh] object-cover
    z-[-2]"
    src={bg} alt="" />
  )
}

export default Background