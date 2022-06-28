import { render, screen, waitFor } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Tests on <GifExpertApp/>', () => {
  test('should show loading phase', () => {
    render(<GifExpertApp />);
    expect(screen.getByText('Loading...')).toBeTruthy();
  });

  test('should Print default gif list', async () => {
    render(<GifExpertApp />);
    await waitFor(() =>
      expect(screen.getAllByRole('img').length).toBeGreaterThan(0)
    );
  });
});
