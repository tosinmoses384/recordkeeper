import axios, { AxiosInstance } from "axios";

export class Users {
  protected readonly instance: AxiosInstance;

  public constructor(url: string) {
    this.instance = axios.create({
      baseURL: url,
      timeout: 30000,
      timeoutErrorMessage: "Time out!",
      headers: {
        Accept: "appication/json",
        "Content-type": "application/json",
      },
    });
  }

  fetchTeachers = async () => {
    const res = await this.instance.get("api/teachrecords", {});
    return res;
  };

  addTeacher = async (data: any) => {
    const res = await this.instance.post(`api/teachrecords`, data, {});
    return res;
  };

  fetchStudents = async () => {
    const res = await this.instance.get("api/studrecords", {});
    return res;
  };

  addStudent = async (data: any) => {
    const res = await this.instance.post(`api/studrecords`, data, {});
    return res;
  };
}
