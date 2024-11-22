enum Types {
  registration = 'http://94.103.91.4:5000/auth/registration',
  login = 'http://94.103.91.4:5000/auth/login',
  apiClients = 'http://94.103.91.4:5000/clients',
}

type ResponseStatusClients = Array<{ id: number; status: string }>;

export interface Credentials {
  "type"?: string,
  "project_id"?: string,
  "private_key_id"?: string,
  "private_key": string,
  "client_email": string,
  "client_id"?: string,
  "auth_uri"?: string,
  "token_uri"?: string,
  "auth_provider_x509_cert_url"?: string,
  "client_x509_cert_url"?: string,
  "universe_domain"?: string
}

interface ListClients {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
  address: string;
  city: string;
  phone: string;
  email: string;
  status?: string
}

type ResponseListClients = Array<ListClients>;

export { Types, ResponseListClients, ResponseStatusClients };
