/**
 * Fetch a Google Font subset (only the glyphs in `text`) as a TTF buffer for next/og ImageResponse.
 */
export async function loadGoogleFont(family: string, text: string): Promise<ArrayBuffer> {
  const url = `https://fonts.googleapis.com/css2?family=${family}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(url)).text();
  const fontUrl = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)?.[1];

  if (!fontUrl) {
    throw new Error(`Could not load font: ${family}`);
  }

  return (await fetch(fontUrl)).arrayBuffer();
}
