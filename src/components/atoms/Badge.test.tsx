import { render, screen } from '@testing-library/react';
import { Badge } from '@/components/atoms/Badge';
import { describe, it, expect } from 'vitest';

describe('Badge', () => {
  it('renders the children content', () => {
    render(<Badge>Test Label</Badge>);
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  it('applies the correct variant styles', () => {
    const { container } = render(<Badge variant="success">Success</Badge>);
    expect(container.firstChild).toHaveClass('bg-green-100');
  });
});
