import {google} from "googleapis";
import {Credentials, ResponseListClients} from "../types/types.js";


export class GoogleApi {

    credentials: Credentials;

    constructor(credentials: Credentials) {
        this.credentials = credentials;
    }

    async exportToSheets (sheetID: string, listName: string, data: ResponseListClients): Promise<boolean> {
        const auth = new google.auth.JWT({
            email: this.credentials.client_email,
            key: this.credentials.private_key,
            scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        });

        const sheets = google.sheets({ version: "v4", auth });

        const headers = [
            "ID",
            "First Name",
            "Last Name",
            "Gender",
            "Address",
            "City",
            "Phone",
            "Email",
            "Status",
        ];

        const rows = data.map((client) => [
            client.id,
            client.firstName,
            client.lastName,
            client.gender,
            client.address,
            client.city,
            client.phone,
            client.email,
            client.status
        ]);

        try {
            await sheets.spreadsheets.values.update({
                spreadsheetId: sheetID,
                range: listName + "!A1",
                valueInputOption: "RAW",
                requestBody: {
                    values: [headers, ...rows],
                },
            });
            console.log("Данные успешно экспортированы в Google-таблицу!");
            return true
        } catch (error) {
            console.error("Ошибка при записи данных:", error);
            return false
        }

    }

}