import { Request, Response } from 'express';
import imageService from '../services/image.service';

class ImageController {
  uploadSingle(req: Request, res: Response) {
    const { file, headers: { cloud_name, api_key, api_secret } } = req;
    return imageService.uploadSingleImage(file, { cloud_name, api_key, api_secret });
  }
  uploadMulti(req: Request, res: Response) {
    const { files, headers: { cloud_name, api_key, api_secret } } = req;
    return imageService.uploadMultiImage(files, { cloud_name, api_key, api_secret });
  }
}

export default ImageController;
