import { HopitalResponse } from "@/models/dto/response/Hopital.response";
import { HttpService } from "./http/HttpService";
import { HopitalModel } from "@/models/Hopital.model";
import { HopitalTypeEnum } from "@/types/enum/hopitaltype.enum";
import { ActivateEnum } from "@/types/enum/action.enum";

class HopitalService {
  static async getAll(): Promise<HopitalResponse|any> {
    try {
      const res = await HttpService.get("/hopital/all");
      const hopitalListRaw = res.data.hopitals;      

      const hospitals: HopitalModel[] = hopitalListRaw.map((item: any) => {
        return new HopitalModel(
          item.uniqueId,
          item.name,
          item.code,
          item.address,
          item.email ?? "",
          item.type as HopitalTypeEnum,
          item.taxCode ?? "",
          item.website ?? "",
          item.openWork ?? "",
          item.closeWork ?? "",
          item.logo,
          item.contract ?? "",
          item.representName ?? "",
          item.representPhone ?? "",
          item.representJob ?? "",
          item.activated as ActivateEnum,
          item.createdAt ?? "",
          item.doctors ?? [] // Nếu bạn cần map Doctor chi tiết thì có thể map thêm
        );
      });

      return new HopitalResponse(res.status, "Lấy danh sách bệnh viện thành công", null, hospitals);
    } catch (error) {
      return [];
    }
  }

  static async getById(id: string): Promise<HopitalResponse|any> {
    try {
      const res = await HttpService.get(`/hopital/${id}`);
      const item = res.data;

      const hospital = new HopitalModel(
        item.uniqueId,
        item.name,
        item.code,
        item.address,
        item.email ?? "",
        item.type as HopitalTypeEnum,
        item.taxCode ?? "",
        item.website ?? "",
        item.openWork ?? "",
        item.closeWork ?? "",
        item.logo,
        item.contract ?? "",
        item.representName ?? "",
        item.representJob ?? "",
        item.activated as ActivateEnum,
        item.createdAt ?? "",
        item.doctors ?? [] // Nếu bạn cần map Doctor chi tiết thì có thể map thêm
      );

      return new HopitalResponse(res.status, "Lấy thông tin bệnh viện thành công", hospital, []);
    } catch (error) {
      return [];
    }
  }

  static async create(hospital: HopitalModel): Promise<HopitalResponse|any> {
    try {
      const res = await HttpService.post("/hopital/save", hospital);
      console.log(res.data);
      
      return new HopitalResponse(res.status, "Tạo bệnh viện thành công", res.data, []);
    } catch (error) {
      return null;
    }
  }
}

export default HopitalService;