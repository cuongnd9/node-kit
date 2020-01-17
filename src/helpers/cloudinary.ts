import { v2 as service } from 'cloudinary';

export default async function cloudinary(cloudiaryConfig: any, path: string): Promise<any> {
  service.config(cloudiaryConfig);
  return new Promise((resolve, reject) => {
    service.uploader.upload(path, (error: any, result: any) => {
      if (error) {
        return reject(error);
      }
      resolve(result);
    });
  });
}
