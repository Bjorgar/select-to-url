import { keyframes, style } from '@vanilla-extract/css';

const vanish = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
});

export const spinner = style({
  display: 'inline-block',
  position: 'relative',
  width: '80px',
  height: '80px',
});

export const spinnerChild = style({
  transformOrigin: '40px 40px',
  animation: `1.2s linear infinite ${vanish}`,

  selectors: {
    '&:after': {
      content: '',
      display: 'block',
      position: 'absolute',
      top: '3px',
      left: '37px',
      width: '6px',
      height: '18px',
      borderRadius: '20%',
      background: 'steelblue',
    },
    '&:nth-child(1)': {
      transform: 'rotate(0deg)',
      animationDelay: '-1.1s',
    },
    '&:nth-child(2)': {
      transform: 'rotate(30deg)',
      animationDelay: '-1s',
    },
    '&:nth-child(3)': {
      transform: 'rotate(60deg)',
      animationDelay: '-0.9s',
    },
    '&:nth-child(4)': {
      transform: 'rotate(90deg)',
      animationDelay: '-0.8s',
    },
    '&:nth-child(5)': {
      transform: 'rotate(120deg)',
      animationDelay: '-0.7s',
    },
    '&:nth-child(6)': {
      transform: 'rotate(150deg)',
      animationDelay: '-0.6s',
    },
    '&:nth-child(7)': {
      transform: 'rotate(180deg)',
      animationDelay: '-0.5s',
    },
    '&:nth-child(8)': {
      transform: 'rotate(210deg)',
      animationDelay: '-0.4s',
    },
    '&:nth-child(9)': {
      transform: 'rotate(240deg)',
      animationDelay: '-0.3s',
    },
    '&:nth-child(10)': {
      transform: 'rotate(270deg)',
      animationDelay: '-0.2s',
    },
    '&:nth-child(11)': {
      transform: 'rotate(300deg)',
      animationDelay: '-0.1s',
    },
    '&:nth-child(12)': {
      transform: 'rotate(330deg)',
      animationDelay: '0s',
    },
  },
});
