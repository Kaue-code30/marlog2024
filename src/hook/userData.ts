import { AxiosResponse } from "axios";
import { ClientData } from "@/interface/clientData";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const API_URL = 'https://solutionsck.com.br/contato';

const fetchData = async (clientData: ClientData): Promise<AxiosResponse<ClientData>> => {
    const options = {
        method: 'POST',
        url: API_URL,
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json'
        },
        data: {
            nome: clientData.nome,
            email: clientData.email,
            telefone: clientData.telefone,
            assunto: clientData.assunto
        }
    };

    const response = await axios.request<ClientData>(options);
    console.log(response.status);
    
    return response;
}

export function useClientData() {
    const mutation = useMutation<AxiosResponse<ClientData>, Error, ClientData>({
        mutationFn: fetchData,

    });

    return {
        mutate: mutation.mutate,
        contentData: mutation.data?.data,
        isPending: mutation.isPending,
        isSuccess: mutation.isSuccess,
        response: mutation.data
    };
}
