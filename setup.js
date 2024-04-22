const fs = require('fs')
const path = require('path')
const logger = require('./logger')
const sourceFilePath = path.join(__dirname, 'hooks', 'pre-commit')
const destinationFilePath = path.join(__dirname, '.git', 'hooks', 'pre-commit')
fs.copyFile(sourceFilePath, destinationFilePath, (err) => {
  if (err) {
    logger.error(`Error copying file:${err}`)
  } else {
    logger.info('File copied successfully!')
  }
})
