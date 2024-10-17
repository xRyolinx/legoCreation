import Lego from "../../components/Lego"
import Button from "../../components/Button"
import legoBleu from "../../Assets/img/legobleu.svg"
import legojaune from "../../Assets/img/legojaune.svg"
import { useContext } from "react"
import { GlobalContext } from "../../App"
import { useNavigate } from "react-router-dom"

const CongratsPage = () => {
  const navigate = useNavigate()
  const { colors } = useContext(GlobalContext)

  const downloadPNG = () => {
    // Serialize the SVG element to a string
    const svgElement = document.querySelector('#character')
    console.log(svgElement)
    const svgData = new XMLSerializer().serializeToString(svgElement);

    // Create a canvas element
    const canvas = document.createElement('canvas');
    canvas.width = svgElement.getBoundingClientRect().width;
    canvas.height = svgElement.getBoundingClientRect().height;
    const ctx = canvas.getContext('2d');

    // Create an image to hold the SVG data
    const img = new Image();
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);

    // Once the image is loaded, draw it on the canvas
    img.onload = function () {
      ctx.drawImage(img, 0, 0);
      URL.revokeObjectURL(url); // Free up memory

      // Convert the canvas content to PNG and create download link
      const pngData = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.href = pngData;
      downloadLink.download = 'Lego.png'; // Set the file name
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink); // Clean up
    };

    // Set the image source to the URL of the blob
    img.src = url;
  };

  return (
    <main className="px-[20px]">
        {/* header */}
        <header className="relative text-[35px] lg:text-[40px] text-center font-bold
        h-[480px] flex justify-center items-center py-[50px] my-[30px]
        max-w-[1000px] mx-auto lg:h-auto">
            <img className="absolute top-0 left-0 z-[-1]" src={legojaune} alt="Lego Jaune" />
            <img className="absolute bottom-0 right-0 z-[-1]" src={legoBleu} alt="Lego Bleu" />
            <div>
                <h3>Congratulations!</h3>
                <h3>Your <span className="text-green-700">character </span>
                    is
                    <span className="text-yellow-500"> ready</span>!
                </h3>
            </div>
        </header>

        {/* character */}
        <div className="flex justify-center items-center">
        <Lego
          skin={colors['skin']}
          hair={colors['hair']}
          shirt={colors['shirt']}
          pants={colors['pants']}
          eyes={colors['eyes']} />
        </div>

        {/* buttons */}
      <div className="lg:flex justify-center items-center mt-[100px]">
        <Button onClick={() => downloadPNG()} content="Share" className="bg-yellow-300 mx-auto lg:mx-[20px] mb-[20px] lg:mb-[50px]" />
        <Button onClick={() => navigate('/')} content="Home" className="bg-red-400 mx-auto lg:mx-[20px] my-[0]" />
      </div>
    </main>
  )
}

export default CongratsPage