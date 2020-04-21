const sharp = require('sharp');

sharp('gotcha.png')
    .resize(80,80)
    .toFile('resize.png');

sharp('gotcha.png')
    .grayscale()
    .toFile('resize1.png');

sharp('gotcha.png')
    .rotate(90)
    .toFile('resize2.png');    