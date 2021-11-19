# mgnl-spa-inheritance

Currently (19 Nov 2021) Headless Magnolia (Delivery API) does not offer area inheritance.

Here is a basic example of solving this limitation with code.

## Page header inheritance

Home page template has editable header area.

Contact (child page) does not have header area. It fetches and renders the Home page template header.

Check both templates in `/spa/src/pages'.

## Usage

1. Copy `spa-lm` folder to your `light-modules` folder.
2. Create page `spa-home` with `SPA Home` page template.
3. Add components to `header` area in `spa-home`.
4. Create `spa-home` child with `SPA Contact` page template.

## Rebuild `spa`

1. In `spa` folder run:
   ```
   npm i
   PUBLIC_URL=/magnoliaAuthor/.resources/spa-lm/webresources/build/ npm run build
   ```
2. Copy resulting `build` folder to `spa-lm/webresources`.
