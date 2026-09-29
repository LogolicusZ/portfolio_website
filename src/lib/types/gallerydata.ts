interface Keyboard {
  id: string;
  name: string;
  images: Image[];

}

interface Image {
  alt: string;
  src: string;
  width: number;
  height: number;
}

export type { Keyboard, Image };