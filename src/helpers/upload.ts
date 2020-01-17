import multer from 'multer';
import path from 'path';
import Boom from '@hapi/boom';

const upload = multer({
  dest: 'uploads/',
  fileFilter: (req: any, file: any, callback: Function) => {
    const ext = path.extname(file.originalname);
    const acceptedExts: string[] = ['.png', '.jpg', '.jpeg', '.gif'];
    if (acceptedExts.indexOf(ext) === -1) {
      return callback(Boom.badRequest('Invalid image extension'));
    }
    callback(null, true);
  }
});

export default upload;
