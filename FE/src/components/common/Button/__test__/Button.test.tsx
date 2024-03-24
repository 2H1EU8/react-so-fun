import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import { Button } from '..';
describe('Button tests', () => {
        // The Button component should render with a button element
    it('should render a button element', () => {
    render(<Button />);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument()
    });
});

test('button click event', () => {
  const handleClick = jest.fn();
  const { getByText } = render(<Button onClick={handleClick} text="Click" />);
  fireEvent.click(getByText('Click'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
