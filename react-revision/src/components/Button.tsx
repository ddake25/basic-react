

interface ButtonProps {
    color: string;
    buttonType: "button" | "submit" | "reset";
    handleClick: (color: string) => void;
}

const Button = ({ color, buttonType, handleClick}: ButtonProps) => {
  return (
    <button 
        type={buttonType} 
        className={`btn btn-${color}`}
        onClick={() => handleClick(color)}
    >
        {color.charAt(0).toUpperCase() + color.slice(1).toLowerCase()}
    </button>
  )
}

export default Button