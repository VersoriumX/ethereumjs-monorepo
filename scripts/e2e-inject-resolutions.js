const fs = require('fs')

const resolutions = require(`${process.cwd()}/resolutions.json`)

const corePackageJsonLocation = `${process.cwd()}/hardhat/packages/hardhat-core/package.json`
const corePackageJson = require(corePackageJsonLocation)

const newCorePackageJson = {
  ...corePackageJson,
  dependencies: {
    ...corePackageJson.dependencies,
    ...resolutions,
  },
}

fs.writeFileSync(corePackageJsonLocation, JSON.stringify(newCorePackageJson, null, 2))

const rootPackageJsonLocation = `${process.cwd()}/hardhat/package.json`
const rootPackageJson = require(rootPackageJsonLocation)

const newRootPackageJson = {
  ...rootPackageJson,
  resolutions: {
    ...rootPackageJson.resolutions,
    '@types/node': '^10.17.24',
    '@types/bn.js': '^5.1.0',
  },
}

fs.writeFileSync(rootPackageJsonLocation, JSON.stringify(newRootPackageJson, null, 2))
