import { HttpService } from "../http/HttpService";

class FileService {
  static async upload(logoFile: File): Promise<string|null> {
    try {
      const formData = new FormData();
      formData.append("file", logoFile);
      formData.append("module", "hopital"); // Thư mục lưu ảnh logo bệnh viện

      const res = await HttpService.post("/file/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true
      });

      return res.data; // Trả về đường dẫn ảnh đã lưu
    } catch (error) {
      return null;
    }
  }
}

export default FileService;