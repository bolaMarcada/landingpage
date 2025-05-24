import styles from './CTAButton.module.css';

interface CTAButtonProps {
  text: string;
  onClick?: () => void;
}

const CTAButton = ({ text, onClick }: CTAButtonProps) => {
  return (
    <button className={styles.ctaButton} onClick={onClick}>
      {text}
    </button>
  );
};

export default CTAButton;
