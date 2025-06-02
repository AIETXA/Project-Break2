const  multer   =  require ( 'multer' ) 
const  upload  =  multer ( {  dest : 'uploads/'  } ) //cuando alguien suba un archivo lo guarda en upload

module.exports = upload;