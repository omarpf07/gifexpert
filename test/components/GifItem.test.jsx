import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Tests on <GifItem/>', () => {
  const title = 'DBZ';
  const url = 'https://dbz.com/dbz.jpg';

  test('should match with snapshot', () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test('should show the image and the ALT attribute indicated.', () => {
    render(<GifItem title={title} url={url} />);
    const { src, alt } = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test('should show the title in the component', () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
