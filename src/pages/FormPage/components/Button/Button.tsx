import { button } from './Button.css';
import { ButtonProps } from './types';

export default function Button({
  variant,
  children,
  classes,
  onClick,
}: ButtonProps) {
  const otherClasses = classes || [''];
  return (
    <button
      className={[button[variant], [...otherClasses]].join(' ')}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
