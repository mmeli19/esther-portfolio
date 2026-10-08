# Image placeholders

Drop your real photos here, then uncomment the `src` prop in the matching component.

| File                              | Used in                                  | Suggested size      |
| --------------------------------- | ---------------------------------------- | ------------------- |
| `headshot.jpg`                    | `components/sections/hero.tsx` (portrait)| ~900 × 1200 px      |
| `athletics.jpg`                   | `components/sections/beyond.tsx`         | ~1600 × 900 px      |
| `army.jpg`                        | `components/sections/beyond.tsx`         | ~1600 × 900 px      |
| `army-1.jpg` … `army-4.jpg`       | `components/sections/beyond.tsx` gallery | ~900 × 1200 px each |
| `gotrash.jpg`                     | `components/sections/projects.tsx`       | ~1600 × 1200 px     |

To wire a photo in: open the component, find the `<ImagePlaceholder ... />` you want to fill, and uncomment the `src="/images/your-file.jpg"` line.
