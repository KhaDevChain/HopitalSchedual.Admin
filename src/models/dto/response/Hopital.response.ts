import { HopitalModel } from "@/models/Hopital.model";

export class HopitalResponse {
    constructor(
        public code?: number,
        public message?: string,
        public hopital?: HopitalModel|null,
        public hopitals?: HopitalModel[]|null
    ) {
        this.code = code;
        this.message = message;
        this.hopital = hopital;
        this.hopitals = hopitals;
    }
}

