import React from 'react';
import './zutton.css';

export interface ZuttonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Zutton = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ZuttonProps) => {
  const mode = primary ? 'storybook-zutton--primary' : 'storybook-zutton--secondary';
  return (
    <button
      type="button"
      className={['storybook-zutton', `storybook-zutton--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
