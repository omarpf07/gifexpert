import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Tests on <AddCategory/>', () => {
  test('should change the value on the text input', () => {
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole('textbox');
    fireEvent.input(input, { target: { value: 'DBZ' } });
    expect(input.value).toBe('DBZ');
  });

  test('should call onNewCategory if input has value', () => {
    const inputValue = 'Stranger Things';
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: 'Stranger Things' } });
    fireEvent.submit(form);

    expect(input.value).toBe('');
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test('should not call OnNewCategory if the input is empty', () => {
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const form = screen.getByRole('form');

    fireEvent.submit(form);

    expect(onNewCategory).toHaveBeenCalledTimes(0);
  });
});
