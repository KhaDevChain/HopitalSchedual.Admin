import { HopitalResponse } from "@/models/dto/response/Hopital.response";
import { HttpService } from "./http/HttpService";
import { HopitalModel } from "@/models/Hopital.model";
import { HopitalTypeEnum } from "@/types/enum/hopitaltype.enum";
import { ActivateEnum } from "@/types/enum/action.enum";

class HopitalService {
  static async getAll(): Promise<HopitalResponse|any> {
    try {
      const res = await HttpService.get("/hopital/all");

      const hospitals: HopitalModel[] = (res.data as any[]).map((item) => {
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
          item.representJob ?? "",
          item.activated as ActivateEnum,
          item.createdAt ?? "",
          item.doctors ?? [] // Nếu bạn cần map Doctor chi tiết thì có thể map thêm
        );
      });

      return new HopitalResponse(res.status, "Lấy danh sách bệnh viện thành công", null, hospitals);
    } catch (error) {
      console.error("Lỗi khi lấy danh sách bệnh viện:", error);
      return [];
    }
  }
}

export default HopitalService;