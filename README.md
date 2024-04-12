# The MiniZinc Website

This is the repository for the [MiniZinc website](https://www.minizinc.org).

## Issues

If you find a problem with one of the website's pages, please
[open an issue](https://github.com/MiniZinc/minizinc.github.io/issues) in this
repository.

Any issues with the MiniZinc documentation should be opened in the
[MiniZInc/libminizinc repository](https://github.com/MiniZinc/libminizinc).

## Development

```sh
npm ci
npm run dev
```

### Building

```sh
npm run build
```

The `BASE_PATH` environment variable can be set to change the base path for URLs in case the website is being served from a subdirectory.

