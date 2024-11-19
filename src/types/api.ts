enum Api {
  registration = 'http://94.103.91.4:5000/auth/registration',
  login = 'http://94.103.91.4:5000/auth/login',
  apiClients = 'http://94.103.91.4:5000/clients',
}

type ResponseStatusClients = Array<{ id: number; status: string }>;

interface ListClients {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
  address: string;
  city: string;
  phone: string;
  email: string;
}

type ResponseListClients = Array<ListClients>;

export { Api, ResponseListClients, ResponseStatusClients };
