import styled from 'styled-components';

export const ToastContainer = styled.div`
  /* Default toast styles */
  .Toastify__toast {
    font-family: var(--font-primary);
    font-size: 1.4rem;
    font-weight: var(--font-weight-medium);
    border-radius: 5px;
    padding: var(--gap-sm) var(--gap-md);
    color: var(--color-white);
    background-color: var(--color-purple);
  }

  /* Success toast styles */
  .Toastify__toast--success {
    background-color: var(--color-green);
  }

  /* Error toast styles */
  .Toastify__toast--error {
    background-color: var(--color-orange);
  }

  /* Loading toast styles */
  .Toastify__toast--loading {
    background-color: var(--color-yellow);
  }

  /* Toast container styles */
  .Toastify__toast-container {
    z-index: 9999;
    top: 2rem;
  }

  /* Progress bar animation styles */
  .Toastify__progress-bar--animated {
    animation: Toastify__progress-bar--bounce 1s linear infinite;
  }

  /* Progress bar bounce animation */
  @keyframes Toastify__progress-bar--bounce {
    0% {
      transform: scaleX(1);
    }
    50% {
      transform: scaleX(0.3);
    }
    100% {
      transform: scaleX(1);
    }
  }

  /* Custom styles for toast background */
  .Toastify__toast--background {
    background-color: #2d2d2d;
  }
`;
