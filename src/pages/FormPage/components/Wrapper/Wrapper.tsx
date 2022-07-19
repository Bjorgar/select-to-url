import { WrapperProps } from './types';
import { child, fixedParent, parent } from './Wrapper.css';

export default function Wrapper({ children, isFixed }: WrapperProps) {
  return (
    <div className={isFixed ? fixedParent : parent}>
      <div className={child}>
        {children}
      </div>
    </div>
  );
}
