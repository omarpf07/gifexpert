import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Tests on useFetchGifs Hook', () => {
  test('should return to the initial status', () => {
    const { result } = renderHook(() => useFetchGifs('Stranger Things'));
    const { gifs, loading } = result.current;

    expect(gifs.length).toBe(0);
    expect(loading).toBeTruthy;
  });

  test('should return an image array, and loading false', async () => {
    const { result } = renderHook(() => useFetchGifs('Stranger Things'));

    await waitFor(() => expect(result.current.gifs.length).toBeGreaterThan(0));
    const { gifs, loading } = result.current;

    expect(gifs.length).toBeGreaterThan(0);
    expect(loading).toBeFalsy;
  });
});
