import './CTAButton.css';

interface CTAButtonProps {
  text: string;
  onClick?: () => void;
}

const CTAButton = ({ text, onClick }: CTAButtonProps) => {
  return (
    <button className="cta-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default CTAButton;
