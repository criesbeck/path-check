Script to see if the directory where NPM installs global binaries -- NPM's global prefix -- is in the PATH environment variable. If it is not, then you will get command not found errors for NPM binaries.

# Installation

```
git clone https://github.com/criesbeck/path-check.git
cd path-check
npm install
```

# Usage

```
node index.js
```

If successful, will print the NPM directory and say that it was found.

If unsuccessful, will print the NPM directory and the list of directories in PATH.


