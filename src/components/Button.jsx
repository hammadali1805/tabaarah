

export const Button = ({ content, background, textColor, hoverColor }) => {
  const handleClick = () => {
    const section = document.getElementById("products");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <button onClick={handleClick} className={`${background} ${textColor} font-semibold py-2 px-4 rounded-md ${hoverColor} transition hover:cursor-pointer`}>
      {content}
    </button>
  )
}