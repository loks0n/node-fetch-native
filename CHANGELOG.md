# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## v1.7.0


### 🚀 Enhancements

- Add subpath export `./src/index.js` for better compatibility ([daa574f](https://github.com/loks0n/node-fetch-native/commit/daa574f))
- Polyfill support ([fb27159](https://github.com/loks0n/node-fetch-native/commit/fb27159))
- Add `AbortController` ([9942b41](https://github.com/loks0n/node-fetch-native/commit/9942b41))
- Support `/node` subpath and `FORCE_NODE_FETCH` to use non-native ([#66](https://github.com/loks0n/node-fetch-native/pull/66))
- **pkg:** Add export conditions for runtime keys ([#75](https://github.com/loks0n/node-fetch-native/pull/75))
- Add warning for when node polyfill is used in non-node environments ([#90](https://github.com/loks0n/node-fetch-native/pull/90))
- Add explicit `/native` subpath ([4a917e5](https://github.com/loks0n/node-fetch-native/commit/4a917e5))
- Http proxy util ([#106](https://github.com/loks0n/node-fetch-native/pull/106))
- **proxy:** Export `fetch` and `createFetch` ([#108](https://github.com/loks0n/node-fetch-native/pull/108))
- **proxy:** Support no_proxy ([#109](https://github.com/loks0n/node-fetch-native/pull/109))
- Support custom agents ([1fe4152](https://github.com/loks0n/node-fetch-native/commit/1fe4152))

### 🔥 Performance

- Minify dist by default ([413e3a3](https://github.com/loks0n/node-fetch-native/commit/413e3a3))

### 🩹 Fixes

- **types:** Add missing type of `AbortController` ([cc53eb7](https://github.com/loks0n/node-fetch-native/commit/cc53eb7))
- Add hotfix for stackblitz support ([#10](https://github.com/loks0n/node-fetch-native/pull/10))
- **polyfill:** Avoid reassigning globals ([ef92a04](https://github.com/loks0n/node-fetch-native/commit/ef92a04))
- Use soft warning for node bundle warn ([f46566f](https://github.com/loks0n/node-fetch-native/commit/f46566f))
- **proxy:** Support lower-case environment variables too ([144996b](https://github.com/loks0n/node-fetch-native/commit/144996b))
- **proxy:** Update environment variable check order ([742d27e](https://github.com/loks0n/node-fetch-native/commit/742d27e))
- Import order ([282ed5f](https://github.com/loks0n/node-fetch-native/commit/282ed5f))

### 💅 Refactors

- Update repository ([bca5ca9](https://github.com/loks0n/node-fetch-native/commit/bca5ca9))
- Reuse exports from `src/node.ts` ([a6e602d](https://github.com/loks0n/node-fetch-native/commit/a6e602d))

### 📦 Build

- Add `types` field to subpath exports ([110a344](https://github.com/loks0n/node-fetch-native/commit/110a344))
- Missing types for `/polyfill` subpath ([#84](https://github.com/loks0n/node-fetch-native/pull/84))
- Fix export conditions ([790232d](https://github.com/loks0n/node-fetch-native/commit/790232d))
- Add backward compatible type exports ([2e8d2aa](https://github.com/loks0n/node-fetch-native/commit/2e8d2aa))
- Fix exports for typescript support :} ([a180b16](https://github.com/loks0n/node-fetch-native/commit/a180b16))
- Safe minify options ([83a9af8](https://github.com/loks0n/node-fetch-native/commit/83a9af8))
- Add top level `react-native` field to `package.json` ([#98](https://github.com/loks0n/node-fetch-native/pull/98))
- Add backward compatible types for `/proxy` subpath export ([584ee24](https://github.com/loks0n/node-fetch-native/commit/584ee24))
- **proxy:** Reorder to fix cjs build ([0063bc1](https://github.com/loks0n/node-fetch-native/commit/0063bc1))
- Remove non existing `node.import` condition ([#115](https://github.com/loks0n/node-fetch-native/pull/115))
- Remove `node> require` condition for `/proxy` subpath ([ff7f506](https://github.com/loks0n/node-fetch-native/commit/ff7f506))

### 🏡 Chore

- Update readme ([50d077b](https://github.com/loks0n/node-fetch-native/commit/50d077b))
- Update readme ([ba98ace](https://github.com/loks0n/node-fetch-native/commit/ba98ace))
- **release:** 0.1.1 ([34cff93](https://github.com/loks0n/node-fetch-native/commit/34cff93))
- Update readme ([a428b02](https://github.com/loks0n/node-fetch-native/commit/a428b02))
- Update readme ([78eff16](https://github.com/loks0n/node-fetch-native/commit/78eff16))
- **release:** 0.1.2 ([251f2c2](https://github.com/loks0n/node-fetch-native/commit/251f2c2))
- **release:** 0.1.3 ([f37a57b](https://github.com/loks0n/node-fetch-native/commit/f37a57b))
- Update all dev dependencies ([2911bab](https://github.com/loks0n/node-fetch-native/commit/2911bab))
- **release:** 0.1.4 ([c0495d1](https://github.com/loks0n/node-fetch-native/commit/c0495d1))
- Update dependencies ([7bae2b3](https://github.com/loks0n/node-fetch-native/commit/7bae2b3))
- Update badge ([39b7109](https://github.com/loks0n/node-fetch-native/commit/39b7109))
- **release:** 0.1.5 ([87aeaea](https://github.com/loks0n/node-fetch-native/commit/87aeaea))
- **release:** 0.1.6 ([d395f9b](https://github.com/loks0n/node-fetch-native/commit/d395f9b))
- Revert hotfix ([cb01b56](https://github.com/loks0n/node-fetch-native/commit/cb01b56))
- **release:** 0.1.7 ([bf1ca90](https://github.com/loks0n/node-fetch-native/commit/bf1ca90))
- Update unbuild ([a6d65d5](https://github.com/loks0n/node-fetch-native/commit/a6d65d5))
- **release:** 0.1.8 ([12d85ef](https://github.com/loks0n/node-fetch-native/commit/12d85ef))
- **release:** 1.0.0 ([4add0b2](https://github.com/loks0n/node-fetch-native/commit/4add0b2))
- **release:** 1.0.1 ([7eb7dfd](https://github.com/loks0n/node-fetch-native/commit/7eb7dfd))
- Update repo ([d63453e](https://github.com/loks0n/node-fetch-native/commit/d63453e))
- **release:** V1.0.2 ([e22cbe7](https://github.com/loks0n/node-fetch-native/commit/e22cbe7))
- **release:** V1.1.0 ([6c20d62](https://github.com/loks0n/node-fetch-native/commit/6c20d62))
- Disable broken eslint rule ([ec40196](https://github.com/loks0n/node-fetch-native/commit/ec40196))
- Update lockfile ([00199b3](https://github.com/loks0n/node-fetch-native/commit/00199b3))
- Lint ([3e36417](https://github.com/loks0n/node-fetch-native/commit/3e36417))
- **release:** V1.1.1 ([1a1a209](https://github.com/loks0n/node-fetch-native/commit/1a1a209))
- Update dev dependencies ([72cb8cb](https://github.com/loks0n/node-fetch-native/commit/72cb8cb))
- **release:** V1.2.0 ([a420c53](https://github.com/loks0n/node-fetch-native/commit/a420c53))
- Update lockfile ([dc87446](https://github.com/loks0n/node-fetch-native/commit/dc87446))
- **release:** V1.3.0 ([5dd02ed](https://github.com/loks0n/node-fetch-native/commit/5dd02ed))
- **release:** V1.3.1 ([a5e7c55](https://github.com/loks0n/node-fetch-native/commit/a5e7c55))
- **release:** V1.3.2 ([21018b6](https://github.com/loks0n/node-fetch-native/commit/21018b6))
- **release:** V1.3.3 ([0973ec6](https://github.com/loks0n/node-fetch-native/commit/0973ec6))
- **release:** V1.4.0 ([f6c0996](https://github.com/loks0n/node-fetch-native/commit/f6c0996))
- Update dependencies ([4d451d6](https://github.com/loks0n/node-fetch-native/commit/4d451d6))
- Sort package-json ([1cca824](https://github.com/loks0n/node-fetch-native/commit/1cca824))
- **release:** V1.4.1 ([eed640e](https://github.com/loks0n/node-fetch-native/commit/eed640e))
- Update lockfile ([586fde5](https://github.com/loks0n/node-fetch-native/commit/586fde5))
- Update readme ([f6dd60d](https://github.com/loks0n/node-fetch-native/commit/f6dd60d))
- Update description ([faea9f8](https://github.com/loks0n/node-fetch-native/commit/faea9f8))
- **release:** V1.5.0 ([6ba95a6](https://github.com/loks0n/node-fetch-native/commit/6ba95a6))
- **release:** V1.5.1 ([16f01ce](https://github.com/loks0n/node-fetch-native/commit/16f01ce))
- **release:** V1.6.0 ([fa902a2](https://github.com/loks0n/node-fetch-native/commit/fa902a2))
- **release:** V1.6.1 ([5f51544](https://github.com/loks0n/node-fetch-native/commit/5f51544))
- Update deps ([c3f9f18](https://github.com/loks0n/node-fetch-native/commit/c3f9f18))
- **release:** V1.6.2 ([638345b](https://github.com/loks0n/node-fetch-native/commit/638345b))
- Update lockfile ([889926a](https://github.com/loks0n/node-fetch-native/commit/889926a))
- **release:** V1.6.3 ([0274df2](https://github.com/loks0n/node-fetch-native/commit/0274df2))
- **release:** V1.6.4 ([c0c69a7](https://github.com/loks0n/node-fetch-native/commit/c0c69a7))

### ✅ Tests

- Expect node-fetch specific exports too ([8515e75](https://github.com/loks0n/node-fetch-native/commit/8515e75))

### ❤️ Contributors

- Loks0n ([@loks0n](http://github.com/loks0n))
- Pooya Parsa ([@pi0](http://github.com/pi0))
- Thomas Kjærgaard ([@tkjaergaard](http://github.com/tkjaergaard))
- Rui Ying ([@robertying](http://github.com/robertying))
- Nam Nguyen ([@willnguyen1312](http://github.com/willnguyen1312))

## v1.6.4

[compare changes](https://github.com/unjs/node-fetch-native/compare/v1.6.3...v1.6.4)

### 📦 Build

- Remove `node> require` condition for `/proxy` subpath ([ff7f506](https://github.com/unjs/node-fetch-native/commit/ff7f506))

### ❤️ Contributors

- Pooya Parsa ([@pi0](http://github.com/pi0))

## v1.6.3

[compare changes](https://github.com/unjs/node-fetch-native/compare/v1.6.2...v1.6.3)

### 🏡 Chore

- Update lockfile ([889926a](https://github.com/unjs/node-fetch-native/commit/889926a))

### ❤️ Contributors

- Pooya Parsa ([@pi0](http://github.com/pi0))

## v1.6.2

[compare changes](https://github.com/unjs/node-fetch-native/compare/v1.6.1...v1.6.2)

### 📦 Build

- Remove non existing `node.import` condition ([#115](https://github.com/unjs/node-fetch-native/pull/115))

### 🏡 Chore

- Update deps ([c3f9f18](https://github.com/unjs/node-fetch-native/commit/c3f9f18))

### ❤️ Contributors

- Pooya Parsa ([@pi0](http://github.com/pi0))
- Thomas Kjærgaard ([@tkjaergaard](http://github.com/tkjaergaard))

## v1.6.1

[compare changes](https://github.com/unjs/node-fetch-native/compare/v1.6.0...v1.6.1)

### 📦 Build

- **proxy:** Reorder to fix cjs build ([0063bc1](https://github.com/unjs/node-fetch-native/commit/0063bc1))

### ❤️ Contributors

- Pooya Parsa ([@pi0](http://github.com/pi0))

## v1.6.0

[compare changes](https://github.com/unjs/node-fetch-native/compare/v1.5.1...v1.6.0)

### 🚀 Enhancements

- **proxy:** Export `fetch` and `createFetch` ([#108](https://github.com/unjs/node-fetch-native/pull/108))
- **proxy:** Support no_proxy ([#109](https://github.com/unjs/node-fetch-native/pull/109))

### 🩹 Fixes

- **proxy:** Update environment variable check order ([742d27e](https://github.com/unjs/node-fetch-native/commit/742d27e))

### ❤️ Contributors

- Pooya Parsa ([@pi0](http://github.com/pi0))

## v1.5.1

[compare changes](https://github.com/unjs/node-fetch-native/compare/v1.5.0...v1.5.1)

### 🩹 Fixes

- **proxy:** Support lower-case environment variables too ([144996b](https://github.com/unjs/node-fetch-native/commit/144996b))

### 📦 Build

- Add backward compatible types for `/proxy` subpath export ([584ee24](https://github.com/unjs/node-fetch-native/commit/584ee24))

### ❤️ Contributors

- Pooya Parsa ([@pi0](http://github.com/pi0))

## v1.5.0

[compare changes](https://github.com/unjs/node-fetch-native/compare/v1.4.1...v1.5.0)

### 🚀 Enhancements

- Http proxy util ([#106](https://github.com/unjs/node-fetch-native/pull/106))

### 🏡 Chore

- Update lockfile ([586fde5](https://github.com/unjs/node-fetch-native/commit/586fde5))
- Update readme ([f6dd60d](https://github.com/unjs/node-fetch-native/commit/f6dd60d))
- Update description ([faea9f8](https://github.com/unjs/node-fetch-native/commit/faea9f8))

### ❤️ Contributors

- Pooya Parsa ([@pi0](http://github.com/pi0))

## v1.4.1

[compare changes](https://github.com/unjs/node-fetch-native/compare/v1.4.0...v1.4.1)

### 📦 Build

- Add top level `react-native` field to `package.json` ([#98](https://github.com/unjs/node-fetch-native/pull/98))

### 🏡 Chore

- Update dependencies ([4d451d6](https://github.com/unjs/node-fetch-native/commit/4d451d6))
- Sort package-json ([1cca824](https://github.com/unjs/node-fetch-native/commit/1cca824))

### ❤️ Contributors

- Pooya Parsa ([@pi0](http://github.com/pi0))
- Rui Ying ([@robertying](http://github.com/robertying))

## v1.4.0

[compare changes](https://github.com/unjs/node-fetch-native/compare/v1.3.3...v1.4.0)

### 🚀 Enhancements

- Add explicit `/native` subpath ([4a917e5](https://github.com/unjs/node-fetch-native/commit/4a917e5))

### 🩹 Fixes

- Use soft warning for node bundle warn ([f46566f](https://github.com/unjs/node-fetch-native/commit/f46566f))

### ❤️ Contributors

- Pooya Parsa ([@pi0](http://github.com/pi0))

## v1.3.3

[compare changes](https://github.com/unjs/node-fetch-native/compare/v1.3.2...v1.3.3)

### 📦 Build

- Safe minify options ([83a9af8](https://github.com/unjs/node-fetch-native/commit/83a9af8))

### ❤️ Contributors

- Pooya Parsa ([@pi0](http://github.com/pi0))

## v1.3.2

[compare changes](https://github.com/unjs/node-fetch-native/compare/v1.3.1...v1.3.2)

### 📦 Build

- Fix exports for typescript support :} ([a180b16](https://github.com/unjs/node-fetch-native/commit/a180b16))

### ❤️ Contributors

- Pooya Parsa ([@pi0](http://github.com/pi0))

## v1.3.1

[compare changes](https://github.com/unjs/node-fetch-native/compare/v1.3.0...v1.3.1)

### 🔥 Performance

- Minify dist by default ([413e3a3](https://github.com/unjs/node-fetch-native/commit/413e3a3))

### 💅 Refactors

- Reuse exports from `src/node.ts` ([a6e602d](https://github.com/unjs/node-fetch-native/commit/a6e602d))

### 📦 Build

- Fix export conditions ([790232d](https://github.com/unjs/node-fetch-native/commit/790232d))
- Add backward compatible type exports ([2e8d2aa](https://github.com/unjs/node-fetch-native/commit/2e8d2aa))

### ❤️ Contributors

- Pooya Parsa ([@pi0](http://github.com/pi0))

## v1.3.0

[compare changes](https://github.com/unjs/node-fetch-native/compare/v1.2.0...v1.3.0)

### 🚀 Enhancements

- Add warning for when node polyfill is used in non-node environments ([#90](https://github.com/unjs/node-fetch-native/pull/90))

### 📦 Build

- Missing types for `/polyfill` subpath ([#84](https://github.com/unjs/node-fetch-native/pull/84))

### 🏡 Chore

- Update lockfile ([dc87446](https://github.com/unjs/node-fetch-native/commit/dc87446))

### ❤️ Contributors

- Pooya Parsa ([@pi0](http://github.com/pi0))
- Nam Nguyen ([@willnguyen1312](http://github.com/willnguyen1312))

## v1.2.0

[compare changes](https://undefined/undefined/compare/v1.1.1...v1.2.0)


### 🚀 Enhancements

  - **pkg:** Add export conditions for runtime keys (#75)

### 🏡 Chore

  - Update dev dependencies (72cb8cb)

### ❤️  Contributors

- Pooya Parsa ([@pi0](http://github.com/pi0))

## v1.1.1

[compare changes](https://undefined/undefined/compare/v1.1.0...v1.1.1)


### 🩹 Fixes

  - **polyfill:** Avoid reassigning globals (ef92a04)

### 🏡 Chore

  - Disable broken eslint rule (ec40196)
  - Update lockfile (00199b3)
  - Lint (3e36417)

### ❤️  Contributors

- Pooya Parsa ([@pi0](http://github.com/pi0))

## v1.1.0

[compare changes](https://undefined/undefined/compare/v1.0.2...v1.1.0)


### 🚀 Enhancements

  - Support `/node` subpath and `FORCE_NODE_FETCH` to use non-native (#66)

### ❤️  Contributors

- Pooya Parsa <pyapar@gmail.com>

## v1.0.2


### 🏡 Chore

  - **release:** 1.0.1 (abdb2ad)
  - **release:** 1.0.1 (7eb7dfd)
  - Update repo (d63453e)

### ❤️  Contributors

- Pooya Parsa <pooya@pi0.io>

### [1.0.1](https://github.com/unjs/node-fetch-native/compare/v1.0.0...v1.0.1) (2022-11-14)

## [1.0.0](https://github.com/unjs/node-fetch-native/compare/v0.1.8...v1.0.0) (2022-11-14)

### [0.1.8](https://github.com/unjs/node-fetch-native/compare/v0.1.7...v0.1.8) (2022-10-15)

### [0.1.7](https://github.com/unjs/node-fetch-native/compare/v0.1.6...v0.1.7) (2022-09-20)

### [0.1.6](https://github.com/unjs/node-fetch-native/compare/v0.1.5...v0.1.6) (2022-09-20)


### Bug Fixes

* add hotfix for stackblitz support ([#10](https://github.com/unjs/node-fetch-native/issues/10)) ([fe77e7a](https://github.com/unjs/node-fetch-native/commit/fe77e7a02c5778e87d487b8a37e0d15c61ef10f7))

### [0.1.5](https://github.com/unjs/node-fetch-native/compare/v0.1.4...v0.1.5) (2022-09-19)

### [0.1.4](https://github.com/unjs/node-fetch-native/compare/v0.1.3...v0.1.4) (2022-06-20)

### [0.1.3](https://github.com/unjs/node-fetch-native/compare/v0.1.2...v0.1.3) (2022-05-11)


### Bug Fixes

* **types:** add missing type of `AbortController` ([cc53eb7](https://github.com/unjs/node-fetch-native/commit/cc53eb7541d5d9c673efd6a2b01ed9c57ea2085d))

### [0.1.2](https://github.com/unjs/node-fetch-native/compare/v0.1.1...v0.1.2) (2022-05-11)


### Features

* add `AbortController` ([9942b41](https://github.com/unjs/node-fetch-native/commit/9942b41d428b445ff74f868a6a6eaa9dac6b2806))
* polyfill support ([fb27159](https://github.com/unjs/node-fetch-native/commit/fb271590eaeeecbcaadc11e3a999df0830ec42f4))

### 0.1.1 (2022-05-11)


### Features

* add subpath export `./src/index.js` for better compatibility ([daa574f](https://github.com/unjs/node-fetch-native/commit/daa574fdb1de36c5398e948709224b2930f83a4e))
