// utils/readHospitalExcelFile.ts
import * as XLSX from 'xlsx';

export interface Hospital {
  name: string;
  code: string;
  address: string;
  email: string;
  type: string;
  taxCode: string;
  website: string;
  openTime: string;
  closeTime: string;
  representative: string;
  representativePhone: string;
  location: string;
}

export const readHospitalExcelFile = async (file: File): Promise<Hospital[]> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const data = event.target?.result;
      if (!data) return reject('Không đọc được file');

      const workbook = XLSX.read(data, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];

      const raw = XLSX.utils.sheet_to_json<any[]>(sheet, { header: 1 });
      const rows = raw.slice(1); // Bỏ dòng tiêu đề

      const hospitals: Hospital[] = rows.map((row) => ({
        name: row[0] ?? '',
        code: row[1] ?? '',
        address: row[2] ?? '',
        email: row[3] ?? '',
        type: row[4] ?? '',
        taxCode: row[5] ?? '',
        website: row[6] ?? '',
        openTime: row[7] ?? '',
        closeTime: row[8] ?? '',
        representative: row[9] ?? '',
        representativePhone: row[10] ?? '',
        location: row[11] ?? '',
      }));

      resolve(hospitals);
    };

    reader.onerror = (error) => reject(error);
    reader.readAsBinaryString(file);
  });
};
