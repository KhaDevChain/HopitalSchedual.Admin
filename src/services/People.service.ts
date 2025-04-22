
import PeopleModel from "@/models/People.model";
import { HttpService } from "./http/HttpService"
import { parseCommonHttpResult } from "./http/parseCommonHttpResult";
export const PeopleService = {
    async getContact(data: any) {
        const response = await HttpService.doGetRequest("/users", data);
        const res = parseCommonHttpResult(response)
        return res;
    },
    async fetchContacts() {
        // const response = await HttpService.doGetRequest("/users", data);
        // const res = parseCommonHttpResult(response)
        return PeopleModel.fakedata;
    },
    async addContact(data: any) {
        const response = await HttpService.doPostRequest("/users", data);
        const res = parseCommonHttpResult(response)
        return res;
    },
    async updateContact(data: any) {
        const response = await HttpService.doPatchRequest("/users/" + data._id + '/role/' + data.roleId, {});
        const res = parseCommonHttpResult(response)
        return res;
    },
    async deleteContact(id: string) {
        const response = await HttpService.doPatchRequest("/users/" + id + "/soft-delete", {});
        const res = parseCommonHttpResult(response)
        return res;
    },
    async filterContact(cityId: string, kiosId: string) {
        const response = await HttpService.doPatchRequest("/users/cityId=" + cityId + "&kiosId=" + kiosId, {});
        const res = parseCommonHttpResult(response)
        return res;
    },
}