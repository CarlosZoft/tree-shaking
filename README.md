# tree-shaking

## Requirements

- WebPack v4 and v5 will do tree shaking in production mode
- Use ES6 Modules (Export and Import)
- Do not use commomJS Modules

## Overview

- Unused exports not being removed in Dev Mode
- Use sideEffects to specify the parts having side effects on application when they are removed
- Webpack uses terser to parse module dependency graph
- Make sure to not use any library which uses commonJS specification
