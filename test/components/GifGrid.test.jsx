import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Tests on <GifGrid/>', () => {
  const category = 'Dragon Ball Z';
  test('should show loading initially', () => {
    useFetchGifs.mockReturnValue({
      gifs: [],
      isLoading: true,
    });
    render(<GifGrid category={category} />);
    expect(screen.queryByText('Loading...')).toBeFalsy();
    expect(screen.getByText(category));
  });

  test('should show items when images get loaded with useFetchGifs', () => {
    const gifs = [
      {
        id: 'ABC',
        title: 'John Doe',
        url: 'https://johndoe/john.gif',
      },
      {
        id: 'DEF',
        title: 'Ann Marie',
        url: 'https://Ann/annmarie.gif',
      },
    ];

    useFetchGifs.mockReturnValue({
      gifs: gifs,
      isLoading: true,
    });
    render(<GifGrid category={category} />);
    expect(screen.getAllByRole('img').length).toBe(2);
  });
});
